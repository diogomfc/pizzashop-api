//Tabela de usuários
import { text, timestamp, pgTable, pgEnum } from "drizzle-orm/pg-core";
import {createId } from '@paralleldrive/cuid2'

export const userRolesEnum = pgEnum("user_role", ["manager", "customer"]);

export const user = pgTable("users", {
  id: text("id").$defaultFn(() => createId()).primaryKey(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  phone: text("phone"),
  role: userRolesEnum("role").default("customer").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
