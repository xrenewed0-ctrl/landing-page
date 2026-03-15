/*
   EXPERT BUSINESS - JavaScript
   Handles interactivity, chatbot, forms, and mobile menu
*/

// ============================================
// DOM ELEMENTS
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const chatbotButton = document.getElementById('chatbotButton');
const chatbotWidget = document.getElementById('chatbotWidget');
const closeChatbot = document.getElementById('closeChatbot');
const chatbotInput = document.getElementById('chatbotInput');
const sendMessage = document.getElementById('sendMessage');
const chatbotMessages = document.getElementById('chatbotMessages');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');

// ============================================
// MOBILE MENU TOGGLE
// ============================================
hamburger?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
        hamburger?.classList.remove('active');
    });
});

// ============================================
// CHATBOT FUNCTIONALITY
// ============================================

// Chatbot configuration
const CHATBOT_API_URL = 'http://localhost:3000/api/chat'; // Change this if backend is on different server
let chatbotSessionId = 'user-' + Date.now(); // Unique session ID for this user

// Chatbot conversation state
let chatbotState = {
    awaitingProblemDetails: false,
    awaitingService: false,
    awaitingPhoneForPrice: false,
    currentService: null,
    customerPhone: null,
    apiConnected: false
};

// Check if AI API is connected
async function checkAPIConnection() {
    try {
        const response = await fetch('http://localhost:3000/api/health');
        chatbotState.apiConnected = response.ok;
        return response.ok;
    } catch (error) {
        chatbotState.apiConnected = false;
        return false;
    }
}

// Initialize API connection check
checkAPIConnection().then(isConnected => {
    if (isConnected) {
        console.log('✅ Chatbot AI connected to backend');
    } else {
        console.warn('⚠️ Chatbot AI backend not running. Using fallback responses.');
    }
});

// Fallback responses if API is not available
const fallbackResponses = {
    'hello': 'Hello! 👋 Welcome to IT Expert. How can I help you with your laptop repair or refurbished laptop needs?',
    'hi': 'Hi there! 🙌 Welcome to IT Expert. What can I assist you with today?',
    'help': 'I can help you with:\n• Laptop Repair Services\n• Refurbished & Second Hand Laptops\n• Accessories & Upgrades\n• Store Location & Hours\n• Contact Information',
    'repair': 'We offer professional laptop repair services! What specific problem are you facing?',
    'laptop': 'We have quality refurbished and second-hand laptops available! What specifications are you looking for?',
    'price': 'Our prices are competitive! Which service would you like pricing for?\n• Laptop Repair\n• Refurbished Laptops\n• Upgrades\n• Accessories',
    'location': 'We\'re located at:\nGulzar Market, Behind Hindu Market\nFirst Floor, Ballia, Uttar Pradesh',
    'hours': 'Business Hours:\n• Sunday: 10:00 AM – 4:30 PM\n• Monday-Saturday: 10:00 AM – 7:00 PM',
    'contact': 'Contact us:\n📞 Phone: +91 63861 57014\n💬 WhatsApp: https://wa.me/916386157014\n📧 Email: itexpertcomputerballia@gmail.com',
    'default': 'Thanks for your question! Please call us at +91 63861 57014 for more details. How else can I help?'
};

// Send message function with API integration
async function sendChatbotMessage() {
    const message = chatbotInput?.value?.trim();
    
    if (!message) return;

    // Add user message
    addChatMessage(message, 'user');
    chatbotInput.value = '';
    
    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'bot-message typing-indicator';
    typingDiv.innerHTML = '<p><span></span><span></span><span></span></p>';
    chatbotMessages?.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    try {
        // Try to use AI API if connected
        if (chatbotState.apiConnected) {
            const response = await fetch(CHATBOT_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: message,
                    sessionId: chatbotSessionId
                })
            });

            if (response.ok) {
                const data = await response.json();
                typingDiv.remove();
                addChatMessage(data.message, 'bot');
                return;
            }
        }
    } catch (error) {
        console.warn('API call failed, using fallback:', error);
    }

    // Fallback: Use local responses
    typingDiv.remove();
    const fallbackResponse = generateFallbackResponse(message);
    addChatMessage(fallbackResponse, 'bot');
}

// Generate fallback response if API is not available
function generateFallbackResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    for (let key in fallbackResponses) {
        if (message.includes(key)) {
            return fallbackResponses[key];
        }
    }

    // Check for common issue keywords
    if (message.includes('slow') || message.includes('fast')) {
        return 'Is your laptop running slow? I can help troubleshoot! Tell me more about the issue.';
    }
    if (message.includes('battery') || message.includes('charge')) {
        return 'Battery issues? Try these steps:\n1. Restart laptop\n2. Check power adapter\n3. Update drivers\n\nIf still not working, visit us!';
    }
    if (message.includes('hot') || message.includes('overheat')) {
        return 'Overheating? Try cleaning vents and reducing background programs. We offer professional cleaning service!';
    }

    return fallbackResponses['default'];
}

