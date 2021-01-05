const SET_USER_DATA = 'SET_USER_DATA'
const SET_PROFILE_PHOTO = 'SET_PROFILE_PHOTO'

const initialState = {
  login: null,
  email: null,
  userId: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    case SET_PROFILE_PHOTO:
      return {
        ...state,
        
      }

    default:
      return state
  }
}

export default authReducer

export const setUserData = (login, email, userId) => ({type: SET_USER_DATA,
  data: { login, email, userId }
}
)