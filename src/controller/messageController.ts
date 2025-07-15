import { TChat } from "../types/chat.types";
import { Request, Response } from "express";
import { validationResult, body } from "express-validator";
import { Db } from "../db/query";

export class MessageController {
  private static parseDate(date: Date): string {
    return date.toString().split(" ").slice(0, 5).join(" ");
  }

  static validateMessage = [
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .isAlpha()
      .withMessage("Username must contain only letters"),

    body("message")
      .trim()
      .notEmpty()
      .withMessage("Message is required")
      .isLength({ max: 200 })
      .withMessage("Message must be under 200 characters"),
  ];

  public static displayMessages = async (_: Request, res: Response) => {
    try {
      const messages = await Db.getAllChats();
      const parsedMsg = messages.map((m) => ({
        ...m,
        added: this.parseDate(m.added),
      }));
      res.render("messages", {
        link: { text: "Add a new message", href: "/new" },
        messages: parsedMsg,
      });
    } catch (err) {
      console.log(err);
      res.status(500).render("error", {
        error: err,
      });
    }
  };

  public static addMessage = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("error", {
        error: errors
          .array()
          .map((e) => e.msg)
          .join(", "),
      });
    }
    try {
      const body = req.body;
      const chat: TChat = {
        username: body.username,
        text: body.message,
      };
      await Db.addNewMessage(chat);
      console.log("redirecting to /");
      res.redirect("/");
    } catch (err) {
      console.log(err);
      res.status(500).render("error", {
        error: err,
      });
    }
  };
}
