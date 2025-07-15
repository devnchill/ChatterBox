import { Router } from "express";
import { MessageController } from "../controller/messageController";
import { Request, Response } from "express";

const messageRouter = Router();

messageRouter.get("/", (_: Request, res: Response) => {
  res.render("form");
});

messageRouter.post("/", [
  ...MessageController.validateMessage,
  MessageController.addMessage,
]);

export default messageRouter;
