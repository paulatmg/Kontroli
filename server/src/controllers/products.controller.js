import productsRepository from "../repository/products.repository.js";


const productsController = {

    async get(){
        return productsRepository.get();
    },

    async post(req, reply){

        const { name, code, quantity,  min_stock, price, description, category_id} = req.body;

        await productsRepository.post(name, code, quantity,  min_stock, price, description, category_id)

        return "deu bom"
    },


    async put(req, reply){
        const { id } = req.params
        const { name, code, quantity,  min_stock, price, description, category_id} = req.body;

        await productsRepository.put(id, name, code, quantity,  min_stock, price, description, category_id);


    },

    async delete(req, reply){
        const { id } = req.params

        await productsRepository.delete(id);
        }



}


export default productsController;