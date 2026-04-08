import { neon } from "@neondatabase/serverless";
const db = neon("postgresql://neondb_owner:npg_jeZJSOsKMN57@ep-cool-bar-adu26y89-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")

const usersRepository = {

    async get() {
        return await db`SELECT * FROM users`
    },

    async getUserPassword(email){
        return await db`SELECT * FROM users WHERE email= ${email}` 
    },

    async post(name, lastName, email, password, is_admin) {
        return await db`INSERT INTO users(name, last_name, email, password, is_admin)
        VALUES(${name}, ${lastName}, ${email}, ${password}, ${is_admin})`

    },

    async put(id, name, last_name, email, password, is_admin) {
        return await db`UPDATE users SET name=${name}, last_name=${last_name}, email=${email}, password=${password}, is_admin=${is_admin} WHERE id = ${id}`

    },

    async delete(id) {
        return await db`DELETE FROM users WHERE id = ${id}`
    }
}

export default usersRepository;