import pool from "./pool";

const createTableCmd = `
  CREATE TABLE IF NOT EXISTS chat (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255),
    text VARCHAR(255),
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(username, text)
  );
`;

export async function initDB() {
  try {
    await pool.query(createTableCmd);
    console.log("Tables initialized");
  } catch (error) {
    console.error("DB init failed:", error);
  }
}
