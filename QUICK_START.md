# 🚀 Quick Start - AI Backend in 5 Minutes (Google Gemini)

## 1️⃣ Get API Key (2 minutes)
Visit: https://makersuite.google.com/app/apikey
- Sign in with Google account
- Create API key

## 2️⃣ Create .env File (1 minute)
Create `c:\it expert\.env` with:
```
GEMINI_API_KEY=your-key-here
PORT=3000
```

## 3️⃣ Install Dependencies (1 minute)
In PowerShell at `c:\it expert`:
```powershell
npm install
```

## 4️⃣ Start Server (< 1 minute)
```powershell
node server.js
```

You should see:
```
🚀 IT Expert Backend Server Running! (Google Gemini API)
📍 Local: http://localhost:3000
```

## 5️⃣ Test It!
1. Open `index.html` 
2. Click chatbot button 💬
3. Type: "My laptop is slow"
4. Watch AI respond! 🤖

---

## ✅ Files Created

- **server.js** - Backend server with Google Gemini integration
- **package.json** - Node dependencies
- **AI_CHATBOT_SETUP.md** - Full setup guide
- **.env.example** - Template for API key

---

## 📝 What Changed in Frontend

- `script.js` - Now calls backend API with Gemini
- `style.css` - Typing indicator animation
- Chatbot shows "typing..." while waiting for AI response

---

## 🎯 Features Enabled

✅ **Real AI Responses** - Uses Google Gemini API  
✅ **Context Awareness** - Remembers previous messages  
✅ **Problem Solving** - Provides step-by-step guides  
✅ **Accurate Data** - Real information about your services  
✅ **Typing Indicator** - Shows bot is thinking  
✅ **Fallback Mode** - Works even if backend down  

---

## 🆘 Having Issues?

### Server won't start?
```
Check: Is Node.js installed?
Fix: Download from nodejs.org
```

### npm install fails?
```
Fix: Open PowerShell as Administrator
Run: npm install
```

### Chatbot shows generic responses?
```
Check: Is server running? (look for blue "Local: http://localhost:3000")
Check: Is .env file in same folder as server.js?
Check: Did you copy API key correctly?
```

### More help?
See: **AI_CHATBOT_SETUP.md** for detailed troubleshooting

---

**That's it! Your AI-powered chatbot with Google Gemini is live! 🎉**
