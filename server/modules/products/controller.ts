import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';

import Product from './service';

class ProductController {
    constructor() { }

    getAll(req: Request, res: Response) {
        Product.getAll()
            .then(data => {
                res.status(HTTPStatus.OK).json({
                    payload: data
                })
            })
            .catch(err => {
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao buscar' })
            });
    }
    createProduct(req: Request, res: Response) {
        Product.create(req.body)
            .then(data => {
                res.status(HTTPStatus.OK).json({
                    payload: data
                })
            })
            .catch(err => {
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao criar' })
            });
    }
    getById(req: Request, res: Response) {
        const productId = parseInt(req.params.id);
        Product.getById(productId)
            .then(data => {
                res.status(HTTPStatus.OK).json({
                    payload: data
                })
            })
            .catch(err => {
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao buscar' })
            });
    }
    updateProduct(req: Request, res: Response) {
        const productId = parseInt(req.params.id);
        const props = req.body;
        Product.update(productId, props)
            .then(data => {
                res.status(HTTPStatus.OK).json({
                    payload: data
                })
            })
            .catch(err => {
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao atualizar' })
            });
    }
    deleteProduct(req: Request, res: Response) {
        const productId = parseInt(req.params.id);
        Product.delete(productId)
            .then(data => {
                res.status(HTTPStatus.OK).json({
                    payload: data
                })
            })
            .catch(err => {
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao deletar' })
            });
    }
}

export default ProductController;