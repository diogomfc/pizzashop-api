import { Elysia } from 'elysia'
import { db } from '../db/connection'
import { restaurants, users } from '../db/schema'

// const app = new Elysia()

// Defining a route
const app = new Elysia().post('/restaurants', async ({ body, set }) => {
  const { restaurantName, name, email, phone } = body as any

  const [manager] = await db
    .insert(users)
    .values({
      name,
      email,
      phone,
      role: 'manager',
    })
    .returning({
      id: users.id,
    })

  await db.insert(restaurants).values({
    name: restaurantName,
    description: '',
    managerId: manager.id,
  })

  set.status = 204
})

app.get('/', () => {
  return 'Hello, Elysia!'
})

app.listen(3333, () => {
  console.log('🚀 HTTP Server running!')
})
