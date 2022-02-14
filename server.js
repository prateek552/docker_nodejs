const express = require('express');
const cors = require('cors');
const { receiveData } = require('./handlers/receiveData')
const  {getCurrencies}  = require('./handlers/getCurrencies')


const app = express();
app.use(cors())

const port = 8080;

app.get('/v1/btc/timeRangeData', async function(req, res){
    let startDate = req.query?.startDate;
    let endDate = req.query?.endDate;
    let currency = req.query?.currency;
    if(startDate == null || startDate == undefined){
        res.status(404).send('Start Date not found');
    }else if(endDate == null || endDate == undefined){
        res.status(404).send('End Date not found');
    }else if(currency == null || currency == undefined){
        res.status(404).send('Currency not found');
    }else{
        let timeRangeList = await receiveData(startDate, endDate, currency);

        if(timeRangeList.includes("Error")){
            res.status(404).send(timeRangeList);
        }else{
            res.send({
                timeRangeList
            })
        }
       
    }

   
})

app.get('/v1/btc/currencies', async function(req, res){
    let currencies = await getCurrencies();

    if(currencies.includes("Error")){
        res.status(404).send(timeRangeList);
    }

    res.send({
        currencies
    })
})

app.listen(port);

console.log("server is running");