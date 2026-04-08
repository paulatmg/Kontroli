import { neon } from "@neondatabase/serverless";
const db = neon("postgresql://neondb_owner:npg_jeZJSOsKMN57@ep-cool-bar-adu26y89-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")


const categoryRepository = {


    // p buscar as categorias 
    async get() {
        return await db`SELECT * FROM category_kontroli`;
    
    },
    async post(name) {
        return await db`INSERT INTO category_kontroli(name) VALUES (${name})`

    },

    async put(id, name) {
        return await db`UPDATE category_kontroli SET name=${name} WHERE id = ${id}`

    },

    async delete(category_id) {
        return await db`DELETE FROM category_kontroli WHERE category_id = ${category_id}`
    }

}

export default categoryRepository;

