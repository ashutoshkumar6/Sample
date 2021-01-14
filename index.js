const express=require('express')
const bodyParser=require('body-parser')
const Class9=require('./models/class9')
const Class10=require('./models/class10')
const path=require('path')
const subject=require('./models/subject')
const multer=require('multer')
const app=express()
require('./db/db')
const port=3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const public=path.join(__dirname,'public')
const views=path.join(__dirname,'views')

app.set('view engine','ejs') 
app.set('views',views)
app.use(express.static(public))

app.get('/',async(req,res)=>{
    
    res.render('index')
})

const upload=multer({
    //dest:'avatars',    because we using buffer type
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(pdf)$/))//this specific symbol is regex expression for more visit video no.125 or regex101.com
        {
            cb(new Error('Please upload valid image'))
        }
        cb(undefined,true)
    }
})

app.post('/',upload.single('avatar'),async(req,res)=>{
   console.log(req.file)
    const sub=new subject(req.file)
    sub.save()
    res.redirect('/')
})

app.get('/sub',async(req,res)=>{
    const sub=await subject.find()
    res.send(sub)
})

app.listen(port,()=>{  
    console.log(`Server is up at ${port}`)
})