import React from "react";
import { Route } from "react-router-dom";
import Home from './component/Home';


export default ()=>{
    return(
        <div>
            <Route exact path='/' component={Home}></Route>
            <Route  path='/about' component={()=>(<div><h1>I am about page</h1></div>)}></Route>

        </div>
    )
}