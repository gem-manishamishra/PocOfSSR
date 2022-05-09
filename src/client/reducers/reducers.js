import { Fetch_Users } from "../actions/actions";

export default (state=[],actions)=>{
    switch(actions.type){
        case Fetch_Users:
            console.log([...actions.payload])
            return [...actions.payload]
        default:
            return state;
    }
}