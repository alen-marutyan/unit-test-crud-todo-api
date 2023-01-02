const { TodosService } = require('../service/index');
class TodosController {
    async create( req, res, next ) {
        try {
            if (!req.body) throw new Error('Not have Body');

            const data = await TodosService.createTodo({...req.body});

            return res.status(200).json({ data });

        }catch (e) {
            next(e);
        }
    }

    async update( req, res, next ){
        try {
            if (!req.body) throw new Error('Not have Body');

            const data = await TodosService.updateTodo(req.params.id, {...req.body});

            return res.status(200).json({ data });
        }catch (e) {
            next(e);
        }
    }

    async getOne( req, res, next ) {
        try {
            if (!req.body) throw new Error('Not have Body');

            const data = await TodosService.getTodo(req.params.id);

            return res.status(200).json({ data });
        }catch (e) {
            next(e);
        }
    }

    async getAll( req, res, next ){
        try {
            if (!req.body) throw new Error('Not have Body');

            const data = await TodosService.getAllTodos();

            return res.status(200).json({ data });
        }catch (e) {
            next(e);
        }
    }

    async delete( req, res, next ){
        try {
            if (!req.body) throw new Error('Not have Body')

            await TodosService.deleteTodo(req.params.id);

            return res.status(200).json({ data: 'Success' });
        }catch (e) {
            next(e);
        }
    }
}

module.exports = new TodosController();
