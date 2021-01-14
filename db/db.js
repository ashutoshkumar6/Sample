const mongoose=require('mongoose')
const db_port='mongodb://localhost:27017/Subject'

mongoose.connect(db_port,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})