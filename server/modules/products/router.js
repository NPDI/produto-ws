import ProductController from './controller'

let ProductCtrl; 

class ProductRoutes {
    constructor(){
        ProductCtrl = new ProductController();
    }

    findAll(req, res){
        return ProductCtrl.getAll(req, res);
    }
    findOne(req, res){
        return ProductCtrl.getById(req, res);
    }
    create(req, res){
        return ProductCtrl.createProduct(req, res);
    }
    update(req, res){
        return ProductCtrl.updateProduct(req, res);
    }
    destroy(req, res){
        return ProductCtrl.deleteProduct(req, res);
    }
}

export default ProductRoutes;