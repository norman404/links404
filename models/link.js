const { integer, text, sqliteTable } = require('drizzle-orm/sqlite-core')

const link = sqliteTable('link', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  href: text('href').notNull(),
  hash: text('hash').notNull()
})

module.exports = link
