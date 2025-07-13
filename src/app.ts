import express from "express";
import indexRouter from "./routes/indexRouter";
import path from "path";
import messageRouter from "./routes/newRouter";

const app = express();
const PORT = 6969;
const assetPath = path.join(__dirname, "..", "public");

app.set("views", path.join(__dirname, "..", "src", "view"));
app.set("view engine", "ejs");

app.use(express.static(assetPath));
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", messageRouter);

app.listen(PORT, () => console.log("hello world"));
