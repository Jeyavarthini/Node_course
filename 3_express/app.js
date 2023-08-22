const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('Hello')
})
app.get('/about',(req,res)=>{
    res.send('We create Impact')
})
app.get('/contact',(req,res)=>{
    res.send('We create Impression')
})
app.listen(3000,()=>console.log('Port is running'))
