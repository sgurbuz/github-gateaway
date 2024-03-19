var axios = require('axios');
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/local', function (req, res) {
  const GITHUB_AUTH_ACCESSTOKEN_URL = 'https://github.com/login/oauth/access_token'
  const CLIENT_ID = '2a50424a9171bc95afe6'
  const CLIENT_SECRET = 'ee88b9160f689c71ee27a6877591893083179498'
  const CODE = req.query.code

  console.log('REQ CODE', CODE, 'v1.2');
  axios({
    method: 'post',
    url: GITHUB_AUTH_ACCESSTOKEN_URL,
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: CODE
    },
    headers: {Accept: 'application/json'},
  })
  .then(function (response) {
    console.log('Success ', response, response.access_token, response.data);
  	res.status(200).json(response.data);
  })
  .catch(function (error) {
    console.error('Error ' + error.message)
  })
});

app.get('/live', function (req, res) {
    const GITHUB_AUTH_ACCESSTOKEN_URL = 'https://github.com/login/oauth/access_token'
    const CLIENT_ID = 'fad5e83df80e912075b2'
    const CLIENT_SECRET = '2473447dfa2ae38d1d6bb7c5027b6f7a6908df4a'
    const CODE = req.query.code
  
    console.log('REQ CODE', CODE, 'v1.2');
    axios({
      method: 'post',
      url: GITHUB_AUTH_ACCESSTOKEN_URL,
      data: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: CODE
      },
      headers: {Accept: 'application/json'},
    })
    .then(function (response) {
      console.log('Success ', response, response.access_token, response.data);
        res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error('Error ' + error.message)
    })
  });

app.get('/', function(req, res) {
    res.send('Welcome to Github Api Getaway')

});

app.listen(4500, function () {
  console.log('getaway listening on port 4500!');
});