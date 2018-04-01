import {api, headers, showError} from '../utils/api.js'
var axios = require('axios');

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const ADD_POST = 'ADD_POST'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_DETAIL_POST = 'GET_DETAIL_POST'
export const VOTE_POST = 'VOTE_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_COMMENT_POST = 'GET_COMMENT_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const SORT_TYPE = 'SORT_TYPE'



const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    categories
  }
}
export const loadCategories = () => {
  return dispatch => {
    fetch(`${ api }categories`, {headers})
      .then(res => {
        if (!res.ok) {
          throw res
        } else  return res.json()
      })
    .then(categories => dispatch(getCategories(categories)))
    .catch( error => showError(error));
  }
}



const addPost = (post) => {
  return {
    type: ADD_POST,
    post
  }
}
export const sendPost = (post) => {
  return dispatch => {
  fetch(`${api}posts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
      commentCount: post.commentCount
     }),
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(post => dispatch(addPost(post)))
  .catch( error => showError(error));
  }
}




const getAllPosts = (posts) => {
  return {
    type: GET_ALL_POSTS,
    posts
  }
}
export const loadAllPosts = () => {
  return dispatch => {
    fetch(`${ api }posts`, {headers})
      .then(res => {
        if (!res.ok) {
          throw res
        } else  return res.json()
      })
    .then(posts2 => dispatch(getAllPosts(posts2)))
    .catch( error => showError(error));
  }
}




const votePost = (post) => {
  return {
    type: VOTE_POST,
    post
  }
}
export const sendVotePost = (postId, option) => {
  return dispatch => {
  fetch(`${api}posts/${postId}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      option: option
     }),
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(post => dispatch(votePost(post)))
  .catch( error => showError(error));
  }
}




const deletePost = (post) => {
  return {
    type: DELETE_POST,
    post
  }
}
export const sendDeletePost = (postId) => {
  return dispatch => {
  fetch(`${api}posts/${postId}`, {
    method: 'DELETE',
    headers: headers,
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(post => dispatch(deletePost(post)))
  .catch( error => showError(error));
  }
}




const getDetailPost = (post) => {
  return {
    type: GET_DETAIL_POST,
    post
  }
}
export const loadDetailPost = (postId) => {
  return dispatch => {
    fetch(`${ api }posts/${postId}`, {headers})
      .then(res => {
        if (!res.ok) {
          throw res
        } else { 
          return res.json()
        }
      })
    .then(post => {
        dispatch(getDetailPost(post))
      })
    .catch( error => showError(error));
  }
}




const editPost = (editedPost) => {
  return {
    type: EDIT_POST,
    editedPost
  }
}
export const putEditPost = (postId, post) => {
  return dispatch => {
    fetch(`${ api }posts/${postId}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({
        title: post.title,
        body: post.body
       })
    })
      .then(res => {
        if (!res.ok) {
          throw res
        } else  return res.json()
      })
    .then(post => dispatch(editPost(post)))
    .catch( error => showError(error));
  }
}






const getCommentPost = (postId, comments) => {
  console.log("get comments: ", comments)
  return {
    type: GET_COMMENT_POST,
    postId, 
    comments
  }
}
export const loadCommentPost = (postId) => {
  console.log("get comments post: ", postId)
  return dispatch => {
  fetch(`${api}posts/${postId}/comments`, {
    method: 'GET',
    headers: headers,
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(comments => dispatch(getCommentPost(postId, comments)))
  .catch( error => showError(error));
  }
}






const voteComment = (comment) => {
  return {
    type: VOTE_COMMENT,
    comment
  }
}
export const sendVoteComment = (commentId, option) => {
  return dispatch => {
  fetch(`${api}comments/${commentId}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      option: option
     }),
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(comment => dispatch(voteComment(comment)))
  .catch( error => showError(error));
  }
}








const deleteComment = (commentId, parentId) => {
  return {
    type: DELETE_COMMENT,
    commentId,
    parentId
  }
}
export const sendDeleteComment = (comment) => {
  return dispatch => {
  fetch(`${api}comments/${comment.id}`, {
    method: 'DELETE',
    headers: headers,
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(() => dispatch(deleteComment(comment.id, comment.parentId )))
  .then(() => dispatch(loadDetailPost(comment.parentId )))
  .catch( error => showError(error));
  }
}






const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  }
}
export const sendComment = (comment) => {
  return dispatch => {
  fetch(`${api}comments`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      id: comment.id,
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId,
     }),
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(comment => dispatch(addComment(comment)))
  .then(() => dispatch(loadDetailPost(comment.parentId )))
  .catch( error => showError(error));
  }
}







const editComment = (editedComment) => {
  return {
    type: EDIT_COMMENT,
    editedComment
  }
}
export const putEditComment = (comment) => {
  return dispatch => {
    fetch(`${ api }comments/${comment.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({
        timestamp: comment.timestamp,
        body: comment.body
       })
    })
      .then(res => {
        if (!res.ok) {
          throw res
        } else  return res.json()
      })
    .then(comment => dispatch(editComment(comment)))
    .catch( error => showError(error));
  }
}

export const sortPost = (sortType) => {
  return {
    type: SORT_TYPE,
    sortType
  }
}
