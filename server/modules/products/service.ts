import { IProduct, createProduct, createProducts } from './interface';
import * as Bluebird from 'bluebird';
import product from '../../models/product';

const model = require('../../models');

class Product implements IProduct {
    public id: number;
    public urlImagem: string;
    public name: string;
    public codigoDoProduto: string;
    public codigoDeSoftware: string;
    public urlFirmware: string;
    public display: string

    constructor() { }

    create(product: any) {
        return model.Product.create(product);
    }

    getAll(): Bluebird<IProduct[]> {
        return model.Product.findAll({
            order: ['name']
        })
            .then(createProducts)
    }

    getById(id: number): Bluebird<IProduct> {
        return model.Product.findOne({
            where: { id }
        })
            .then(createProduct)
    }

    update(id: number, user: any) {
        return model.Product.update(user, {
            where: { id },
            fields: ['urlImagem', 'name', 'codigoDoProduto', 'codigoDeSoftware', 'urlFirmware', 'display']
        })
    }

    delete(id: number) {
        return model.Product.destroy({
            where: { id }
        })
    }
}

export default new Product();