import { Fetch_Users } from "../actions/actions";

export default (state = [], action) => {
  switch (action.type) {
    case Fetch_Users:
      console.log('reducer ',action.payload)
      return [...action.payload];
    default:
      return state;
  }
};