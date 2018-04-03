import ProductRoutes from '../../modules/products/router';

class Routes {

    constructor(app) {
        this.router = new ProductRoutes();
        this.getRoutes(app);
    }

    getRoutes(app) {
        app.route('/api/produtos')
            .get(this.router.findAll);
        app.route('/api/produtos')
            .post(this.router.create);
        app.route('/api/produtos/:id')
            .get(this.router.findOne);
        app.route('/api/produtos/:id')
            .put(this.router.update);
        app.route('/api/produtos/:id')
            .delete(this.router.destroy);
    }
}

export default Routes;