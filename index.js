module.paths.unshift('.'); // find our belly button

console.log('Node path: ', process.env.NODE_PATH);

var app = require('app');

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


