import { neon } from "@neondatabase/serverless";
const db = neon("postgresql://neondb_owner:npg_jeZJSOsKMN57@ep-cool-bar-adu26y89-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")

const productsRepository = {

    async get() {
        return await db`SELECT
        p.id,
        p.name,
        p.code,
        p.quantity,
        p.min_stock,
        p.price,
        p.description,
        p.category_id,
        c.name AS name_category
        FROM products AS p
        INNER JOIN category_kontroli AS c
        ON p.category_id = c.category_id`
    },

    async post(name, code, quantity, min_stock, price, description,category_id) {
        return await db`INSERT INTO products(name, code, quantity,  min_stock, price, description, category_id)
        VALUES(${name}, ${code}, ${quantity}, ${min_stock}, ${price}, ${description}, ${category_id})`

    },

    async put(id, name, code, quantity, min_stock, price, description, category_id) {
        return await db`UPDATE products SET name=${name}, code=${code}, quantity=${quantity},  min_stock=${min_stock}, price=${price}, description=${description}, category_id=${category_id} WHERE id = ${id}`

    },

    async delete(id) {
        return await db`DELETE FROM products WHERE id = ${id}`
    }


}

export default productsRepository;