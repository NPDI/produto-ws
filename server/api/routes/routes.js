import ProductRoutes from '../../modules/products/router';
import ProtocolRoutes from '../../modules/protocols/router';

class Routes {

    constructor(app) {
        this.productRouter = new ProductRoutes();
        this.protocolRouter = new ProtocolRoutes();
        this.getRoutes(app);
    }

    getRoutes(app) {
        app.route('/api/produtos')
            .get(this.productRouter.findAll);
        app.route('/api/produtos')
            .post(this.productRouter.create);
        app.route('/api/produtos/:id')
            .get(this.productRouter.findOne);
        app.route('/api/produtos/:id')
            .put(this.productRouter.update);
        app.route('/api/produtos/:id')
            .delete(this.productRouter.destroy);

        app.route('/api/protocolos')
            .get(this.protocolRouter.findAll);
        app.route('/api/protocolos')
            .post(this.protocolRouter.create);
        app.route('/api/protocolos/:id')
            .get(this.protocolRouter.findOne);
        app.route('/api/protocolos/:id')
            .delete(this.protocolRouter.destroy);
    }
}

export default Routes;