import { Router } from "express";
import { MessageController } from "../controller/messageController";

const indexRouter = Router();

indexRouter.get("/", MessageController.displayMessages);

export default indexRouter;
