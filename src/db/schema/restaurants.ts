//Tabela de usuários
import { text, timestamp, pgTable, pgEnum } from "drizzle-orm/pg-core";
import {createId } from '@paralleldrive/cuid2'

export const restaurants = pgTable("restaurants", {
  id: text("id").$defaultFn(() => createId()).primaryKey(),
  name: text("name").notNull(),
  description: text("description").unique().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
