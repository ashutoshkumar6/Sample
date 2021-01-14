const mongoose=require('mongoose')
const subjectSchema = new mongoose.Schema({
    avatar:{
        type:Buffer
    }
});



const subject=mongoose.model('subject',subjectSchema)
module.exports=subject