import * as todoService from "./api/todo";
import bodyParser from 'body-parser';

const path = require("path");
const express = require("express");
const webpack = require("webpack");
const config = require("../webpack.config.dev");

const app = express();
const compiler = webpack(config);

app.use(bodyParser.json());

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/api/todos", function (req, res) {
    res.json(todoService.getTodos());
});

app.post("/api/todo", function (req, res) {
    const todo = req.body;
    debugger;
    res.json(todoService.addTodo(todo));
});

app.listen(7770, "localhost", function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Listening at http://localhost:7770");
});
