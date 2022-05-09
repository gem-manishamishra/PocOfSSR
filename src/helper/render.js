import { Provider } from 'react-redux';
const React =require('react')
const renderToString= require('react-dom/server').renderToString;
const StaticRouter=require('react-router-dom').StaticRouter;
const  Routes=require('../client/Routes').default;
import { renderRoutes } from 'react-router-config';
export default (req,store ,context)=>{
   
  
    const content =renderToString(
                      
                        <Provider store={store}>
                            <StaticRouter location={req.path} context={context}>
                                {renderRoutes(Routes )}
                            </StaticRouter>
                        </Provider>
                     
                        )
    return `<html>
            <head></head>
            <body>
            
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${JSON.stringify(store.getState())}
                </script>
                <script src='bundle.js'></script>
            </body>
        </html>`
}
