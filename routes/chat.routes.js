
import express from "express";
import {
    accessChat,
    fetchChats,
    createGroupChat,
    removeFromGroup,
    addToGroup,
    renameGroup,
    markChatAsRead,
} from "../controllers/chat.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const chatRouter = express.Router();
chatRouter.post("/", authMiddleware, accessChat);
chatRouter.get("/", authMiddleware, fetchChats);
chatRouter.put("/mark-read/:chatId", authMiddleware, markChatAsRead);
chatRouter.post("/group", authMiddleware, createGroupChat);
chatRouter.put("/group/rename", authMiddleware, renameGroup);
chatRouter.put("/group/remove", authMiddleware, removeFromGroup);
chatRouter.put("/group/add", addToGroup);


export default chatRouter;
