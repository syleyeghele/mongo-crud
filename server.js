// const express = require('express');
// const app = express();
// const todoList = require('./model/index')
// var timestamp = require('timestamp')
// app.use(express.json());
// app.use(express.urlencoded());



// // get todo list
// app.get("/todolist", (req, res) => {
//     todoList.find({},  (err, data) => {
//         if (!err) {
//             if (data.length != 0){
//                 console.log('todo list from db: ', data)
//                 res.send(data);
//             } else {
//                 console.log('no todo entered yet')
//                 res.send('no todo entered yet')
//             }
//         } else {
//             throw err;
//         }
//     }).clone().catch((err) => { console.log(err)})
// });



// // post todo list
// app.post('/todo', async (req, res) => {
//     try{
//         console.log('req.body: ', req.body);
//         const time = timestamp();
//         const newTime = new Date( time )

//         const newTodo = new todoList({
//             title: req.body.title,
//             description: req.body.description,
//             timeStamp: newTime
//         });

//         await todoList.insertMany(newTodo);

//         res.send('new todo added to db')

//     } catch(err) {
//         console.log(err)
//     }
// })

// //update todo list
// app.patch('/todo/:id', async (req, res) => {
//     try{
//         const id = req.params.id;
//         const update = req.body;
//         const options = {new: true}

//         const result = await todoList.findByIdAndUpdate(id, update, options);
//         if (result != null){
//             res.send(result);
//         } else {
//             res.send('no todo to update...')
//         }

//     } catch (err) {
//         console.log(err.message)
//     }
// })

// //delete todo list
// app.delete('/todo/:id', async (req, res) => {
//         const id = req.params.id;

//         const result = await todoList.findByIdAndDelete(id)
//         res.send('delete successful')

// })


// app.listen(8000, (req, res) => {
//     console.log('server is running in port 8000!');
// })