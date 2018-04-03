import * as Bluebird from 'bluebird';
import product from '../../models/product';

const model = require('../../models');

class Product {

    constructor() {
        this.createProduct = ({ id, urlImagem, name, codigoDoProduto, codigoDeSoftware, urlFirmware, display }) => ( { id, urlImagem, name, codigoDoProduto, codigoDeSoftware, urlFirmware, display });
        this.createProducts = (data) => data.map(this.createProduct);
    }

    create(product) {
        return model.Product.create(product);
    }

    getAll() {
        return model.Product.findAll({
            order: ['name']
        })
            .then(this.createProducts)
    }

    getById(id) {
        return model.Product.findOne({
            where: { id }
        })
            .then(this.createProduct)
    }

    update(id, user) {
        return model.Product.update(user, {
            where: { id },
            fields: ['urlImagem', 'name', 'codigoDoProduto', 'codigoDeSoftware', 'urlFirmware', 'display']
        })
    }

    delete(id) {
        return model.Product.destroy({
            where: { id }
        })
    }


}

export default new Product();