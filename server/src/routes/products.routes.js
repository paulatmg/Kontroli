import productsController from "../controllers/products.controller.js";


export default async function productsRoutes(fastify){

    // buscar produtos
    fastify.get('/get', async () => {
        return productsController.get();
    })

    //adicionar produtos
    fastify.post('/post', async (req, reply) => {
        return productsController.post(req)
    })

    // atualizar produtos
    fastify.put('/put/:id', async (req, reply) => {
        return productsController.put(req);

    })

    // deletar produtos
    fastify.delete('/delete/:id', async (req, reply) => {
        return productsController.delete(req);

    })
}