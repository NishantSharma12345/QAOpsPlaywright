import { test as baseTest} from '@playwright/test';

interface TestDataForOrder {
            username:"test3@example.com",
            password:"Admin123@",
            productName:"Adidas Orignals"
        };

export const customTest = baseTest.extend<{testDataForOrder:TestDataForOrder}>(
    {
        testDataForOrder : {
            username:"test3@example.com",
            password:"Admin123@",
            productName:"Adidas Orignals"
        }
    }
)