const express = require('express');
const app = express();
app.get('/', function (req, res) {
	res.send('Hello...!, this is a test with a comment and I also add a test for the webhook! :)');
});
app.listen(8080, function () {
	console.log('This is a log after the listen');
});
module.exports = app;
