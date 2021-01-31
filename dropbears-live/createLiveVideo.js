require('dotenv').config()

const { Facebook } = require('fb');

const FB_PAGE_ID = process.env.FB_PAGE_ID || 'me';
const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

// capitalized FB for ease of working with documentation examples
const FB = new Facebook({ accessToken: FB_ACCESS_TOKEN });

const handleResponse = (response) => {
  if(response && response.error) {
      if(response.error.code === 'ETIMEDOUT') {
          console.log('request timeout');
      }
      else {
          console.log('error', response.error);
      }
  }
  else {
      console.log(response);
  }
}

const createLiveVideo = () => {
  return FB.api(
    `/${FB_PAGE_ID}/live_videos`,
    'POST',
    {
      description: 'Testing',
      title: 'Dropbears Live',
    },
    handleResponse
  );
}

createLiveVideo();
