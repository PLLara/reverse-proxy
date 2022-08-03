import Express, { Request, Response } from "express";

const request = require("request");

const server = Express();
const port = 3000;

server.all("*", (req: Request, res: Response) => {
  try {
    var url = req.query.q || "https://www.slack.com";
    req.pipe(request.get(url)).pipe(res);
  } catch (e) {
    res.send('Error: ' + e);
  }
});

server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
