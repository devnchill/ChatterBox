import { TChat } from "../types/chat.types";

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

  public static displayMessages() {
    return this.arrOfMessages.map((msg) => ({
      ...msg,
      added: this.parseDate(msg.added),
    }));
  }

  public static addMessage(msg: TChat) {
    this.arrOfMessages.push({
      text: msg.text,
      user: msg.user,
      added: msg.added,
    });
  }
}
