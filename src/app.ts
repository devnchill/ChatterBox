import express from "express";
import indexRouter from "./routes/indexRouter";
import path from "path";

const app = express();
const PORT = 6969;

app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");
app.use("/", indexRouter);

app.listen(PORT, () => console.log("hello world"));
