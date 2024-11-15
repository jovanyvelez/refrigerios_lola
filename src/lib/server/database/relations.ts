import { relations } from "drizzle-orm/relations";
import { grado, estudiantes, grupo, quejas } from "./schema";

export const estudiantesRelations = relations(estudiantes, ({one, many}) => ({
	grado: one(grado, {
		fields: [estudiantes.grado],
		references: [grado.id]
	}),
	grupo: one(grupo, {
		fields: [estudiantes.grupo],
		references: [grupo.id]
	}),
	quejas: many(quejas),
}));

export const gradoRelations = relations(grado, ({many}) => ({
	estudiantes: many(estudiantes),
	grupos: many(grupo),
}));

export const grupoRelations = relations(grupo, ({one, many}) => ({
	estudiantes: many(estudiantes),
	grado: one(grado, {
		fields: [grupo.gradoId],
		references: [grado.id]
	}),
}));

export const quejasRelations = relations(quejas, ({one}) => ({
	estudiante: one(estudiantes, {
		fields: [quejas.idEstudiante],
		references: [estudiantes.idEstudiante]
	}),
}));