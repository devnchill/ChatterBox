import pool from "./pool";

const createTableCmd = `
  CREATE TABLE IF NOT EXISTS chat (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255),
    text VARCHAR(255),
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    UNIQUE(username, text)
  );
`;

const insertCmd = `
  INSERT INTO chat (username, text) VALUES 
    ('Amando', 'Hi there!'),
    ('Charles', 'Hello World!')
  ON CONFLICT DO NOTHING;  
`;

async function seedDB() {
  try {
    await pool.query(createTableCmd);
    await pool.query(insertCmd);
    console.log("Done seeding DB");
  } catch (error) {
    console.error("Seeding failed:", error);
  }
}

seedDB();
