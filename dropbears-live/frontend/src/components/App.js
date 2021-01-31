import React from 'react';
import Video from './Video';
import Comments from './Comments';

const liveFeed = 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F1783520801890827%2Fvideos%2F835408790356522%2F&width=128';

const App = () => {
  return (
    <div>
      <Video src={liveFeed} />
      <Comments />
    </div>
  );
};

export default App;