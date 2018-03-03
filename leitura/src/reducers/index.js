import { combineReducers } from 'redux'

import {
  GET_CATEGORIES,
  ADD_POST,
  GET_ALL_POSTS,
  GET_DETAIL_POST,
  VOTE_POST,
  DELETE_POST,
  GET_COMMENT_POST,
  EDIT_POST
} from '../actions'


function posts(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        action.post
      ]
    case GET_ALL_POSTS:
      return action.posts
    
    case GET_DETAIL_POST:
      return state.map(
        (post) => post.id === action.detailPost.id ? action.detailPost : post )

    case VOTE_POST:
      return state.map(
        (post) => post.id === action.post.id ? action.post : post )
    
    case EDIT_POST:
      return state.map(
        (post) => post.id === action.editedPost.id ? action.editedPost : post )
        
    case DELETE_POST:
      return state.filter(
        (post) => post.id !== action.post.id
        )
    
    

    default:
      return state
  }
}


function categories(state = [], action) {

  switch (action.type) {

    case GET_CATEGORIES:
      return [{name: 'all', path:'all'}].concat(action.categories.categories)

    default:
      return state
  }
}

function comments(state = [], action) {

  switch (action.type) {

    case GET_COMMENT_POST:
      return {
        ...state,
        [action.postId]: action.comments
      }

    default:
      return state
  }
}


export default combineReducers({
  categories,
  posts,
  comments
})