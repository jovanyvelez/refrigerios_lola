-- Tabla Estudiantes
CREATE TABLE
  `Estudiantes` (
    `id_estudiante` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    `nombre` text NOT NULL,
    `grupo` integer,
    `grado` integer,
    `pin` text NOT NULL,
    `correo` text NOT NULL,
    FOREIGN KEY (`grupo`) REFERENCES `grupo` (`id`),
    FOREIGN KEY (`grado`) REFERENCES `grado` (`id`)
  );

-- Tabla Quejas
CREATE TABLE
  `Quejas` (
    `id_queja` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    `id_estudiante` integer NOT NULL,
    `fecha` text NOT NULL,
    `alimento` text NOT NULL,
    `tipo_queja` text NOT NULL,
    `problema` text NOT NULL,
    FOREIGN KEY (`id_estudiante`) REFERENCES `Estudiantes` (`id_estudiante`)
  );

-- Tabla Grupo
CREATE TABLE
  `grupo` (
    `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    `grado_id` integer NOT NULL,
    `nombre` text NOT NULL,
    FOREIGN KEY (`grado_id`) REFERENCES `grado` (`id`)
  );

-- Tabla Grado
CREATE TABLE
  `grado` (
    `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    `nombre` text NOT NULL
  );

DROP TABLE IF EXISTS Quejas;

DROP TABLE IF EXISTS Estudiantes;

DROP TABLE IF EXISTS grupo;

DROP TABLE IF EXISTS grado;

-- Insert into grado table first
INSERT INTO
  grado (nombre)
VALUES
  ('1st Grade');

INSERT INTO
  grado (nombre)
VALUES
  ('2nd Grade');

-- Insert into grupo table next
INSERT INTO
  grupo (grado_id, nombre)
VALUES
  (1, 'Group A');

INSERT INTO
  grupo (grado_id, nombre)
VALUES
  (2, 'Group B');

-- Insert into Estudiantes table with valid foreign keys
INSERT INTO
  Estudiantes (nombre, grupo, grado, pin, correo)
VALUES
  ('John Doe', 1, 1, '12345', 'john.doe@example.com');

-- Insert into Quejas table with a valid id_estudiante
INSERT INTO
  Quejas (
    id_estudiante,
    fecha,
    alimento,
    tipo_queja,
    problema
  )
VALUES
  (1, '2024-11-07', 'Food 1', 'Taste', 'Bad taste');

-- Check if the `grupo` and `grado` records exist
SELECT
  *
FROM
  grupo;

SELECT
  *
FROM
  grado;

-- Check if the `Estudiantes` record exists
SELECT
  *
FROM
  Estudiantes;

-- Check if the `Quejas` record exists
SELECT
  *
FROM
  Quejas;