import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';
import { onError } from '../../api/responses/errorHandler';
import { onSuccess } from '../../api/responses/successHandler';
import Product from './service';
import { dbErrorandler } from '../../config/dbErrorHandler';

class ProductController {
    constructor() { }

    getAll(req: Request, res: Response) {
        Product.getAll()
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao buscar todos os Produtos'));
    }
    createProduct(req: Request, res: Response) {
        Product.create(req.body)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(dbErrorandler, res))
            .catch(_.partial(onError, res, 'Erro ao criar novo Produto'));
    }
    getById(req: Request, res: Response) {
        const productId = parseInt(req.params.id);
        Product.getById(productId)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Produto informado não encontrado'));
    }
    updateProduct(req: Request, res: Response) {
        const productId = parseInt(req.params.id);
        const props = req.body;
        Product.update(productId, props)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao atualizar Produto'));
    }
    deleteProduct(req: Request, res: Response) {
        const productId = parseInt(req.params.id);
        Product.delete(productId)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao deletar o Produto informado'));
    }
}

export default ProductController;