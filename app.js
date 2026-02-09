import express from "express";
import path from 'path'
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import dotenv  from "dotenv";
import { artistasRutas, bandasRutas, discosRutas, usuariosRutas } from "./rutas/index.js";
import cors from 'cors'; 


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

mongoose.connect(process.env.MONGODB_URI)

.then(()=>console.log('Conexion correcta'))
.catch((err)=>console.log('Conexion incorrecta',err));


console.log(import.meta.url)
console.log(__filename)
console.log(__dirname)

app.use('/discos', discosRutas);
app.use('/usuarios', usuariosRutas);
app.use('/artistas', artistasRutas);
app.use('/bandas', bandasRutas);

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})


function verificarIndefinido(req, res, next) {
    if (req.method === "POST" || req.method === "PUT") {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: "Texto en JSON" });
        }
    }
    next();
}

app.use(verificarIndefinido);
app.post('ruta', verificarIndefinido , (req,res) =>  {
   
})




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


