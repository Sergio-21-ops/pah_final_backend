import express from "express"
import { agregarDisco,buscarDiscos,getDiscoXId,listaDiscos,modificarDisco,borrarDisco } from "../controladores/discoControlador.js";
import { upload } from "../middlewares/upload.js";


const discosRutas = express.Router();

discosRutas.get('/',listaDiscos);
discosRutas.get('/buscar',buscarDiscos);
discosRutas.get('/:id',getDiscoXId);
discosRutas.post('/',upload.single('imagen'), agregarDisco);
discosRutas.put('/:id',upload.single('imagen'),modificarDisco);
discosRutas.delete('/:id',borrarDisco);
/*
router.patch('/:id',modificarDisco);


*/

export {discosRutas};