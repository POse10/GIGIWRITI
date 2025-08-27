import { pgTable, text, serial, integer, boolean, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  serviceType: text("service_type").notNull(),
  topic: text("topic").notNull(),
  wordCount: integer("word_count").notNull(),
  dueDate: timestamp("due_date").notNull(),
  aimLevel: text("aim_level").notNull(),
  totalPrice: decimal("total_price", { precision: 10, scale: 2 }).notNull(),
  currency: text("currency").notNull(),
  discountApplied: boolean("discount_applied").default(false),
  discountCode: text("discount_code"),
  customerEmail: text("customer_email"),
  customerName: text("customer_name"),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertOrderSchema = createInsertSchema(orders).pick({
  serviceType: true,
  topic: true,
  wordCount: true,
  dueDate: true,
  aimLevel: true,
  totalPrice: true,
  currency: true,
  discountApplied: true,
  discountCode: true,
  customerEmail: true,
  customerName: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type Order = typeof orders.$inferSelect;