// Add message to chat
function addChatMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `${sender}-message`;
    
    const pTag = document.createElement('p');
    pTag.innerHTML = text.replace(/\n/g, '<br>'); // Convert newlines to <br> tags
    
    messageDiv.appendChild(pTag);
    chatbotMessages?.appendChild(messageDiv);
    
    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Toggle chatbot widget
chatbotButton?.addEventListener('click', () => {
    chatbotWidget?.classList.toggle('active');
});

closeChatbot?.addEventListener('click', () => {
    chatbotWidget?.classList.remove('active');
});

// Send message on button click
sendMessage?.addEventListener('click', sendChatbotMessage);

// Send message on Enter key
chatbotInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatbotMessage();
    }
});

// ============================================
// CONTACT FORM HANDLING
// ============================================
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Validate form
    if (!name || !email || !phone || !message) {
        showNotification('Please fill all fields', 'error');
        return;
    }
    
    // Show success message
    showNotification('Thank you! Your message has been sent. We\'ll contact you soon.', 'success');
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you would send this data to a server
    console.log({
        name: name,
        email: email,
        phone: phone,
        message: message,
        timestamp: new Date().toLocaleString()
    });
});

// ============================================
// NEWSLETTER FORM HANDLING
// ============================================
newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    if (!email) {
        showNotification('Please enter your email', 'error');
        return;
    }
    
    // Show success message
    showNotification('Thanks for subscribing! Check your email for confirmation.', 'success');
    
    // Reset form
    newsletterForm.reset();
    
    console.log({
        email: email,
        subscribed: new Date().toLocaleString()
    });
});

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#34d399' : type === 'error' ? '#ff6b6b' : '#00d4ff'};
        color: ${type === 'success' || type === 'error' ? 'white' : '#0a0e27'};
        padding: 16px 24px;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ============================================
// IMAGE LAZY LOADING
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '50px'
};

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            imageObserver.unobserve(img);
        }
    });
}, observerOptions);

// Observe all lazy images
document.querySelectorAll('.lazy-image').forEach(img => {
    imageObserver.observe(img);
});

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
const scrollObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.8s ease forwards';
            scrollObserver.unobserve(entry.target);
        }
    });
}, scrollObserverOptions);

// Observe cards and sections for scroll animations
document.querySelectorAll('.service-card, .product-card, .feature-item, .review-card').forEach(element => {
    scrollObserver.observe(element);
});

// ============================================
// MOBILE RESPONSIVE ADJUSTMENTS
// ============================================
function handleResize() {
    if (window.innerWidth > 768) {
        navMenu?.classList.remove('active');
        hamburger?.classList.remove('active');
    }
}

window.addEventListener('resize', handleResize);

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Analytics and tracking
function trackEvent(category, action, label) {
    console.log(`Event: ${category} - ${action} - ${label}`);
    // In production, this would send to Google Analytics or similar
}

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('Button', 'Click', btn.textContent);
    });
});

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Expert Business website loaded successfully!');
    
    // Add animation delay to service cards
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
        card.style.animation = `slideInUp 0.8s ease ${index * 0.1}s backwards`;
    });
    
    // Initialize form validation
    initializeFormValidation();
});

// Form validation
function initializeFormValidation() {
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (!input.value.trim()) {
                input.style.borderColor = '#ff6b6b';
            } else {
                input.style.borderColor = 'var(--border-color)';
            }
        });
    });
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    // Alt + C = Open Chatbot
    if (e.altKey && e.key === 'c') {
        chatbotButton?.click();
    }
    
    // Escape = Close Chatbot
    if (e.key === 'Escape' && chatbotWidget?.classList.contains('active')) {
        chatbotWidget.classList.remove('active');
    }
});

// ============================================
// PAGE LOAD PERFORMANCE
// ============================================
window.addEventListener('load', () => {
    // Measure Core Web Vitals
    if ('PerformanceObserver' in window) {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    }
});

// Service Worker registration for offline support
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration not critical
        console.log('Service Worker registration failed (offline support unavailable)');
    });
}

// ============================================
// SOCIAL SHARING HELPERS
// ============================================
function shareOnWhatsApp() {
    const text = "Check out Expert Business - Professional Laptop Repair & Refurbished Laptops in Ballia!";
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`);
}

function shareOnFacebook() {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`);
}

// ============================================
// COOKIE CONSENT (OPTIONAL)
// ============================================
function checkCookieConsent() {
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
        // In production, you would show a cookie consent banner
        console.log('Please add cookie consent banner');
    }
}

// Call on page load
checkCookieConsent();

// ============================================
// EXTERNAL LINK TRACKING
// ============================================
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('External Link', 'Click', link.href);
    });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Format phone number
function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{5})$/);
    if (match) {
        return match[1] + ' ' + match[2] + ' ' + match[3];
    }
    return phoneNumber;
}

// ============================================
// DEVELOPMENT HELPERS
// ============================================
if (process.env.NODE_ENV === 'development') {
    window.debugInfo = {
        trackEvent: trackEvent,
        formatPhoneNumber: formatPhoneNumber,
        getUrlParameter: getUrlParameter
    };
}

console.log('✅ Expert Business JS loaded - Ready for interaction!');
