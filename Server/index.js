/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<b>Hello World</b>\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
const port = 3000

const express = require('express')
const app = express()

const users = [
  {
    id: "47dzw6d",
    name: "hallifax",
    email: "test@example.com",
    password: "FDDHCDKJADKJAHSKJHSAX",
    profileImg: "img/profilepic_hallifax.jpg"
  },
  {
    id: "ewgweg",
    name: "hallifax",
    email: "test@example.com",
    password: "FDDHCDKJADKJAHSKJHSAX",
    profileImg: "img/profilepic_hallifax.jpg"
  },
  {
    id: "47dewhewgzw6d",
    name: "testuser",
    email: "test@example.com",
    password: "FDDHCDKJADKJAHSKJHSAX",
    profileImg: "img/profilepic_hallifax.jpg"
  }
];

app.get('/user', function (req, res) {
  res.json(users.map( ({ id, name, email, profileImg }) => {
    return {
      id,
      name,
      email,
      profileImg
    }
  }));
})

app.get('/user/:id', (req, res) => {

  const userId = req.params.id;
  const foundUser = users.find(user => user.id === userId);

  if (foundUser) {
    res.json({
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      profileImg: foundUser.profileImg
    });
  } else {
    res.send(404);
  }

});

app.post('/user', function (req, res) {
  res.send('Got a POST request at /user')
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user/:id', function (req, res) {

  const userId = req.params.id;
  const foundIndex = users.findIndex(user => user.id === userId);

  if (foundIndex > -1) {
    users.splice(foundIndex, 1);
    res.send('User was deleted!');
  } else {
    res.send('User not found / could not be deleted');
  }

})


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})
