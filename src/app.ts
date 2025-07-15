import express from "express";
import indexRouter from "./routes/indexRouter";
import path from "path";
import messageRouter from "./routes/newRouter";
import "dotenv/config";
import { seedDB } from "./db/seed";
import { initDB } from "./db/schema";

const app = express();
const assetPath = path.join(__dirname, "..", "public");

const PORT = Number(process.env.PORT) || 8080;

app.set("views", path.join(__dirname, "..", "src", "view"));
app.set("view engine", "ejs");
app.use(express.static(assetPath));
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", messageRouter);

(async () => {
  try {
    await initDB();

    if (process.env.NODE_ENV !== "PRODUCTION") {
      console.log("Seeding DB for dev/testing...");
      await seedDB();
    }
    app.listen(PORT, "0.0.0.0", () =>
      console.log("Server running on port", PORT),
    );
  } catch (err) {
    console.error("App failed to start:", err);
    process.exit(1);
  }
})();
