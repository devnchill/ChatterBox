import { TChat } from "../types/chat.types";
import pool from "./pool";

export class Db {
  public static async getAllChats() {
    const { rows } = await pool.query("Select * from chat");
    return rows;
  }

  public static async addNewMessage(chat: TChat) {
    const insertChat = `
      INSERT INTO chat (username , text,added) 
      VALUES ($1,$2,$3); 
`;
    await pool.query(insertChat, [chat.username, chat.text, chat.added]);
  }
}
