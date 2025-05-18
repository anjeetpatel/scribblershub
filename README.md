# 📚 ScribblersHub

**ScribblersHub** is a personal blogging platform built with Node.js, Express.js, and MongoDB. It allows you to create, manage, and publish technical blogs with a simple and clean interface.

## 🌐 Live Demo

👉 [Visit ScribblersHub](https://scribblershub.onrender.com)

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Express-session & custom middleware
- **Deployment**: Render

---

## ✨ Features

- 📝 Create, edit, and delete blog posts (Admin only)
- 🔐 Admin login for secure content management
- 📄 View all blog posts on the homepage
- 📚 Individual blog post pages
- 📃 About and Contact pages
- 🕒 Blog posts timestamped automatically

---

## 📁 Project Structure
```
scribblershub/
│
├── models/ # Mongoose schemas
├── public/ # Static assets (CSS, images, etc.)
├── routes/ # Express route handlers
├── views/ # EJS templates
├── .env # Environment variables
├── app.js # Main Express app
├── package.json # Project metadata and dependencies
```

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js and npm installed
- MongoDB (local or hosted)
- 
### Installation Steps
1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/scribblershub.git
   cd scribblershub
   ```

2. **Install dependencies**
```npm install```

3. **Create a .env file in the root directory and add:**
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
```
4. **Run the app**
   ```npm start```
5. **Visit the local site**
```http://localhost:3000```
