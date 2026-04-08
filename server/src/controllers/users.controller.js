import usersRepository from "../repository/users.repository.js"; 
import bcrypt from "bcrypt";


const usersController = {

    async get() {
        return usersRepository.get(); 
    },

    async post(req, reply) {

        const { name, last_name, email, password, is_admin } = req.body;

        let hashPassword = await bcrypt.hash(password, 10);

        // return hashPassword;


        await usersRepository.post(name, last_name, email, hashPassword, is_admin)

        return "deu bom"
    },


    async put(req, reply) {
        const { id } = req.params
        const { name, last_name, email, password, is_admin} = req.body;

        let hashPassword = await bcrypt.hash(password, 10);

        await usersRepository.put(id, name, last_name, email, hashPassword, is_admin);


    },

    async delete(req, reply) {
        const { id } = req.params

        await usersRepository.delete(id);
    },

    async login(req, reply) {
        const { password, email } = req.body;
        

        const data = await usersRepository.getUserPassword(email)
        let hash = data[0].password

        let comparePassword = await bcrypt.compare(password, hash)

        if(!comparePassword){
            return "senha incorreta"
        }

        return "senha correta"

    }

}


export default usersController;