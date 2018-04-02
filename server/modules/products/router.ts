import { Request, Response } from 'express';

import ProductController from './controller'

let ProductCtrl; 

class ProductRoutes {
    constructor(){
        ProductCtrl = new ProductController();
    }

    findAll(req: Request, res: Response){
        return ProductCtrl.getAll(req, res);
    }
    findOne(req: Request, res: Response){
        return ProductCtrl.getById(req, res);
    }
    create(req: Request, res: Response){
        return ProductCtrl.createProduct(req, res);
    }
    update(req: Request, res: Response){
        return ProductCtrl.updateProduct(req, res);
    }
    destroy(req: Request, res: Response){
        return ProductCtrl.deleteProduct(req, res);
    }
}

export default ProductRoutes;