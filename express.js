var express = require('express');
var path = require('path');
const app = express();

console.log(__dirname);
//app.use(express.static(path.join(__dirname, '../public/styles/index.css')));
//app.use(express.static(path.join(__dirname, '../assets/styles/index.css'))); //serves static img and css

app.use('/assets', express.static('assets'));
app.use('/assets', express.static('img'));
app.use('/assets', express.static('scripts'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); //handler for index
});

// app.get('/prices', (req, res) => {
//   res.sendFile(path.join(__dirname, '../prices.html')); //handler for prices 
// });

app.listen(5000);  // listner @ port 5k