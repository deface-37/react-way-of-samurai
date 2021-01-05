const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_LOADING = 'SET_IS_LOADING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

const initialState = {
  users: [],
  parameters: {
    usersPerPage: 5,
    displayedPages: 10
  },
  pagesInfo: {
    totalCount: 0,
    currentPage: 1,
  },
  isLoading: true,
  isFollowing: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    case SET_USERS: {
      return { ...state, users: [...action.users] }
    }
    case SET_TOTAL_COUNT: {
      return { ...state, pagesInfo: { ...state.pagesInfo, totalCount: action.totalCount } }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, pagesInfo: { ...state.pagesInfo, currentPage: action.currentPage } }
    }
    case SET_IS_LOADING: {
      return { ...state, isLoading: action.isLoading }
    }
    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        isFollowing: action.isFetching 
        ? [...state.isFollowing, action.id]
        : state.isFollowing.filter(id => id !== action.id)
      }

    default:
      return state;
  }
}


export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, isLoading })
export const toggleIsFollowing = (isFetching, id) => ({ type: TOGGLE_IS_FOLLOWING, isFetching, id })


export default usersReducer;