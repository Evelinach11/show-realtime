import express from "express";
import optimist from "optimist";

const app = express();
let date = new Date();

const intervalParram = optimist.argv.i;
const timeoutParram = optimist.argv.t;

console.log("Starting");

app.use((req, res, next) => {
  console.log("Server is listening on 3000");

  const intevalId = setInterval(() => {
    console.log(date);
  }, intervalParram);

  setTimeout(() => {
    clearInterval(intevalId);
  }, timeoutParram);

  next();
});

app.get("/", (req, res) => {
  date = new Date();
  res.send(date);
});

app.listen(3000);
