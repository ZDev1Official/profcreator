const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/profile', (req, res) => {
  const info = {
    fullname: req.body.fullname,
    username: req.body.username,
    bio: req.body.bio,
    email: req.body.email,
    website: req.body.website,
    imageurl: req.body.imageurl,
  };
  res.render('profile', { info: info });
});

app.listen(3000, () => {
  console.log('Connected!');
});