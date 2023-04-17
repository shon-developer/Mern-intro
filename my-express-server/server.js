const express = require("express");
const app = express();
PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact me at shon@gmail.com</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h2>I am a learning fullstack web developer</h2>");
});

app.get("/hobbies", (req, res) => {
  res.send("<h1>My hobby is coding</h1>");
});

app.listen(PORT, () => {
  console.log(`app is listening at port: ${PORT}`);
});
