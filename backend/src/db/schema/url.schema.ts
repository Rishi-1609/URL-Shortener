import { char, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const urls = pgTable("urls", {
    id : char("id", {length : 26}).primaryKey(),
    originalUrl : text("original_url").notNull(),
    shortCode : varchar("short_code", {length : 8}).notNull().unique(),
    createdAt : timestamp("created_at", {
        withTimezone : true,
        precision : 3,
    }).defaultNow().notNull(),
    updatedAt : timestamp("updated_at", {
        withTimezone : true,
        precision : 3,
    }).defaultNow().notNull(),
});