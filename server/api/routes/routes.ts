import { Application, Request, Response } from 'express';

class Routes {
    constructor(app: Application) {
        this.getRoutes(app);
    }

    getRoutes(app: Application): void {
        app.route('/')
            .get((req: Request, res: Response) => res.send('Ta funcionando!'))
        app.route('/ola/:nome')
            .get((req: Request, res: Response) => res.send(`Eai, ${req.params.nome}`))
    }
}

export default Routes;