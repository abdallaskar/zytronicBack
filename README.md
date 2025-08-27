# 💬 Zytronic Chat App — Backend

This is the **backend service** of the Zytronic Chat Application, a real-time chat platform built with **Node.js, Express, MongoDB, Socket.IO, and JWT authentication**.

The backend provides **authentication, user management, chat/message APIs, and WebSocket support** for real-time communication.

---

## 📽️ Demo Video

[Front end](https://youtu.be/your-demo-link)
[Watch Demo](https://youtu.be/your-demo-link)

---

## ✨ Features

- 🔐 **Authentication** with JWT (Register & Login)
- 👤 User management (search users, fetch profiles)
- 💬 One-to-one **real-time conversations**
- 📨 Send & receive **text and images**
- ⚡ Instant message delivery using **Socket.IO**
- 📥 Inbox with active chats & last message preview

---

## 🛠️ Tech Stack

- **Backend Framework:** Node.js + Express
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT
- **Realtime:** Socket.IO
- **Environment Config:** Dotenv

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) instance (local or cloud)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abdallaskar/zytronicfront.git
   cd zytronicBack
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string and JWT secret:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```

4. **Start the server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000` by default.

---

## 📚 API Documentation

- **Authentication:**

  - `POST /api/auth/register` — Register a new user
  - `POST /api/auth/login` — Login and receive JWT

- **User Management:**

  - `GET /api/users/all` — get all users

- **Chats & Messages:**

  - `GET /api/chats` — List user chats
  - `POST /api/chats` — Create new chat
  - `GET /api/messages/:chatId` — Get messages in a chat
  - `POST /api/messages` — Send a message

- **WebSocket:**
  - Real-time messaging via Socket.IO

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---
