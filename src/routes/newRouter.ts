import { Router } from "express";
import { TChat } from "../types/chat.types";
import { MessageController } from "../controller/messageController";

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("form");
});

messageRouter.post("/", MessageController.addMessage);

export default messageRouter;
