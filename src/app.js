var app = require('express')();

app.post('/', function(req, res) {
  res.redirect(307, 'http://google.com');
});

app.get('/', function(req, res) {
  res.redirect(307, 'http://yandex.ru');
});

app.listen(80, function() {
  console.log('listenning on port:80');
});

module.exports = app;
