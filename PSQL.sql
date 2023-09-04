CREATE DATABASE "marketplace"
\c marketplace

CREATE TABLE Usuarios (
    "id" SERIAL,
    "email" VARCHAR(50),
    "nombre" VARCHAR(25),
    "password" VARCHAR(16),
    "rol" VARCHAR
);

CREATE TABLE Productos (
    "id" SERIAL,
    "id_usuario" BIGINT,
    "categoria_id" BIGINT,
    "nombre" VARCHAR(16),
    "precio" BIGINT,
    "descripcion" VARCHAR
    "imgs" VARCHAR
);

CREATE TABLE Categorias (
    "id" SERIAL,
    "nombre" VARCHAR(16),
);

CREATE TABLE Favoritos (
    "id" SERIAL,
    "id_usuario" BIGINT,
    "producto_id" BIGINT,
);

CREATE TABLE Transacciones (
    "id" SERIAL,
    "comprador_usuario" BIGINT,
    "vendedor_id" BIGINT,
    "producto_id" BIGINT,
    "precio" BIGINT,
);
