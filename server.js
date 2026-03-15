const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Import Google Generative AI SDK
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Google Gemini client
// Note: Set your GEMINI_API_KEY in .env file or environment variables
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'your-gemini-api-key-here');

// Get the Gemini Pro model
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

// Store conversation history for context
const conversationHistories = new Map();

// System prompt for the AI assistant
const SYSTEM_PROMPT = `You are an expert IT support assistant for IT Expert, a laptop repair and refurbished laptop service in Ballia, Uttar Pradesh.

Your responsibilities:
1. Help customers with laptop troubleshooting and technical issues
2. Provide step-by-step solutions for software problems
3. Explain technical concepts in simple terms
4. Ask clarifying questions when needed
5. Be professional, friendly, and helpful
6. If you don't know something, suggest they call +91 63861 57014 or email itexpertcomputerballia@gmail.com

Business Information for Reference:
- Shop: IT Expert
- Location: Gulzar Market, Behind Hindu Market, First Floor, Ballia, Uttar Pradesh
- Phone: +91 63861 57014
- Email: itexpertcomputerballia@gmail.com
- WhatsApp: https://wa.me/916386157014
- Hours: Sun 10AM-4:30PM, Mon 10AM-7PM, Tue-Sat 10AM-6:30PM

Services: Laptop Repair, Refurbished Laptops, SSD/RAM Upgrades, Windows Installation, Laptop Cleaning, Hardware Repair

When customers ask about pricing or services, provide helpful information but always encourage them to visit or call for personalized consultation.`;

// Main chatbot endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, sessionId } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Get or create conversation history for this session
        const conversationId = sessionId || 'default';
        if (!conversationHistories.has(conversationId)) {
            conversationHistories.set(conversationId, []);
        }

        const history = conversationHistories.get(conversationId);

        // Build chat history for Gemini
        let chatHistory = [];
        for (const msg of history) {
            chatHistory.push({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.content }]
            });
        }

        // Start chat session with system prompt context
        const chat = model.startChat({
            history: chatHistory,
            generationConfig: {
                maxOutputTokens: 1024,
                temperature: 0.7,
                topP: 1,
            },
        });

        // Send message to Gemini
        const result = await chat.sendMessage(`You are an expert IT support assistant for IT Expert, a laptop repair and refurbished laptop service in Ballia, Uttar Pradesh.

Your responsibilities:
1. Help customers with laptop troubleshooting and technical issues
2. Provide step-by-step solutions for software problems
3. Explain technical concepts in simple terms
4. Ask clarifying questions when needed
5. Be professional, friendly, and helpful

Business Information:
- Shop: IT Expert
- Location: Gulzar Market, Behind Hindu Market, First Floor, Ballia, Uttar Pradesh
- Phone: +91 63861 57014
- Email: itexpertcomputerballia@gmail.com
- WhatsApp: https://wa.me/916386157014
- Hours: Sun 10AM-4:30PM, Mon 10AM-7PM, Tue-Sat 10AM-6:30PM

Services: Laptop Repair, Refurbished Laptops, SSD/RAM Upgrades, Windows Installation, Laptop Cleaning, Hardware Repair

When customers ask about pricing or services, provide helpful information but always encourage them to visit or call for personalized consultation.

Customer message: ${message}`);

        const assistantMessage = result.response.text();

        // Add to history
        history.push({
            role: 'user',
            content: message
        });
        history.push({
            role: 'assistant',
            content: assistantMessage
        });

        // Keep history to last 20 messages to save memory
        if (history.length > 20) {
            history.splice(0, 2);
        }

        res.json({
            success: true,
            message: assistantMessage,
            sessionId: conversationId
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            error: 'Failed to process request',
            message: 'Sorry, I\'m having trouble connecting to my AI system. Please try again or call us at +91 63861 57014'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🚀 IT Expert Backend Server Running! (Google Gemini API)`);
    console.log(`📍 Local: http://localhost:${PORT}`);
    console.log(`\n⚠️  IMPORTANT SETUP STEPS:`);
    console.log(`1. Get free Google Gemini API key from: https://makersuite.google.com/app/apikey`);
    console.log(`2. Create .env file in this directory`);
    console.log(`3. Add: GEMINI_API_KEY=your-key-here`);
    console.log(`4. Save and restart server`);
    console.log(`\n✅ Once ready, update the chatbot frontend to call: http://localhost:${PORT}/api/chat\n`);
});

module.exports = app;
