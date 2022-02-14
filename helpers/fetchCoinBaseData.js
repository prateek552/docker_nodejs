const axios = require('axios');


const {
    COINBASE_BTC
} = process.env;

let fetchCoinBaseData  = async(start, end, currency) => {
    let res = await axios.get(`${COINBASE_BTC}?currency=${currency}&start=${start}&end=${end}`);
    res = await res.data;
    return res;
}

module.exports = {
    fetchCoinBaseData
};