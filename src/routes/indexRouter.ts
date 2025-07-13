import { Router } from "express";

const indexRouter = Router();

const arrOfMessages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("messages", { message: arrOfMessages });
});

export default indexRouter;
