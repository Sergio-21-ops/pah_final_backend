import multer from "multer"

const storage = multer.diskStorage({
    destination : (req ,file ,cb) => {
        cb(null , 'uploads/')
    },
    filename: (req,file,cb) => {
        const unique = Date.now() + "-" + file.originalname;
        cb(null,unique)

    }
}) 
const filefilter = (req,file,cb) => {
    if (file.mimetype.startsWith("imagen/")) cb(null,true)
       else cb (new Error("only images allowes"), false) 
}

export const upload = multer({storage,filefilter})