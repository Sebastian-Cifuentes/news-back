<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

Para ejecutar esta pruba es necesario tener instalado docker y así poder correr la BD

## Descargar docker
* Ingresar a ```https://docs.docker.com/desktop/``` e instalar el dashboard y asegurarse de que este corriendo para poder levantar el contenedor de la BD.

# Ejecutar en desarrollo

1. Clonar repositorio
2. Ejecutar
```
yarn install
```
3. Tener Nest cli instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```
5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__
6. Llenar las variables de entorno definidas en el __.env__
7. Ejecutar la app en dev
```
yarn run start:dev
```
8. Recargar o reconstruir la bd con la semilla
```
localhost:3000/api/v1/seed
```

## Stack usado
* MongoDB
* Nest
* TypeScript
