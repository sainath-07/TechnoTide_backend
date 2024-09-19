const Crudapp = require("../model/crud")

const addTodo = async (req, res) => {

    const { todo } = req.body

    try {
        const todoapp = new Crudapp({
            todo
        })

        const saveaddtodo = await todoapp.save()

        res.status(200).json({
            message: "todo added",
            saveaddtodo
        })


    } catch (error) {
        console.log(error, "error from addtodo")
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { todoId } = req.params

        const deleteProduct = await Crudapp.findByIdAndDelete({
            _id: todoId
        }, { new: true })

        res.status(200).json({
            message: "deleted todo",
            deleteProduct

        })
    } catch (error) {
        console.log(error, "Error from delete todo")
    }
}

const getalltodo = async (req, res) => {
    const alltodos = await Crudapp.find({})
    res.status(200).json({
        message: "All todos",
        alltodos
    })
}

const updatetodo = async (req, res) => {
    const { todoId } = req.params
    const { todo } = req.body

    try {
        const updatetodo = await Crudapp.findOneAndUpdate(
            {
                _id: todoId,

            },
            {
                todo
            },


            { new: true }
        )

        res.status(200).json({
            message: 'todo updated sucsessfull',
            updatetodo
        })
    } catch (error) {
        console.log(error, "Error from updatetodo")
    }

}

module.exports = {
    addTodo,
    deleteTodo,
    getalltodo,
    updatetodo
}