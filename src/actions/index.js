// module imports
import axios from 'axios';

//action exports for reducer
export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const SET_SMURF = "SET_SMURF";
export const SET_ERROR = "SET_ERROR";

export const getSmurfs = () => (dispatch) => {
    dispatch(fetchStart());
    axios.get(`http://localhost:3333/smurfs`
      ).then(resp => {
        console.log(resp);
        dispatch(fetchSuccess(resp.data));
      }).catch(err => {
        console.log(err);
        dispatch(fetchFailure(err));
      })
  }


export const fetchStart = () => {
  return({type: FETCH_START});
}

export const fetchSuccess = (smurfs) => {
  return({type: FETCH_SUCCESS, payload: smurfs});
}

export const fetchFailure = (errorMessage) => {
  return({type: FETCH_FAIL, payload: errorMessage});
}

export const setSmurf = (smurf) => {
  return({type: SET_SMURF, payload: smurf});
}

export const setError = (error) => {
  return({type: SET_ERROR, payload: error});
}
  

