const express = require("express");
const path = require("path");

const cors = require("cors");

const cookieParser = require("cookie-parser");

// let's create express app

const app = express();

// use some application-level middlewares
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

const router = require("./router");

app.use(router);

app.get("*", (req, res) => {
  if (req.path.includes("public")) {
    const urlpath = req.path.split("/");

    res.sendFile(path.join(__dirname, "..", "public", urlpath[2], urlpath[3]));
  } else {
    res.sendFile(path.join(__dirname, "..", "..", "frontend", "index.html"));
  }
});
// load router

// ready to export
module.exports = app;
