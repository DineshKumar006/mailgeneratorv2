const express=require('express')

const cors=require('cors')
const app=express()
app.use(express.json());
app.use(cors());
let PORT=process.env.PORT || 5000


const mailGenertorRoute=require('./src/mailGenerator')
app.use('/gmail',mailGenertorRoute)

app.get('/',async(req,res)=>{
    res.send('mail app')
})


app.listen(PORT,()=>{
    console.log('server is ruuning on',PORT)
})

