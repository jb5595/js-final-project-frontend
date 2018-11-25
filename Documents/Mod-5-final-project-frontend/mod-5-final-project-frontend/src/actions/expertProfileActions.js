
const BASEEXPERTURL = "http://localhost:3000/experts/"

export function loadProfile(expertID){

  return (dispatch) => {
    dispatch( {type:"LOADING_PROFILE"});
    return fetch(BASEEXPERTURL + expertID).then(response => {
      return response.json()
    }).then(expertObject => {
      dispatch({type: "FETCH_PROFILE", expertObject})
  })
  }
}