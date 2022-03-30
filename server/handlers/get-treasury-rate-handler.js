const request = require('axios');

async function getTreasuryRates(req, res) {
  console.log('req.body?', req.body)
  const currTreasuryRates = await request.get("https://www.chathamfinancial.com/getrates/23724")
  console.log('curr treasury rates?', currTreasuryRates)
  console.log('treasury rate json', JSON.stringify(currTreasuryRates.data, null, 2))
  const rateMap = {}
  currTreasuryRates.data.Rates.forEach(rate => {
    rateMap[rate["Year"]] = rate["CurrentYield"]
  })
  console.log('response will be', rateMap)
  return res.json(rateMap)
}

module.exports = {
  getTreasuryRates
}