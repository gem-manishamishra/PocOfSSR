export const Fetch_Users='fetch_users';

export const fetchUsers=()=> async dispatch =>{
    const res=[{'name':'mani'},{'name':'mani1'},{'name':'mani2'}]
    
    console.log('called fetch user function')
    dispatch({
        type:Fetch_Users,
        payload:res
    })
}