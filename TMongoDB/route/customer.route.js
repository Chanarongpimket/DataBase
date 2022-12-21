module.exports = (app) => {
    const customer = require("../controller/customer.controller.js")
    
    app.get('/', customer.index);
    app.get('/api/customer',customer.findAll)
}