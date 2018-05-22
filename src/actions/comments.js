import { COMMENTS_FETCHED,REQUEST_SEND,REQUEST_ERROR } from '../constans/actions';
import comments from '../api/comments';

const commentsFetched = comments =>({
  type:COMMENTS_FETCHED,
  comments
});

const requestSend = () =>({
  type:REQUEST_SEND
});

const requestErrors = (err) =>({
  type:REQUEST_ERROR,
  err
});

export const fetchComments = (id) => dispatch => {

  dispatch(requestSend);

  return comments(id)
    .then(comments =>{dispatch(commentsFetched(comments))
    })
    .catch(err=>{dispatch(requestErrors(err)
    )});
}
