const axios = require('axios');

const {
    COINBASE_CURRENCY
} = process.env;

let getCurrencies = async() => {
    let currencies  = []
    try{
        let res = await axios.get(COINBASE_CURRENCY);
        console.log(res.status)
        if(res.status != 200){
            throw new Error(res.statusText);
        }
        res = await res.data;
        currencies = res;
    }catch(e){
        console.log(e);
        currencies = "Error "+e; 
    }finally{
        return currencies
    }
}

module.exports = {
    getCurrencies
};