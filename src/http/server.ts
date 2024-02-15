import { Elysia } from 'elysia'

const app = new Elysia()

app.get('/', () => {
  return ('Hello, Elysia!')
})

app.listen(3333, () => {
  console.log('🚀 HTTP Server running!')
})
