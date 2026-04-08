// Import the framework and instantiate it
import Fastify from 'fastify'
import productsRoutes from './routes/products.routes.js'
import cors from '@fastify/cors'
import usersRoutes from './routes/users.routes.js'
import categoryRoutes from './routes/category.routes.js'
import reportRoutes from './routes/report.routes.js'


const fastify = Fastify({
  logger: true
})

fastify.register (cors, {
  origin: true,
  credential: true,
  methods: "*"
})

fastify.register(productsRoutes, {
  prefix: "/products"
})

fastify.register(usersRoutes, {
  prefix: "/users"
})


fastify.register(reportRoutes, {
  prefix: "/report"
})


// criando uma rota p categorias
fastify.register(categoryRoutes, {
  prefix: "/category"
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return "server is listening at port 3000"
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}