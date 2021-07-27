const http = require('http');
const express = require('express');
const app = express();
const PORT = 2022;
http.createServer(app).listen(PORT);

/* setup view engine */
app.set('view engine', 'ejs');
app.set('views', './src/views');

/* setup static files */
app.use('/src/public' ,express.static('./src/public'));

/* Routers */
app.use('/' , require('./src/routers/posts'));
app.use('/' , require('./src/routers/renderer'));

/* Other Requests */
app.get('*', (req, res, next) => {
  res.status(404).json({error: true, message: 'NOT FOUND', data: []});
});

app.post('*', (req, res, next) => {
  res.status(404).json({error: true, message: 'NOT FOUND', data: []});
});

app.put('*', (req, res, next) => {
  res.status(404).json({error: true, message: 'NOT FOUND', data: []});
});

app.delete('*', (req, res, next) => {
  res.status(404).json({error: true, message: 'NOT FOUND', data: []});
});

/* Error Handeler */
app.use( function ( err, req, res, next) {
console.log(err.stack);
res.status(500).json({error: true, message: "Error!", data: []});
});

/* URL Log */
console.log(`Server running at http://127.0.0.1:${PORT}/`);

module.exports = app

