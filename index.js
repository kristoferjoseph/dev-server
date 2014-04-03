var connect = require('connect'),
    instant = require('instant'),
    http = require('http'),
    colors = require('colors'),
    app = connect();

app.use(instant(__dirname));

http.createServer(app).listen(3000,
  console.log('Navigate to ' + 'http://localhost:3000'.green + ' to view your page')
);
