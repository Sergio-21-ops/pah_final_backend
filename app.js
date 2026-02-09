import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { artistasRutas, bandasRutas, discosRutas, usuariosRutas } from "./rutas/index.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: "https://pah-final-frontend-6kue.vercel.app",
    credentials: true
}));
app.use(express.json());

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log('Conexión a MongoDB Atlas correcta'))
    .catch(err => console.log('Conexión incorrecta', err));

// Rutas API
app.use('/discos', discosRutas);
app.use('/usuarios', usuariosRutas);
app.use('/artistas', artistasRutas);
app.use('/bandas', bandasRutas);

// Puerto dinámico para Render o 3000 local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
