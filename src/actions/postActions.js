import { FETCH_POSTS,CREATE_POST } from './types';

//分发操作
export const fetchPost = () => dispatch => {
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })  
    )
}


export const createPost = (post) => dispatch => {
  fetch("http://jsonplaceholder.typicode.com/posts",{
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch({
        type: CREATE_POST,
        payload: data
      })
    })
}
