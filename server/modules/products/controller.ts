import { Request, Response } from 'express';

class ProductController{
    constructor(){}

    getAll(req: Request, res: Response){
        res.status(200).json({
            message: 'Ok'
        })
    }
    createProduct(req: Request, res: Response){
        res.status(200).json({
            message: 'Ok'
        })
    }
    getById(req: Request, res: Response){
        res.status(200).json({
            message: 'Ok'
        })
    }
    updateProduct(req: Request, res: Response){
        res.status(200).json({
            message: 'Ok'
        })
    }
    deleteProduct(req: Request, res: Response){
        res.status(200).json({
            message: 'Ok'
        })
    }
}

export default ProductController;