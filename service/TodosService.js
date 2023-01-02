const { TodosModel  } = require('../models');
class TodosService {

    static createTodo(data) {
        return TodosModel.create({...data});
    }

    static getAllTodos(){
         return TodosModel.find().lean();
    }

    static getTodo(id){
        return TodosModel.findById(id);
    }

    static updateTodo(id, data){
        return TodosModel.findByIdAndUpdate(id, {...data},{new: true});
    }

    static deleteTodo(id){
        return TodosModel.findByIdAndDelete(id);
    }
}

module.exports = TodosService;
