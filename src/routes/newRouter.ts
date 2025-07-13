import { Router } from "express";
import { TChat } from "../types/chat.types";
import { MessageController } from "../controller/messageController";

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("form");
});

messageRouter.post("/", (req, res) => {
  const body = req.body;
  const chat: TChat = {
    user: body.username,
    text: body.message,
    added: new Date(),
  };
  MessageController.addMessage(chat);
  res.redirect("/");
});

export default messageRouter;
