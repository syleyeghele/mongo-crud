const { default: mongoose } = require('mongoose');

// create db connection
const dbUri = 'mongodb+srv://syleyeghele:syleyeghele@nodecrud.9khb6ae.mongodb.net/nodecrud?retryWrites=true&w=majority'
mongoose.connect(dbUri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongodb connection on point and running')
});

// create mongoose schema
const Schema = mongoose.Schema;

const todoListSchema = new Schema({
    title: {
        type: String,
        require: true,
        unique: true,
    },
    description: {
        type: String,
        require: true,
        unique: true,
    },
    time: {
        type: String,
        require: true,
        unique: true,
    },

});

const todoList = mongoose.model('todolist', todoListSchema)

module.exports = todoList