const dotenv = require('dotenv');
dotenv.config();

const myApiKey = process.env.API_KEY;

const path = require('path');
const express = require('express');

const app = express();
app.use(express.json());

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
/* 
app.post('/location', async(req, res) => {
    const response = await fetch(`http://api.geonames.org/postalCodeLookupJSON?placename=${req.body.userLocation}&username=neilmackay01`);
    try {
        const json = await response.json();
        res.send(json);
      } catch (error) {
        console.log("error", error);
      }
}); */


app.post('/location', async(req, res) => {
    const response = await fetch(`http://api.geonames.org/postalCodeLookupJSON?placename=seattle&username=neilmackay01`);
    try {
        const json = await response.json();
        res.send(json);
      } catch (error) {
        console.log("error", error);
      }
});