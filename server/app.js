"use strict";

const path = require("path");
const express = require("express");
const cookieParser = require('cookie-parser');
const router = require("./controllers");

const app = express();
app.use(cookieParser());

app.set("port", 3000);

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(router);

module.exports = app;
