// action imports
import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS, SET_SMURF, SET_ERROR } from "../actions/index";

export const initialState = {
  smurfs: [],
  isLoading: true,
  errorMessage: ''
}

const reducer = (state = initialState, action)=>{
  switch(action.type) {
    case FETCH_START:
       return {
         ...state,
         smurfs: [],
         isLoading: true,
         errorMessage: ''
       }
    case FETCH_FAIL:
       return {
         ...state,
         smurfs: [],
         isLoading: false,
         errorMessage: action.payload
       }
    case FETCH_SUCCESS:
       return {
         ...state,
         smurfs: [...state.smurfs, action.payload[0], action.payload[1]],
         isLoading: false,
         errorMessage: ''
       }
    case SET_SMURF:
       return {
         ...state,
         smurfs:[...state.smurfs, {
           id: Date.now(),
           name: action.payload.name,
           position: action.payload.position,
           nickname: action.payload.nickname,
           description: action.payload.description
         }]
       }
    case SET_ERROR:
       return {
         ...state,
         errorMessage: action.payload
      }
    default:
      return state;
  }
}
//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

