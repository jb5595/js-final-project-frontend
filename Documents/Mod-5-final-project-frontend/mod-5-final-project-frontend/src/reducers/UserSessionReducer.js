export default function manageCurrentUser(state = { currentUser: null, jwt:null, expert:false }, action) {
    switch (action.type) {

    case "SET_CURRENT_USER":
    localStorage.setItem("userType", "User")
    localStorage.setItem("userId",action.currentUser.id)
    localStorage.setItem("jwt", action.jwt)
      return {...state, currentUser: action.currentUser, jwt: action.jwt}
    case "SET_CURRENT_EXPERT":
      localStorage.setItem("userType", "Expert")
      localStorage.setItem("userId",action.currentUser.id)
      localStorage.setItem("jwt", action.jwt)
      return {...state, expert: true, currentUser: action.currentUser, jwt: action.jwt}
    case "UPDATE_CURRENT_USER":
      return {...state, currentUser: action.currentUser}
    case "LOGOUT":
      localStorage.clear()
      return {expert: false, currentUser:null, jwt:null}
    default:
      return state
  }
}
