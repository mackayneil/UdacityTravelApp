const dotenv = require('dotenv');
dotenv.config();


const geonameApiKey = process.env.API_KEY_GEONAMES;
const weatherbitApiKey = process.env.API_KEY_WEATHERBIT;
const pixabayApiKey = process.env.API_KEY_PIXABAY;

const path = require('path');
const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
app.use(express.json());

app.use(cors())

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// Designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})


app.post('/location', async(req, res) => {
    const response = await fetch(`http://api.geonames.org/postalCodeLookupJSON?placename=${req.body.userLocation}&username=${geonameApiKey}`);
    try {
        const json = await response.json();
        res.send(json);
      } catch (error) {
        console.log("error", error);
      }
});

app.post('/weather', async(req, res) => {
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${req.body.lat}&lon=${req.body.long}&key=${weatherbitApiKey}`);
    try {
        const json = await response.json();
        res.send(json);
      } catch (error) {
        console.log("error", error);
      }
});


app.post('/forecast', async(req, res) => {
    const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${req.body.city}&&key=${weatherbitApiKey}`);
    try {
        const json = await response.json();
        res.send(json);
      } catch (error) {
        console.log("error", error);
      }
});


app.post('/images', async(req, res) => {
    const response = await fetch(`https://pixabay.com/api/?key=${pixabayApiKey}&q=${req.body.city}&image_type=photo`);
    try {
        const json = await response.json();
        res.send(json);
      } catch (error) {
        console.log("error", error);
      }
});