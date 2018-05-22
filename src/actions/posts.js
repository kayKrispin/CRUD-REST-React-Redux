import { POSTS_FETCHED,REQUEST_SEND,REQUEST_ERROR,POST_SELECTED,POST_SEND,POST_UPDATE } from '../constans/actions';
import posts from '../api/posts';
import { update } from '../api/posts';
import { create } from '../api/posts';

 const postSelected = postSelected =>({
  type:POST_SELECTED,
  postSelected
})

const postsFetched = posts =>({
  type:POSTS_FETCHED,
  posts
});

const requestSend = () =>({
  type:REQUEST_SEND
});

const requestErrors = (err) =>({
  type:REQUEST_ERROR,
  err
});

const postUpdate = (post) =>({
  type:POST_UPDATE,
  post
})
const postSend = (post) =>({
  type:POST_SEND,
  post
})


export const postChosen = (post) => dispatch =>{
  dispatch(postSelected(post));
}

export const fetchPosts = (id) => dispatch => {
 dispatch(requestSend);
   return posts(id)
     .then(posts =>{dispatch(postsFetched(posts))
     })
     .catch(err=>{dispatch(requestErrors(err)
  )});
}

export const send = (post ) => dispatch => {
console.log(post.id)
  if(post.userId   ){
    dispatch(requestSend);
      return update(post)
        .then(post =>{dispatch(postUpdate(post))
        })
        .catch(err=>{dispatch(requestErrors(err)
     )});
  }else{
      dispatch(requestSend);
      return create(post)
      .then(newPost=>{dispatch(postSend(newPost))

    });
  }

}
