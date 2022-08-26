import Express, { Request, Response } from "express";

const request = require("request");

const server = Express();
const port = process.env.PORT || 3000;

server.all("*", async (req: Request, res: Response) => {
  try {
    var url = req.query.q || "https://www.slack.com";
    const {range} = req.headers

    request.get({ url, headers: {range} }).pipe(res)
    
  } catch (e) {
    res.send("Error: " + e);
  }
});

server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
