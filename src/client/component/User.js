import React,{useState,useEffect} from 'react';
import {fetchUsers}  from '../actions/actions';
import { useDispatch ,useSelector} from 'react-redux';

const User=()=>{
    const user=useSelector(state=>state.users)
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
       console.log(user)
    },[])
    function fetching ({ dispatch }) {
        return [dispatch(fetchUsers())];
      }
    function renderUser(){
        return user.map((item)=>{
            return <h3>{item.name}</h3>
        })
       }
    return (<div>
       user
       {renderUser()}
    </div>)
};
function loadData(store){
    return store.dispatch(fetchUsers())
}
export default User;