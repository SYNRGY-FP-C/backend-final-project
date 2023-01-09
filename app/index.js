const express = require("express");
const cors = require("cors");
const morgan = require("./middlewares/morgan.middleware");
const { notFound, appError } = require("./middlewares/error.middleware");

const router = require("./router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan);

app.use(router);
app.use(notFound);
app.use(appError);

module.exports = app;
