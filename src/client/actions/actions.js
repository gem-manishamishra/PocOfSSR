export const Fetch_Users='fetch_users';

export const fetch_users=()=> async dispatch =>{
    const res=[{'name':'mani'},{'name':'mani1'},{'name':'mani2'}]
    dispatch({
        type:Fetch_Users,
        payload:res
    })
}