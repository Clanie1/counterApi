import express from "express";
import cors from "cors";

const app = express();

const port = 3000;

let domainClicks = {};

app.use(cors());

app.get("/:domain", (req, res) => {
  const domain = req.params.domain;
  if (domainClicks[domain] === undefined) {
    domainClicks[domain] = 0;
  }
  domainClicks[domain] += 1;
  res.send(domainClicks[domain].toString());
});

app.listen(port);
