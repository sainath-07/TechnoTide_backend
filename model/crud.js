const mongoose=require('mongoose')

const crud=new mongoose.Schema({
    todo : {
        type : "String"
    }
})

const Crudapp=mongoose.model('Crud',crud)

module.exports=Crudapp