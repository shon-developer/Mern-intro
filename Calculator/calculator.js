const express = require("express");
const app = express();
PORT = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let num1 = parseFloat(req.body.num1);
  let num2 = parseFloat(req.body.num2);
  let result = num1 + num2;
  res.send(`The result is: ${result}`);
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  let BMI = weight / (height * height);

  res.send(`Your BMI IS: ${BMI}`);
});

app.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`);
});
