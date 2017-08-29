const express = require('express')
const fetch = require('node-fetch')

const app = express()

let lastFetchPrice

app.get('/', function (req, res) {
  if (lastFetchPrice) {
    res.json(`Current Bitcoin Price = ${lastFetchPrice} USD`)
    fetchAndUpdateBitcoinPrice()
  } else {
    fetchAndUpdateBitcoinPrice()
      .then((curPrice) =>
        res.json(`Current Bitcoin Price = ${curPrice} USD`)
      )
  }
})

function fetchAndUpdateBitcoinPrice() {
  return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(res => res.json())
    .then(json => {
      lastFetchPrice = json.bpi.USD.rate
      return lastFetchPrice
    })
}

app.listen(3000, function () {
  console.log('Bitcoin Price Fetcher now listening on port 3000!')
})