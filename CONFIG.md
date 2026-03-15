# Expert Business Website - Configuration Template

## 🎯 Business Configuration

This file contains all customizable values for your website. Update these values with your business information.

### 📞 Contact Information

```
Phone Number:           +91 63861 57014
Alternative Phone:      [Your second phone, if any]
Email Address:          [Your business email]
WhatsApp Number:        +91 63861 57014
```

### 📍 Location Information

```
Shop Name:              Expert Business
Address Line 1:         Gulzar Market, Behind Hindu Market
Address Line 2:         First Floor
City:                   Ballia
State:                  Uttar Pradesh
Country:                India
Postal Code:            [If available]
Street Name:            Gulzar Market
Landmark:               Behind Hindu Market
```

### 🕐 Business Hours

```
Sunday:                 10:00 AM – 4:30 PM
Monday:                 10:00 AM – 7:00 PM
Tuesday:                10:00 AM – 6:30 PM
Wednesday:              10:00 AM – 6:30 PM
Thursday:               10:00 AM – 6:30 PM
Friday:                 10:00 AM – 6:30 PM
Saturday:               10:00 AM – 6:30 PM
```

### 🔗 Online Profiles

```
Google Business Profile: https://share.google/jgH2D8wNQlf30KDEN
WhatsApp URL:            https://wa.me/916386157014
Google Maps Search:      https://www.google.com/maps/search/?api=1&query=Gulzar+Market+Ballia+Uttar+Pradesh
```

---

## 🎨 Design Configuration

### Color Scheme (CSS Variables)

Edit in `style.css` line 16-24:

```css
:root {
    --primary-color: #00d4ff;           /* Main brand color (cyan) */
    --secondary-color: #0099cc;         /* Secondary color (blue) */
    --dark-bg: #0a0e27;                 /* Page background */
    --darker-bg: #1a1a2e;               /* Section background */
    --card-bg: #16213e;                 /* Card background */
    --text-light: #e0e0e0;              /* Main text color */
    --text-muted: #a0a0a0;              /* Secondary text color */
    --border-color: #2d2d44;            /* Border & divider color */
    --transition: all 0.3s ease;        /* Animation speed */
}
```

### Alternative Color Schemes

**Professional Blue (Current)**
```css
--primary-color: #00d4ff;
--secondary-color: #0099cc;
```

**Apple Style (Gray)**
```css
--primary-color: #555555;
--secondary-color: #333333;
```

**Green Tech**
```css
--primary-color: #10b981;
--secondary-color: #059669;
```

**Orange Tech**
```css
--primary-color: #f97316;
--secondary-color: #ea580c;
```

**Purple Tech**
```css
--primary-color: #a855f7;
--secondary-color: #9333ea;
```

---

## 📝 Content Configuration

### Hero Section

**Headline:** (Line 70 in index.html)
```
Current: "Professional Laptop Repair & Refurbished Laptop Store"
Update to: [Your main headline]
```

**Subtitle:** (Line 71)
```
Current: "Trusted Services • Affordable Pricing • Expert Technicians"
Update to: [Your tagline]
```

**Button Texts:**
```
"Call Now" - Always shows phone-to-action
"WhatsApp Chat" - Opens WhatsApp
"Get Directions" - Opens Google Maps
```

### Services Section

Example service card (Line 130):
```html
<div class="service-card">
    <i class="fas fa-tools"></i>                <!-- Icon (see Font Awesome) -->
    <h3>Laptop Repair</h3>                      <!-- Service name -->
    <p>Professional repair services...</p>      <!-- Description -->
</div>
```

**8 Current Services:**
1. Laptop Repair
2. Refurbished Laptop Sales
3. Second Hand Laptops
4. SSD & RAM Upgrade
5. Windows Installation
6. Laptop Cleaning
7. Hardware Repair
8. Consultation

**To modify:** Edit text and icon (fa-tools, fa-laptop, etc.)

### Products Section

**6 Current Products:**
1. HDMI Cable (₹299+)
2. Laptop Chargers (₹999+)
3. Converters (₹199+)
4. Cooling Pads (₹799+)
5. Mouse & Keyboard (₹499+)
6. Screen Protectors (₹299+)

**Update prices** in `product-price` class text.

### Gallery Images

**6 Gallery Items:**
- Shop Interior
- Repair Station
- Accessories Display
- Refurbished Laptops
- Testing Lab
- Customer Service

Replace placeholder images with your own photos.

---

## 🤖 Chatbot Configuration

Edit `script.js` starting at line 60.

### Pre-configured Responses

```javascript
const chatbotResponses = {
    'hello': 'Hello! 👋 How can I help you with your laptop repair or refurbished laptop needs?',
    'hi': 'Hi there! 🙌 What can I assist you with today?',
    'help': 'I can help you with:\n• Laptop Repair Services\n• Refurbished & Second Hand Laptops\n• Accessories & Upgrades\n• Store Location & Hours\n• Contact Information',
    'repair': 'We offer professional laptop repair services including:...',
    'laptop': 'We have quality refurbished and second-hand laptops available...',
    // ... more responses
};
```

