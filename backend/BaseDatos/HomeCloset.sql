CREATE DATABASE homecloset;

\C homecloset

CREATE TABLE administradores (
    rut VARCHAR(15) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE usuarios (
    rut VARCHAR(15) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    direccion VARCHAR(255) NOT NULL
);

CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    descripcion VARCHAR(255),
    img VARCHAR(255),
    stock INTEGER,
    precio NUMERIC NOT NULL,
    rutUsu VARCHAR(15),
    CONSTRAINT fk_rutusu FOREIGN KEY (rutUsu) REFERENCES administradores(rut)
);

CREATE TABLE like_usuario (
    id SERIAL PRIMARY KEY,
    rutUsu VARCHAR(15),
    idProduc SERIAL,
    CONSTRAINT fk_rutusu FOREIGN KEY (rutUsu) REFERENCES usuarios(rut),
    CONSTRAINT fk_idproduc FOREIGN KEY (idProduc) REFERENCES productos(id)
);