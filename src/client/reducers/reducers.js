import { Fetch_Users } from "../actions/actions";

export default (state=[],actions)=>{
    switch(actions.type){
        case Fetch_Users:
            return actions.payload.data
        default:
            return state;
    }
}