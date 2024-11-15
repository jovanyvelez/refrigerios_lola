import { sqliteTable, foreignKey, integer, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const estudiantes = sqliteTable("Estudiantes", {
	idEstudiante: integer("id_estudiante").primaryKey({ autoIncrement: true }).notNull(),
	nombre: text().notNull(),
	grupo: integer().references(() => grupo.id),
	grado: integer().references(() => grado.id),
	pin: text().notNull(),
	correo: text().notNull(),
	token: text(),
});

export const quejas = sqliteTable("Quejas", {
	idQueja: integer("id_queja").primaryKey({ autoIncrement: true }).notNull(),
	idEstudiante: integer("id_estudiante").notNull().references(() => estudiantes.idEstudiante),
	fecha: text().notNull(),
	alimento: text().notNull(),
	tipoQueja: text("tipo_queja").notNull(),
	problema: text().notNull(),
});

export const grupo = sqliteTable("grupo", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	gradoId: integer("grado_id").notNull().references(() => grado.id),
	nombre: text().notNull(),
});

export const grado = sqliteTable("grado", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	nombre: text().notNull(),
});

