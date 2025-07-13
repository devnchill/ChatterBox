import { TChat } from "../types/chat.types";
export class MessageController {
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
    return this.arrOfMessages;
  }

  public static addMessage(msg: TChat) {
    this.arrOfMessages.push({
      text: msg.text,
      user: msg.user,
      added: msg.added,
    });
  }
}
