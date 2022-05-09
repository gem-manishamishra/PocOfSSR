import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=>{
   
    return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/users'>User</Link>
            </div>
        )
};
export default Navbar;