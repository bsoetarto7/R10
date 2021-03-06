// Name your actions
const GET_SESSION_BEGIN = 'GET_SESSION_BEGIN';
const GET_SESSION_SUCCESS = 'GET_SESSION_SUCCESS';
const GET_SESSION_ERROR = 'GET_SESSION_ERROR';

// Create some action creators

export const getSessionBegin = () => ({
  type: GET_SESSION_BEGIN
})

export const getSessionSuccess = (session) => ({
  type: GET_SESSION_SUCCESS,
  session: session
})

export const getSessionError = (err) => ({
  type: GET_SESSION_ERROR,
  error: err
})

// Create and export your reducers

const initialState = {
  isLoading:false,
  sessionData:[],
  errorMsg:''
}
export default (state = initialState, action) => {
  switch (action.type){
    case GET_SESSION_BEGIN:
      return {
        ...state,
        isLoading:true
      }
    case GET_SESSION_SUCCESS:
      return {
        ...state,
        sessionData: action.session,
        isLoading:false
      }
    case GET_SESSION_ERROR:
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

export const fetchSession = () =>{
  return (dispatch) => {
    dispatch(getSessionBegin());
    fetch('https://r10app-95fea.firebaseio.com/sessions.json')
    .then(resp => resp.json())
    .then(data => {
      dispatch(getSessionSuccess(data));
    })
    .catch(err => {
      dispatch(getSessionError(err));
    })
  }
}