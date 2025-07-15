import { TChat } from "../types/chat.types";
import { Request, Response } from "express";

export class MessageController {
  private static parseDate(date: Date): string {
    return date.toString().split(" ").slice(0, 5).join(" ");
  }

  private static arrOfMessages: TChat[] = [
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

  public static displayMessages = (req: Request, res: Response) => {
    try {
      const parsedMsg = this.arrOfMessages.map((m) => ({
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

  public static addMessage = (req: Request, res: Response) => {
    try {
      const body = req.body;
      const chat: TChat = {
        user: body.username,
        text: body.message,
        added: new Date(),
      };
      this.arrOfMessages.push(chat);
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
