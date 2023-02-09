import { GET_POST } from "../ActionTypes/PostTypes";

const initialState = {
    post:[],
}

const Reducer = (state = initialState, { type, payload }) => {
 switch (type) {
    case GET_POST:
        return {...state,post:payload}
    default:
        return state
 }
  }
  export default  Reducer;