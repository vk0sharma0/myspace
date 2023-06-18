const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const port = 8000;
const host = 'localhost';
let number = 0;


app.get('/', (req, res) => {
  axios.get('https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY')
    .then((resp) => {
      console.log(`Total Request send ${number}`)
      number++;
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.send(resp.data);
      //res.send("running");
    }).catch((err) => {
      console.error(err);
      res.send('Error While Fatching Data From API');
    });
});


app.use(express.static(path.join(__dirname, )));
app.get('/abc', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.sendFile(path.join(__dirname,  'index.html'));
  

});


app.listen(port, host, () => {
  console.log(`server is listening on ${host}:${port}`);
});




