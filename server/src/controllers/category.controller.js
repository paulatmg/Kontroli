import categoryRepository from "../repository/category.repository.js";

const categoryController = {

    async get(){
        try{
            return await categoryRepository.get();
        }catch(e){
            return e
        }
    },

    async post(req, reply){

        const {name} = req.body;

        await categoryRepository.post(name)

        return "categoria adicionada com sucesso!!!!"
    },


    async put(req, reply){
        const { id } = req.params
        const { name } = req.body;

        await categoryRepository.put(id, name);


    },

    async delete(req, reply){
        const { category_id } = req.params

        await categoryRepository.delete(category_id);
        }


}

export default categoryController;


