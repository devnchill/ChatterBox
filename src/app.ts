import express from "express";
import indexRouter from "./routes/indexRouter";
import path from "path";
import messageRouter from "./routes/newRouter";

const app = express();
const PORT = 6969;

app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", messageRouter);

app.listen(PORT, () => console.log("hello world"));
