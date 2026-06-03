const base = require('@playwright/test');

exports.customtest = base.test.extend(
    {
        testDataForOrder : {
            username:"test3@example.com",
            password:"Admin123@",
            productName:"Adidas Orignals"
        }
    }
)