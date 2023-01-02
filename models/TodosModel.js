const { Schema, model } = require('mongoose');


const TodoSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
});

const TodosModel = model('Todos', TodoSchema);

module.exports = TodosModel;
