var express = require('express');
var app = express();
var login = require('./login');

app.set('view engine', 'ejs')
  .use(express.static('./public'))
  .use(login.routes)
  .use(require('./chirps'));

app.get('*', login.required, function(req, res) {
  res.render('index', {
    user: login.safe(req.user)
  });
});

app.listen(3000, function() {
  console.log('server running on 3000...');
});
