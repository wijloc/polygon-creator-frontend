//importar dependencias
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//iniciando o express
const server = express();

server
  //utilizar body do req
  .use(express.urlencoded({limit: '200mb',extended: true}))
  //utilizando os arquivos estásticos
  .use(express.static("public"))

  //configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

//criar rotas da aplicacao
.get('/', pages.index)
.get('/polygons', pages.polygons)
.get('/create-polygon', pages.createPolygon)
.get('/polygon', pages.polygon)
.post('/save-polygon', pages.savePolygon)
.get('/delete-polygon', pages.deletePolygon)
.post('/alter-polygon', pages.alterPolygon)
.get('/manage-customers', pages.manageCustomers)
.post('/save-polygon-customers', pages.savePolygonCustomers)
.get('/manage-lockers', pages.manageLockers)
.post('/save-polygon-lockers', pages.savePolygonLockers)
.get('/polygons/:id/instance/:day', pages.polygonInstance)
.get('/lockers-instance', pages.lockersInstance)
.get('/polygons/:id/locker-instance', pages.polygonLockersInstance)

//ligar o servidor
server.listen(process.env.PORT || 5500, () => {
  console.log(`Frontend started on port ${process.env.PORT || 5500} !`);
});
