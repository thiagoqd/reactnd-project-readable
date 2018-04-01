import { combineReducers } from 'redux'

import {
  GET_CATEGORIES,
  ADD_POST,
  GET_ALL_POSTS,
  GET_DETAIL_POST,
  VOTE_POST,
  DELETE_POST,
  GET_COMMENT_POST,
  EDIT_POST,
  VOTE_COMMENT,
  DELETE_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
  SORT_TYPE
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
      return state === null ? action.post : state.map(
        (post) => post.id === action.post.id ? action.post : post )

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

function sortType(state = [], action) {

  switch (action.type) {

    case SORT_TYPE:
      return action.sortType

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

    case VOTE_COMMENT:
      return {
        ...state,
        [action.comment.parentId]: state[action.comment.parentId].map((comment) => comment.id === action.comment.id
        ? action.comment
        : comment)
      }

      case ADD_COMMENT:
        return {
          ...state,
          [action.comment.parentId]: [
              ...state[action.comment.parentId],
              action.comment
            ]
        }

      case EDIT_COMMENT:
        return {
          ...state,
          [action.editedComment.parentId]: 
            state[action.editedComment.parentId].map((comment)=> comment.id === action.editedComment.id
            ? {...comment,
              body: action.editedComment.body,
              timestamp: action.editedComment.timestamp}
            : comment
          )
          
        }
        
        

      case DELETE_COMMENT:
      return {
        ...state,
        [action.parentId]: state[action.parentId].filter((comment) => comment.id !== action.commentId)
      }
      
      

    default:
      return state
  }
}


export default combineReducers({
  categories,
  posts,
  comments,
  sortType
})