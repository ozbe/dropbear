import React from 'react';
import Replies from './Replies';
import COMMENTS from '../data/comments';

const Comment = ({ comment: { user, comment, replies, image } }) => (
  <div className='comment'>
    <img src={image} alt='profile' className='profile'></img>
    <h3 className="user">{user}</h3>
    <p>{comment}</p>
    <Replies replies={replies} />
  </div>
);

const Comments = () => (
  <div>
    <h2>Comments</h2>
    <div>
      {
        COMMENTS.map(COMMENT => (
          <Comment key={COMMENT.id} comment={COMMENT} />
        ))
      }
    </div>
  </div>
);

export default Comments;