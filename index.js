"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const request = require("request");
const server = (0, express_1.default)();
const port = 3000;
server.all("*", (req, res) => {
    try {
        var url = req.query.q || "https://www.slack.com";
        req.pipe(request.get(url)).pipe(res);
    }
    catch (e) {
        res.send('Error: ' + e);
    }
});
server.listen(port, () => console.log(`Example app listening on port ${port}!`));
