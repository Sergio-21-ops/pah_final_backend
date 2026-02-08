import bandaModelo from "../modelos/bandaModelo.js";
import { bandasValidacion } from "../validacion/validacion.js";

export const crearBanda = async (req,res) =>{
    
         const { error } = bandasValidacion(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    

    try {
        const banda = new bandaModelo({...req.body});
        const nuevaBanda = await banda.save();
        res.json(nuevaBanda);
    } catch (err) {
        res.status(400).json({error:err.message});
    }
}
export const getBanda = async (req,res) =>{
    try {
       const bandas = await bandaModelo.find()
       res.json(bandas)
    } catch (err) {
        res.status(400).json({error:err.message});
    }
}

export const getBanda_x_id = async (req,res) =>{
    try {
       const banda = await bandaModelo.findById(req.params.id)
       res.json(banda)
    } catch (err) {
        res.status(400).json({error:err.message});
    }
}

export async function editarBanda(req,res) {
   
   try {
     const data = { ...req.body };

 
          const bandaActualizada = await bandaModelo.findByIdAndUpdate(req.params.id,data,{new:true})
        
          if(!bandaActualizada) {
                        res.status(404).json({message:"disco no encontrado"}); 
        }
        res.json(bandaActualizada)

               } catch (err) {
           res.status(400).json({error:err.message});
       }
}

export async function borrarBanda(req,res) {
   
 try {
       
     const bandaBorrada = await bandaModelo.findByIdAndDelete(req.params.id)

    if(!bandaBorrada) {
          res.status(404).json({message:"banda no encontrada"});
    }
        res.json(bandaBorrada)

    } catch (err) {
           res.status(400).json({error:err.message});
       }

}
