
import { response } from "express"
import {v2 as cloudinary} from 'cloudinary';
import { cargarImagenesProducto } from "../helpers/dbHelpers.js";


cloudinary.config({ 
    cloud_name: 'dezwpnks0', 
    api_key: '115294745746685', 
    api_secret: '_28lp-NId74n1JHa5fcnmoqSH9o' 
});

const postProductoImagenes = async(req, res = response)=>{
    const {id} = req.params;
    try {
        const {tempFilePath: tempFilePath1} = req.files.img1;
        const {tempFilePath: tempFilePath2} = req.files.img2;
        const {secure_url: secure_url1} = await cloudinary.uploader.upload(tempFilePath1)  
        const {secure_url: secure_url2} = await cloudinary.uploader.upload(tempFilePath2)  
        let img1 = secure_url1;
        let img2 = secure_url2;

        const response = await cargarImagenesProducto(id, img1, img2)

        res.status(201).json({
            response
        })
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json(error);
    }
}


export{
    postProductoImagenes
}