const express=require('express');
import render from './helper/render';
import createStore from './helper/createStore';
const app=express();

app.use(express.static('public'))

app.get('*',(req,res)=>{
    const store=createStore();
    
    res.send(render(req,store))
});

app.listen('3000',()=>{
    console.log('listening on port 3000')
})