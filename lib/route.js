module.exports = function(app) {
  app.get('/:time?', app.api.timestamp);
}
