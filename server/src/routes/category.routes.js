import categoryController from "../controllers/category.controller.js";



//pegar as categorias p filtrar

export default async function categoryRoutes(fastify) {

    // buscar categorias
    fastify.get('/get', async () => {
        return await categoryController.get();
    })

    //adicionar categoria
    fastify.post('/post', async (req, reply) => {
        return categoryController.post(req)
    })


    // atualizar categorias
    fastify.put('/put/:id', async (req, reply) => {
        return categoryController.put(req);

    })

    // deletar categorias
    fastify.delete('/delete/:category_id', async (req, reply) => {
        return categoryController.delete(req);

    })
}

