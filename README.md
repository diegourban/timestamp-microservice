# timestamp-microservice
Freecodecamp's API Project for Back End Development Certification

User Stories:

- I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
- If it does, it returns both the Unix timestamp and the natural language form of that date.
- If it does not contain a date or Unix timestamp, it returns null for those properties.

## Requirements
* Node.js

## Installation
`npm install` - to install the dependencies

## Usage
`npm start` - to start the server

## Example Usage
`http://host:port/December%2015,%202015` - natural language
`http://host:port/1450137600` - unix timestamp

## Example Output
`{ "unix": 1450137600, "natural": "December 15, 2015" }`
