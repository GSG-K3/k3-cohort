// "use strict";

const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("./routes/routes");

const app = express();

app.use(express.static(path.join(__dirname, "..", "public", "accounts")));
app.use(cookieParser());
app.use(router);

module.exports = app;
