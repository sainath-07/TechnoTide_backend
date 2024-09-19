const { Router } = require('express')
const { addTodo, getalltodo, deleteTodo, updatetodo } = require('../controller/todoController')
const router = Router()

router.post('/addtodo', addTodo)
    .get('/alltodos', getalltodo)
    .delete('/deletetodo/:todoId', deleteTodo)
    .patch('/updatetodo/:todoId', updatetodo)

module.exports = router