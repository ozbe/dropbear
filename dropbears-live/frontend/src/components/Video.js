import React from 'react';

const Video = ({ src }) => {
  return (
    <iframe 
      className='video'
      src={src}
      width='500'
      height='281'
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling='no'
      frameBorder='0'
      allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
      allowFullScreen={true}
    ></iframe>
  )
};

export default Video;