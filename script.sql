CREATE DATABASE "marketplace";
\c marketplace

CREATE TABLE Usuarios (
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR(50) UNIQUE,
    "nombre" VARCHAR(25),
    "password" VARCHAR(255),
    "rol" VARCHAR(20)
);

CREATE TABLE Productos (
    "id" SERIAL PRIMARY KEY,
    "id_usuario" BIGINT,
    "id_categoria" BIGINT,
    "nombre" VARCHAR(16),
    "precio" BIGINT,
    "descripcion" VARCHAR,
    "img1" VARCHAR,
    "img2" VARCHAR
);

CREATE TABLE Categorias (
    "id" SERIAL PRIMARY KEY,
    "nombre" VARCHAR(16)
);

CREATE TABLE Favoritos (
    "id" SERIAL PRIMARY KEY,
    "id_usuario" BIGINT,
    "id_producto" BIGINT
);

CREATE TABLE Transacciones (
    "id" SERIAL PRIMARY KEY,
    "comprador_usuario" BIGINT,
    "id_vendedor" BIGINT,
    "id_producto" BIGINT,
    "precio" BIGINT
);
