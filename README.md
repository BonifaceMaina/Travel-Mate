[![Build Status](https://travis-ci.com/BonifaceMaina/Travel-Mate.svg?branch=develop)](https://travis-ci.com/BonifaceMaina/Travel-Mate)
[![Coverage Status](https://coveralls.io/repos/github/BonifaceMaina/Travel-Mate/badge.svg?branch=develop)](https://coveralls.io/github/BonifaceMaina/Travel-Mate?branch=develop)

# Travel App
This is a travel app that allows users to sign up, sign in and book available buses.
The app also allows filtering of buses.

## Travel App Features
Users can:
- Sign Up
- Sign In
- View all trips
- View a given trip
- Book a trip by specifying departure, arrival, time, date and number of seats


## API Endpoints
| Resource URL | Methods | Description |
| -------- | ------------- | --------- |
| `/signup` | GET  | Pug template to create a user account |
| `/signin` | GET  | Pug template to sign in |
| `/` | GET  | Pug template to show homepage |
| `/auth/signup` | POST  | Creates a user account |
| `/auth/signin/` | POST  | Logs in a user |
| `/trips/availableTrips/` | GET  | View all trips and their details |
| `/trips/:tripId/` | GET  | View one trip details |
| `/trips/:tripId/book` | POST  | Book a trip |



## Project Prerequisites 
The project is built on [NodeJS](https://nodejs.org/en/)


Clone the repo into your desired folder

``` 
git clone https://github.com/BonifaceMaina/Travel-Mate.git
```

Install project requirements

```
npm i
```

Run the tests

```
npm test
```

## Author
Created by Boniface Maina.

## Acknowledgements
[Buupass](https://buupass.com/)
