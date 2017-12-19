const express = require('express');
// Cross Origin Resource Sharing.
// if www.lideo.com => www.google.com ( if google does not have cors, then req will fail)
const cors = require('cors');
// research this, it secures shit
const helmet = require('helmet');
// sessions in cookies
const cookieSession = require('cookie-session');
// body-parser;
const bodyParser = require('body-parser');
// file system database;
const fs = require('fs');

const app = express();

const dotpath = require('dotpath');

// let storedState = fs.readFile(__dirname + "./database.json");
// console.log('state', storedState);
// let state = JSON.parse(storedState);
let state = new dotpath({});


app.use(cookieSession({
  name: 'session',
  keys: ["__change_this_and_never_commit_real_one_publically_on_git__"],

  // Cookie Options
  maxAge: 2 * 24 * 60 * 60 * 1000 // 2 days
}));

app.use(bodyParser());

app.use(cors());
app.use(helmet());


app.get('/', (req, res) => res.status(200).send(state.get()));
app.get('/:key', (req,res)=> res.status(200).send(state.get(req.params.key)));
app.post('/', (req, res) => {
  state = req.body;
  res.status(200).send(state.get());
});
// ajax.get('/blog.post/askdalsdkaskdajsdk')
app.get('/:key/:value', (req, res) => {
  // state[req.params.key] = req.params.value;
  state.set(req.params.key, req.params.value);
  res.status(200).send(state.get());
});



app.listen(8081, () => console.log('Example app listening on port 8081!'));
