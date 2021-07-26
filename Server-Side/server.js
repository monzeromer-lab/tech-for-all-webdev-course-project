const http = require('http');
const express = require('express');
const app = express();
const PORT = 2022;
http.createServer(app).listen(PORT);

/* Routers */
app.use('/', require('./src/routers/userManagment'));
app.use('/' , require('./src/routers/posts'));

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
// console.log(`Server running at http://127.0.0.1:${PORT}/`);

module.exports = app;

