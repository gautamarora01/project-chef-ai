# Chef AI

**Chef AI** is a smart recipe generator that uses free and fast AI models like LLaMA to craft unique recipes from ingredients you already have. Just input your pantry items, select a model, and let AI handle the rest.
---
![chefai](https://github.com/user-attachments/assets/82411dd3-3251-4423-9fd3-090438c935bc)
---

## 🚀 Live Demo

🌐 **Link:** [https://chef-ai-project.vercel.app/](https://chef-ai-project.vercel.app/)  

---

## ✨ Features

- ✅ Add **multiple ingredients** 
- ✅ Choose between multiple AI models (LLaMA, Mistral, etc.)
- ✅ Get a recipe from API call to backend
- ✅ Server health check to reduce Render cold-start delay
---

## 🛠️ Tech Stack

### Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [Vercel](https://vercel.com/) (Deployment)

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Groq SDK](https://www.groq.com/) / [Hugging Face Inference API](https://huggingface.co/inference)
- [Render](https://render.com/) (Deployment)

---

## 📦 Installation


``` bash
//1. Clone the Repository

git clone https://github.com/your-username/chef-ai.git
cd chef-ai

//2. Set up environment variables

PORT=3001
GROQ_API_KEY=your_groq_key

//3. Install dependencies
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd react-project-chef-ai
npm install

//4. Run locally
cd backend
npm start

http://localhost:3001

cd react-project-chef-ai
npm run dev (before this make sure to update fetch URL to your backend URL)
```

## Deployment

### Frontend -> vercel
### Backend -> render

## 🤝 Contributing
### Pull requests and suggestions are welcome! Fork this repo and help enhance Chef AI.

