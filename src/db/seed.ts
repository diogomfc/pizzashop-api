import {fa, faker} from "@faker-js/faker"
import {users, restaurants} from "./schema"

import chalk from "chalk"

import { db } from "./connection"

// Reset the database
await db.delete(users);
await db.delete(restaurants);

console.log(chalk.yellow(" ✔ Database reset"));

// Crete customers
await db.insert(users).values([
  {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: "customer",
  },
  {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: "customer",
  }
]);

console.log(chalk.yellow(" ✔ Customers created"));

// Create managers
const [manager] = await db.insert(users).values([
  {
    name: faker.person.fullName(),
    email: 'admin@admin.com',
    role: "manager",
  }
]).returning({
  id: users.id
});

console.log(chalk.yellow(" ✔ Managers created"));

// Create restaurants
await db.insert(restaurants).values([
  {
    name: faker.company.name(),
    description: faker.lorem.paragraph(),
    managerId: manager.id,
  }
]);

console.log(chalk.greenBright(" 🗃️ database seeded successfully"));
process.exit();