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
