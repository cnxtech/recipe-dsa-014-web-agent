module.paths.unshift('.'); // find our belly button
var app = require('app'),
    port = process.env.PORT || 5000;

app.locals.port = port; // store for later use
app.set('port', port);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


