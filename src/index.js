import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helper/render';
import createStore from './helper/createStore';
import { store } from './client/client';
const app = express();

app.use(express.static('public'));
app.get('*',async (req, res) => {
//   const store = createStore();

//   const promises = matchRoutes(Routes, req.path).map(({ route }) => {
//     // console.log(route.loadData())
//     return route.loadData!=undefined ? route.loadData(store) : null;
//   });
  
//   Promise.all(promises).then(() => {
//       console.log(promises)
//     res.send(renderer(req, store));
//   });
    
  const actions = matchRoutes(Routes, req.path)
  .map(({ route }) => route.loadData ? route.loadData({...store, path: req.path }) : null)
  .map(async actions => await Promise.all(
    (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
    )
  );

await  Promise.all(actions);

    
    const context = {};
    const content = renderer(req.path, store, context);

    res.send(content);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});