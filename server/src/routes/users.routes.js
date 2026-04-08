import usersController from "../controllers/users.controller.js";

export default function usersRoutes(fastify) {

    // buscar usuarios
    fastify.get('/get', async () => {
        return usersController.get();
    })

    // adicionar usuarios
    fastify.post('/post', async (req, reply) => {
        return usersController.post(req)

    })

    // atualizar usuarios
    fastify.put('/put/:id', async (req, reply) => {
        return usersController.put(req);

    })

    // deletar usuarios
    fastify.delete('/delete/:id', async (req, reply) => {
        return usersController.delete(req);

    })

    //login
    fastify.post('/login', async (req, reply) => {
        return usersController.login(req, reply);
    })


    

}