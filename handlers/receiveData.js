const {fetchCoinBaseData} = require('../helpers/fetchCoinBaseData')

const receiveData  = async(startDate, endDate, currency) => {

let receivedData  = [];
let timeSeriesList = []
try{
    receivedData = await fetchCoinBaseData(startDate,endDate,currency);
   
    receivedData = receivedData.bpi;
    Object.keys(receivedData).map(item => timeSeriesList.push({
        key: item,
        value: receivedData[item]
    }))
    if(currency !== "USD"){
        let usdData = await fetchCoinBaseData(startDate,endDate,"USD");
        timeSeriesList = timeSeriesList.map(item => {
          return{ usdValue: usdData.bpi[item.key],
           ...item
          }
        })
    }
    let max = Math.max(...Object.values(receivedData))
    let min = Math.min(...Object.values(receivedData))
    timeSeriesList.map(item => {
        item.value === max?item.isMax = true:null;
        item.value === min?item.isMin=true:null;
    })
}catch(e){
    console.log(e)
    timeSeriesList = "Error " + e
}finally{
    return timeSeriesList
}
}

module.exports = {
    receiveData
};