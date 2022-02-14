const  {getCurrencies}  = require('./getCurrencies')

test('Test Currencies Api', async() => {
    let res = await getCurrencies()
    expect(res).toContainEqual({"currency":"AED","country":"United Arab Emirates Dirham"})
});