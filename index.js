const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()


let apiKey = 'a071232e809ffa4b0045dca5d99ef8de';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})
<<<<<<< HEAD
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
=======
const PORT = process.env.PORT || 3000; 
app.listen(PORT,funtion () {
>>>>>>> 701a6e295d48302c564e4b6d6bf5f796d8f2491f
  console.log('Example app is listening on port 3000!')
})
