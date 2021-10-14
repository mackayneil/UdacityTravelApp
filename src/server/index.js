const dotenv = require('dotenv');
dotenv.config();


const geonameApiKey = process.env.API_KEY_GEONAMES;

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