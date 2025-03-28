import { timestamp, pgTable, text, uuid } from "drizzle-orm/pg-core";

// Users Table
export const usersTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name"),
  email: text("email").notNull().unique(),
  masterPassword: text("masterPassword").notNull(),
  createdAt: timestamp("createdAt", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updatedAt", { withTimezone: true }).defaultNow(),
});

// Vaults Table
export const vaultsTable = pgTable("vaults", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("userId")
    .notNull()
    .references(() => usersTable.id),
  name: text("name").notNull(),
  description: text("description"),
  createdAt: timestamp("createdAt", { withTimezone: true }).defaultNow(),
});

// Credentials Table
export const credentials = pgTable("credentials", {
  id: uuid("id").primaryKey().defaultRandom(),
  vaultId: uuid("vaultId")
    .notNull()
    .references(() => vaultsTable.id),
  name: text("name").notNull(), // e.g., "Gmail", "Amazon"
  email: text("email"),
  username: text("username"),
  Password: text("password").notNull(),
  url: text("url"),
  notes: text("notes"),
  createdAt: timestamp("createdAt", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updatedAt", { withTimezone: true }).defaultNow(),
});

// Audit Log Table
export const auditLog = pgTable("auditLog", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("userId")
    .notNull()
    .references(() => usersTable.id),
  action: text("action").notNull(), // e.g., "viewed credential", "added vault"
  targetId: uuid("targetId"), // Optional: reference to credential/vault
  metadata: text("metadata"), // Optional: IP, device info, etc.
  when: timestamp("when", { withTimezone: true }).defaultNow(),
});
