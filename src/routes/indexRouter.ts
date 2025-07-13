import { Router } from "express";
import { MessageController } from "../controller/messageController";

const indexRouter = Router();

indexRouter.get("/", (req, res) =>
  res.render("messages", {
    link: { text: "Add a new messgae", href: "/new" },
    message: MessageController.displayMessages(),
  }),
);

export default indexRouter;
