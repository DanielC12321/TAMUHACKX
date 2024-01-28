const axios = require('axios')

const response = axios.get('https://api.search.brave.com/res/v1/web/search', {
  params: {
    'q': 'Shawn Chin Texas A&M Linked In'
  },
  headers: {
    'Accept': 'application/json',
    'Accept-Encoding': 'gzip',
    'X-Subscription-Token': 'BSAlCBDXr5PwulB9XwmMvBR4pB9KDDP'
  }
}).then(response => {
  // Handle response
  
  for(let i = 0; i < response.data.web.results.length; i++) {
    let obj = response.data.web.results[i];

    console.log(obj.url);
}
  //(response.data.web).forEach(ind=>console.log(ind.url));
});