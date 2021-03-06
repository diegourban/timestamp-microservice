var strftime = require('strftime')

var api = {};

api.timestamp = function(req, res) {
  // try to handle as timestamp
  var date = new Date(parseInt(req.params.time) * 1000)
  var valid = date.getTime() > 0

  var unix = null
  var natural = null

  if(!valid) {
      // try to handle as natural language date
      date = new Date(req.params.time)
      valid = date.getTime() > 0
  }

  if(valid) {
      unix = date.getTime() / 1000
      natural = strftime("%B %d, %Y", date)
  }

  var timestamp = {
      'unix' : unix,
      'natural' : natural
  }

  res.send(timestamp)
}

module.exports = api;
