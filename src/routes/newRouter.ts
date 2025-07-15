import { Router } from "express";
import { MessageController } from "../controller/messageController";

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("form");
});

messageRouter.post("/", [
  ...MessageController.validateMessage,
  MessageController.addMessage,
]);

export default messageRouter;
