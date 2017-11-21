// Name your actions
const GET_CONDUCT_BEGIN = 'GET_CONDUCT_BEGIN';
const GET_CONDUCT_SUCCESS = 'GET_CONDUCT_SUCCESS';
const GET_CONDUCT_ERROR = 'GET_CONDUCT_ERROR';

// Create some action creators

export const getConductBegin = () => ({
  type: GET_CONDUCT_BEGIN
})

export const getConductSuccess = (conduct) => ({
  type: GET_CONDUCT_SUCCESS,
  conduct: conduct
})

export const getConductError = (err) => ({
  type: GET_CONDUCT_ERROR,
  error: err
})

// Create and export your reducers

const initialState = {
  isLoading:false,
  conductData:[],
  errorMsg:''
}
export default (state = initialState, action) => {
  switch (action.type){
    case GET_CONDUCT_BEGIN:
      return {
        ...state,
        isLoading:true
      }
    case GET_CONDUCT_SUCCESS:
      return {
        ...state,
        conductData: action.conduct,
        isLoading:false
      }
    case GET_CONDUCT_ERROR:
      return {
        ...state,
        errorMsg: action.error,
        isLoading:false
      }
    default:
      return state;
  }
}

// Make an async action creator

export const fetchConduct = () =>{
  return (dispatch) => {
    dispatch(getConductBegin());
    fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json')
    .then(resp => resp.json())
    .then(data => {
      dispatch(getConductSuccess(data));
    })
    .catch(err => {
      dispatch(getConductError(err));
    })
  }
}