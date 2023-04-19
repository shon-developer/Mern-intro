# API

- Application Programming Interfaces

## Definition

- An API is a set of commands, functions, protocols, and objects that programmers can use to create softwares or interacts with an external system

##

- JQuery is an API. It gets you to access to whole bunch of functions and objects that let you create software much more easily than you were writing vanilla javascript

- With all of that and more let's go to the next lesson

===================================================================

# API

we are covering below topics

- Endpoint
- Paths
- Parameters
- Authentication

# API Endpoinit

- Every API that interacts with an external system like the server will have an endpoint
- It is the url of the API
- [kanye.rest](https://api.kanya.rest/)

# API Paths and Parameters

- inorder to narrow down specific piece of data you want from an external server
  [joke API](https://v2.jokeapi.dev/)

## path

- The url path is a string of information that comes after the top level domain name
- Top lever domain is everything that follows the final dot of a domain name
- In domain name google.com, `com` is the top level domain

## parameter

- sometime we might want to get a piece of data from an API that is something they can't plan for.
- eg: if i want to search for a programming joke that contains a word `debugging`. They wouldn't have thought of this ahead of time. Probably don't have a path to address this specific query
- inorder to allow the API to be flexible enough to deal with custom queries like this, usually APIs allow you to provided parameters
- Parameters go at the end of the URL after a question mark. and the there is a key value pair that goes into the url
- The key is called contains, and then after a question mark. and then there is a key value pair that goes into the url
- The key is called contains, and the after = sign comes the query (contains=debugging)
  `https://v2.jokeapi.dev/joke/Programming?contains=debugging`
- if we have more than one query, the first query follows a question mark and every subsequent queries follows `ampersand`
- nfsw => not safe for work

### inshort

- When you want to specify a parameter, the parameter comes after the question mark and they are set as a key value pair with an equal sign in between
- And when you want to have more then one parameter, you separate each of the key value pair with ampersand symbol

# eg: url explanation

- https://v2/jokeapi.dev/joke/Programming?blacklistFlag=nsfw&type=single&contains=debugging
- category is `programming`
- i have blacklisted all the jokes that are `not safe for work`
- i have specified that i want only a `single part joke`
- And i want something that contains the word `debugging`

=========================================================

# Authentication and Postman

# My weather api key = fa829503e1af7196814adff86be07d98

- [weather API](https://openweathermap.org/api)
- [current weather data](https://openweathermap.org/current)
- [example-url-city-name](https://api.openweathermap.org/data/2.5/weather?q=canada&appid=fa829503e1af7196814adff86be07d98&units=metric)

## Authentication

- Everytime you make a request through an api, they have to identify you as a dveloper and they have to keep track of how often you are using this server to get data. Then change you or limit you accordingly
- In order to illustrate the concept of authentication we are going to use weathermap api
- as you get more users and more traffic and you are likely to have more revenue then these data providers will start charging you to use that data

## Postman

- It is a tool to test our API
- Test the above url in postman
