import 'babel-polyfill';
const express=require('express');
import render from './helper/render';
import createStore from './helper/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
// import { store } from './client/client';
const app=express();

app.use(express.static('public'))

app.get('*',async (req,res)=>{
    const store=createStore();
    const actions= matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
      });
    
      const context = {};
    await Promise.all(actions).then(() => {
        res.send(render(req, store,context));
      });
        
    
//     const content = render(req.path, store, context);
//     res.send(content)
});

app.listen('3000',()=>{
    console.log('listening on port 3000')
})