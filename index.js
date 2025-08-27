import express from 'express';
import { createServer } from "http";
import { Server } from "socket.io";
import connectDB from './config/database.js';
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import messageRouter from "./routes/message.routes.js";
import chatRouter from "./routes/chat.routes.js";

const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*", // replace with your frontend URL later
        methods: ["GET", "POST"],
    },
});

const DATABASEURI = process.env.DATABASEURI;
const PORTNUMBER = 5000;

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use("/api/messages", messageRouter);
app.use("/api/chats", chatRouter);

app.use("/", (req, res) => {
    res.send("Welcome to the Zytronic API");
});


// Socket.IO logic
io.on("connection", (socket) => {
    console.log("⚡ New client connected:", socket.id);

    // join a chat room
    socket.on("join chat", (chatId) => {
        socket.join(chatId);
        console.log(`User joined chat: ${chatId}`);
    });

    // listen for new message
    socket.on("new message", (msg) => {
        const chat = msg.chat;
        if (!chat?._id) return;

        // broadcast to everyone in the room, including other users
        io.to(chat._id).emit("message received", msg);
    });

    socket.on("disconnect", () => {
        console.log("❌ Client disconnected:", socket.id);
    });
});

// use server.listen instead of app.listen
connectDB(DATABASEURI).then(() => {
    server.listen(PORTNUMBER, () => {
        console.log(`🚀 Server is running on port ${PORTNUMBER}`);
    });
}).catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
});
