import { neon } from "@neondatabase/serverless";
const db = neon("postgresql://neondb_owner:npg_jeZJSOsKMN57@ep-cool-bar-adu26y89-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")


const reportRepository = {


    // p buscar as vendas 
    async get() {
        return await db`SELECT * FROM report`;
    
    }, 

    async post(product_name, price, quantity,  seller, date ) {
        return await db`INSERT INTO report(product_name, price, quantity, seller, date)
        VALUES(${product_name}, ${price}, ${quantity}, ${seller}, ${date})`;
    }

}

export default reportRepository;

