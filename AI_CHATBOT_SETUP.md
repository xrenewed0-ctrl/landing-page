# 🤖 AI Chatbot Backend Setup Guide (Google Gemini API)

## Overview
Your chatbot is now connected to **Google Gemini API** - a free, powerful AI service that provides accurate, intelligent responses for technical troubleshooting.

---

## ✅ Step 1: Get Free Gemini API Key

1. **Go to**: https://makersuite.google.com/app/apikey
2. **Sign in** with your Google account (completely free)
3. **Create API Key** - you'll get a key instantly
4. **Copy the key** - you'll need it in the next step

> ℹ️ Free tier includes generous limits - perfect for customer support!

---

## ⚙️ Step 2: Install Node.js Dependencies

Open **PowerShell** or **Command Prompt** in your `c:\it expert` folder and run:

```powershell
npm install
```

This will install:
- `express` - Web server
- `cors` - Cross-origin support
- `@google/generative-ai` - Google Gemini API client
- `dotenv` - Environment variables

---

## 🔑 Step 3: Create .env File

1. **Create a new file** named `.env` in the `c:\it expert` folder
2. **Copy this content**:

```
GEMINI_API_KEY=your-gemini-api-key-here
PORT=3000
```

3. **Replace** `your-gemini-api-key-here` with your actual API key from Step 1
4. **Save the file**

Example (with fake key):
```
GEMINI_API_KEY=AIzaSyDv84x5P1l8zJ5k9m0n1p2q3r4s5t6u7v8w
PORT=3000
```

---

## 🚀 Step 4: Start the Backend Server

In **PowerShell**, run:

```powershell
node server.js
```

You should see:
```
🚀 IT Expert Backend Server Running!
📍 Local: http://localhost:3000

✅ Once ready, update the chatbot frontend to call: http://localhost:3000/api/chat
```

---

## 📱 Step 5: Test the Chatbot

1. **Open** `index.html` in your browser
2. **Click the chatbot button** (💬)
3. **Type a message** like:
   - "My laptop is running slow"
   - "How much does repair cost?"
   - "Where are you located?"
   - "Help, my battery won't charge"

4. **Wait for AI response** - it will use the Groq API to provide intelligent answers!

---

## 🎯 What the AI Does

### Problem Solving
When customers describe issues, the AI provides:
- Step-by-step troubleshooting guides
- Technical explanations
- When to visit for professional help

### Smart Responses
- Understands context from previous messages
- Asks clarifying questions
- Provides business information
- Suggests services

### Service Information
- Pricing details
- Business hours
- Contact methods
- Location & directions

---

## 🔗 How It Works

```
User Types Message
        ↓
Frontend (index.html) sends to Backend
        ↓
Backend receives message via API
        ↓
Sends to Groq AI with system context
        ↓
Groq AI generates intelligent response
        ↓
Response sent back to Frontend
        ↓
Displayed in chatbot widget
```

---

## 📊 Keep Server Running

To keep the backend running even when you close PowerShell:

**Option 1: Windows Task Scheduler**
- Create a task to run: `node c:\it expert\server.js`
- Set to run at startup

**Option 2: npm package (advanced)**
```powershell
npm install -g pm2
pm2 start server.js
pm2 startup
pm2 save
```

---

## ❓ Troubleshooting

### Error: "Cannot find module 'express'"
**Solution**: Run `npm install` again

### Error: "GROQ_API_KEY not found"
**Solution**: 
- Check if `.env` file exists
- Verify API key is correct
- Restart server after adding key

### Chatbot showing "Service Unavailable"
**Solution**:
- Make sure `node server.js` is running
- Check if port 3000 is in use
- Change PORT in `.env` if needed

### Responses are generic
**Solution**:
- Check backend is running
- Check browser console (F12) for errors
- Verify `.env` file is in same folder as `server.js`

---

## 📝 API Endpoints

### Chat Endpoint
**POST** `http://localhost:3000/api/chat`

Request:
```json
{
  "message": "My laptop is slow",
  "sessionId": "user-123"
}
```

Response:
```json
{
  "success": true,
  "message": "AI response here...",
  "sessionId": "user-123"
}
```

### Health Check
**GET** `http://localhost:3000/api/health`

Response:
```json
{
  "status": "Server is running"
}
```

---

## 💡 Customization

### Change AI Model
In `server.js`, line ~30, change:
```javascript
model: 'mixtral-8x7b-32768' // Fast model
// Options: 'llama2-70b-4096', 'gemma-7b-it', etc.
```

### Modify System Prompt
In `server.js`, update the `SYSTEM_PROMPT` variable to customize AI behavior.

### Change API URL
In `script.js`, update:
```javascript
const CHATBOT_API_URL = 'http://localhost:3000/api/chat';
```

---

## 🎓 Free Tier Limits

- **Requests**: Generous monthly limit
- **Cost**: ₹0
- **Speed**: Very fast (milliseconds)
- **Models**: Access to latest AI models

---

## 📞 Support

If chatbot not working:
1. Check if `server.js` is running
2. Check `.env` file has API key
3. Check browser console (F12) for errors
4. Restart server with `node server.js`

---

**You're all set! Your AI chatbot is now live and ready to help customers! 🚀**
