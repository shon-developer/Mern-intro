In backend our server interacts with our database then we execute some code on our server to create an application which then server to the client side. This will speed up your website and also keeps your business logic hidden

The commonly used technologies in the backend

- node.js
- ruby
- java
- php

Frameworks for the above technologies

- express js
- ruby on rail
- spring
- cake shop
  the main job of these frame work is to simply reduce the repetitive stuff the developer has to do. They have developers work by cutting down the ground work

# Nodejs

## Why node js

- node js runs on javascript
- make us capable of creating scalable and really fast running websites
- it takes js out of the browser, liberates it allowing to interact directly with the hardware of the computer
- we can also use nodejs to run js code in someone else's computer on rather a server
- means, a user can logg on to google and put in a query and the brower will make request to google servers and on those servers we can actually execute js code to process and after that run we can send back the result to the user or to the client and get the web browsers to display the information. All the heavy lifting and code execution happens behind the listen to network traffic and manipulate database

## companies using nodejs

- uber
- ebay
- twitter
- netflix

# command line / how to use node

get bash => pwd => cd Desktop/ => ls => mkdir intro-to-node => cd intro-to-node => ls => touch index.js => code.
=> in the vscode => node index.js

1. create a folder called intro-to-node in the vscode
2. open it in the vs code
3. create a new file called index.js oin the root folder in vs code
4. console log some text in the index.js file
5. opne terminal using control+backtick
6. run the file using the command 'node index.js'

===================================================================================

When we typed in localhost:3000, we specified a location of a server, Adn when we hit enter the browse will go to this location and make a request to get some data back when request gets made at the home location (app.get("/")) then the call back gets triggered and we send the browser a response which is just a plain test "Hello World". That
get send back to the browser and render it on the screen.

- create a new route called about so that when i got to the about page, of my website localhostto see a quick brief
  bio of who you are

============================================================

# nodemon installation

nodemon, an npm package that will make it way easier for us autostart our servers

- nodemon is a utility that will monitor for any changes in your source and automatically restart your server
- means my server is active and refreshed to the latest version of code at all time.
- it saves your sanity

=============================================

# let's make a calculator

## Responding to request with html files

- create a file called index.html in the root folder

- index.html

```html
<body>
  <h1></h1>
  <form action="/" method="post">
    <input type="text" name="num1" placeholder="first number" />
    <input type="text" name="num2" placeholder="second number" />
    <button type="submit" name="submit">Calculator</button>
    <input />
  </form>
</body>
```

express => API reference => response => res.send => res.send => res.sendfile

- send.file transfers the file at the given path
  [Link - express,res.sendFils](http://express.js.com/en/api.html#res.send)

## What is http response status code?

It indicates whether an http request has been successfully completed
100-199 => informational responses
200-299 => success responses
300-399 => redirectional responses
400-499 => error from client side
500-599 => error from server side

## now lets add a past method to handle a post request that come to our home route

```js
const express = require("express");
const app = express();
PORT = 3000;
```

BMI Routing challenge

. Create a new file called bmiCalculator.html inside the calculator folder from the last challenge
. Add the html boiler plate and set the page the BMI Calculator
. Add and html form, this form will make a post request to our server at the route/bmiCalculator. The form will have inputs weight and heighut with placeholder text that tell the user what they should type into which text box
. Add a button which which says Calculate BMI
. Add the get and post methods from the /bmiCalculator route into the same server.js file and we have been using
. Use sendFile to send the bmiCalculator.html page as a response inside the get method
. Add an h1 that says BMI Calculator
. Inside server.js, create 2 variables one for weight and one for height
. Use the BMI Calculator code you wrote previously, or write some new code to calculate and send back the result as text. It should read something like "Your BMI is N" where N is equal to the calculated BMI based on their weight and height inputs
