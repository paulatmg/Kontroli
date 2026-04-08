import reportController from "../controllers/report.controller.js";



export default async function reportRoutes(fastify) {

    // buscar vendas
    fastify.get('/get', async () => {
        return await reportController.get();
    })


    fastify.post('/post', async (req , reply) => {
        return await reportController.post(req);
    })
}