### How to Customize

**Add new keyword response:**
```javascript
const chatbotResponses = {
    'data': 'We offer data recovery services! Call for pricing.',
    'warranty': 'All our repairs come with a warranty.',
    'tuesday': 'We\'re open 10:00 AM to 6:30 PM on Tuesday!',
};
```

**Modify existing response:**
```javascript
// Before:
'hello': 'Hello! 👋 How can I help you...',

// After:
'hello': 'Hello! Welcome to Expert Business! How can we help?',
```

### Multi-word Responses

```javascript
'how much': 'Our prices are competitive. Call us for specific quotes!',
'free': 'Yes! We offer free diagnosis for all repairs.',
'open today': 'Yes, we\'re open today! Check our hours section.',
```

---

## 📋 SEO Configuration

### Meta Tags (index.html head section)

**Title Tag:** (Line 14)
```html
<title>Expert Business - Laptop Repair & Refurbished Laptops in Ballia</title>
<!-- Update: [Your Business] - [Keywords] in [Location] -->
```

**Meta Description:** (Line 15)
```html
<meta name="description" content="Expert Business - Professional Laptop Repair, Refurbished Laptops, and Accessories in Ballia, Uttar Pradesh.">
<!-- Keep under 160 characters -->
```

**Keywords:** (Line 16)
```html
<meta name="keywords" content="Laptop Repair Ballia, Refurbished Laptop Ballia, Second Hand Laptop Ballia, Laptop Repair Services, Laptop Accessories">
<!-- Add 5-10 relevant keywords separated by commas -->
```

**Author:** (Line 17)
```html
<meta name="author" content="Expert Business">
```

**Open Graph Tags:** (Lines 18-22)
```html
<meta property="og:title" content="Expert Business - Professional Laptop Repair & Refurbished Laptops">
<meta property="og:description" content="Get professional laptop repair and quality refurbished laptops in Ballia. Visit Expert Business today!">
<meta property="og:type" content="business.business">
<meta property="og:url" content="https://expertbusiness.local">
<!-- Update og:url to your actual domain when live -->
```

---

## 🎯 Form Configuration

### Contact Form (Line 290)

**Email Destination:**
Currently logs to console. To send emails, update `contactForm` listener in `script.js`:

```javascript
// Change from:
console.log({ name, email, phone, message });

// To:
// Send to your email service
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: new FormData(contactForm)
});
```

**Form Fields:**
- Name (required)
- Email (required)
- Phone (required)
- Message (textarea, required)

### Newsletter Form (Line 330)

**Success Message:**
```javascript
showNotification('Thanks for subscribing! Check your email for confirmation.', 'success');
```

**Email Destination:**
Same as contact form - needs backend setup.

---

## 🗺️ Maps Configuration

### Google Maps Embed (Line 262)

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.8546719752336!2d84.1889!3d25.2309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39304c1e1e1e1e1d%3A0x1e1e1e1e1e1e!2sGulzar%20Market%2C%20Ballia%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890">
</iframe>
```

**To get your own embed code:**
1. Go to google.com/maps
2. Search your location
3. Click "Share"
4. Click "Embed a map"
5. Copy iframe code
6. Replace above code

### Get Directions Link (Line 89)

```html
<a href="https://www.google.com/maps/search/?api=1&query=Gulzar+Market+Ballia+Uttar+Pradesh">
    Get Directions
</a>
```

**To customize:**
Replace "Gulzar+Market+Ballia+Uttar+Pradesh" with:
`[Your+Address]+[City]+[State]`

Example: `123+Main+St+Ballia+Uttar+Pradesh`

---

## 🔗 Link Configuration

### WhatsApp Links (Multiple places)

```html
https://wa.me/916386157014
```

**Update to:** `https://wa.me/YOUR_COUNTRY_CODE_AND_NUMBER`

Examples:
- India: `https://wa.me/919876543210`
- USA: `https://wa.me/12025551234`
- UK: `https://wa.me/442071234567`

**Note:** Remove dashes/spaces, include country code

### Phone Links (Multiple places)

```html
<a href="tel:+916386157014">Call Now</a>
```

**Update to:** `<a href="tel:+YOUR_PHONE">Call Now</a>`

### Google Business Profile Link

```html
https://share.google/jgH2D8wNQlf30KDEN
```

**To get your link:**
1. Go to business.google.com
2. Create/claim your business
3. Click "Share"
4. Copy the share link
5. Replace above URL

---

## 📊 Analytics Configuration

### Google Analytics

**Step 1:** Get tracking ID from analytics.google.com

**Step 2:** Add to `index.html` before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your actual ID.

### Track Custom Events

In `script.js`, modify `trackEvent()`:

```javascript
// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('Button', 'Click', btn.textContent);
    });
});

// Track form submissions
contactForm?.addEventListener('submit', () => {
    trackEvent('Form', 'Submit', 'Contact Form');
});
```

