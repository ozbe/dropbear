import React from 'react';

const Reply = ({ reply: { user, comment, image }}) => (
  <div className='reply'>
    <img src={image} alt='profile' className='profile'></img>
    <h5 className="user">{user}</h5>
    <p>{comment}</p>
  </div>
);

const Replies = ({ replies = [] }) => { 
  return (
    <div className='replies'>
      {
        replies.map(reply => (
          <Reply key={reply.id} reply={reply} />
        ))
      }
    </div>
  )
}

export default Replies;