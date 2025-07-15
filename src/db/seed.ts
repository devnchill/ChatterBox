import pool from "./pool";

const insertCmd = `
  INSERT INTO chat (username, text) VALUES 
    ('Amando', 'Hi there!'),
    ('Charles', 'Hello World!')
  ON CONFLICT DO NOTHING;  
`;

export async function seedDB() {
  try {
    const { rows } = await pool.query(insertCmd);
    console.log("Seeded messages:", rows);
  } catch (error) {
    console.error("Seeding failed:", error);
  }
}