---

## 🏪 Business Listing Configuration

### Business Information Checklist

- [ ] Business name correct
- [ ] Phone number accurate
- [ ] Address complete
- [ ] Business hours updated
- [ ] Services listed
- [ ] Products listed
- [ ] Images added
- [ ] Reviews linked
- [ ] Google Business Profile created
- [ ] Google Maps location verified

### Directories to List On

```
Category        Website
---             ---
Search Engine   google.com/business
Maps            google.com/maps
Directory       justdial.com
Directory       sulekha.com
Social          facebook.com
Social          instagram.com
Review          google.com (reviews)
Review          trustpilot.com
Local           indiamart.com
```

---

## 💾 File Organization

```
expert-business/
├── index.html              ← Main website
├── style.css               ← Styling
├── script.js               ← JavaScript
├── README.md               ← Full documentation
├── QUICKSTART.md           ← Quick start guide
├── DEPLOYMENT.md           ← Deployment guide
├── FEATURES.md             ← Features details
├── CONFIG.md               ← This file
└── /images/                ← Your images folder (create)
    ├── shop-interior.jpg
    ├── repair-station.jpg
    └── ... more images
```

---

## 🔐 Security Configuration

### Contact Form Backend Options

**Option 1: Formspree**
```
1. Visit formspree.io
2. Create account
3. Create form endpoint
4. Update script.js with endpoint
```

**Option 2: Basin**
```
1. Visit usebasin.com
2. Create endpoint
3. No authentication needed
4. Add to form action
```

**Option 3: Your Own Server**
```
1. Set up Node.js/PHP server
2. Add email sending code
3. Add CSRF tokens
4. Validate input server-side
```

---

## 📱 Mobile Configuration

### Viewport Meta Tag (Already set)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This ensures mobile responsiveness.

### Touch-Friendly Sizing

Buttons are already 44px+ (Mobile best practice)

### Mobile Menu

Hamburger menu automatically appears on tablets/mobile.

---

## 🎯 Performance Configuration

### Image Optimization

Save images as:
- Format: JPG for photos, PNG for graphics
- Size: Under 500KB each
- Dimensions: 
  - Gallery: 400x400px
  - Hero: 1920x1080px
  - Thumbnails: 200x200px

### Caching Headers

For production, add to `.htaccess`:

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access 1 year"
  ExpiresByType text/css "access 1 month"
  ExpiresByType text/javascript "access 1 month"
</IfModule>
```

---

## ✅ Pre-Launch Checklist

- [ ] All contact info updated
- [ ] Business hours correct
- [ ] Phone numbers linked correctly
- [ ] WhatsApp formatted correctly
- [ ] Google Maps embedded correctly
- [ ] Google Business Profile linked
- [ ] Services customized
- [ ] Products updated with prices
- [ ] Images added
- [ ] Chatbot responses customized
- [ ] Meta tags updated
- [ ] Tested on mobile
- [ ] All links working
- [ ] Forms tested
- [ ] Analytics setup
- [ ] Security headers added

---

## 🚀 Deployment Configuration

### Domain Setup

```
domain.com (your domain) → hosting provider's server
```

### HTTPS/SSL

- Required for production
- Most hosts include free SSL
- Setup via hosting control panel

### Environment Variables

If using backend:
```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = your-email@gmail.com
SMTP_PASS = your-app-password
RECIPIENT_EMAIL = business@expertbusiness.com
```

---

## 📈 Growth Configuration

### Email Marketing

Create email list with newsletter form.

**Setup:**
1. Create Mailchimp account
2. Get signup link
3. Update newsletter form action

### Social Media

**Recommended platforms:**
- Facebook Page
- Instagram Business
- LinkedIn Company
- YouTube Channel

### Paid Ads

**Google Ads Setup:**
```
1. Create Google Ads account
2. Link to website
3. Create search campaigns
4. Target: "Laptop Repair Ballia"
```

---

## 🎓 Helpful Resources

### SEO Tools
- SEMrush.com
- Ahrefs.com
- Google Search Console
- Google My Business

### Analytics
- Google Analytics
- Hotjar (heatmaps)
- Mixpanel (user behavior)

### Email Marketing
- Mailchimp.com
- Brevo.com
- Sendgrid.com

### Images
- Unsplash.com (free)
- Pexels.com (free)
- Pixabay.com (free)
- Shutterstock.com (paid)

### Compression
- TinyPNG.com (images)
- Minifier.org (code)
- GZipWire (gzip)

---

## 📞 Example Configuration for Reference

```
Business: IT Expert
Phone: +91 63861 57014
Address: Gulzar Market, Behind Hindu Market, First Floor, Ballia, UP
Hours: Sun 10-4:30, Mon 10-7, Tue-Sat 10-6:30
Services: Repair, Refurbished Sales, Accessories
Colors: Cyan (#00d4ff) + Dark Blue (#0a0e27)
```

---

**Ready to customize? Start by updating the values above in your files!** ✨
