import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import connectDB from "./database.js";
import { router } from "./routs/buyCellRoute.js";
import { LikeRouter } from "./routs/likesList.js";
import { favRouter } from "./routs/favoriteRoutes.js";
import { viewsRouter } from "./routs/viewsRoutes.js";
import timeout from "connect-timeout";
import path from "path";
import cors from "cors";
const app = express();
// hassan
connectDB("mongodb+srv://root:root@cluster0.1kinvm5.mongodb.net/bloctechMap?retryWrites=true&w=majority");
app.use(timeout("60000s"));
app.use(cors());
var __dirname = path.resolve();
app.use(express.json({ limit: "150mb" }));
app.use("/upload", express.static(path.join(__dirname, "upload")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("./build"));
app.use("/", router);
app.use("/likes", LikeRouter);
app.use("/favorites", favRouter);
app.use("/views", viewsRouter);
mongoose.set("strictQuery", true);
app.get("/*", function (req, res) {
  res.sendFile(path?.join(__dirname, "build", "index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
//port 8080
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);

});

// hassan habib tahir
