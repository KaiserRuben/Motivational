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

const user = {
  id: "47dzw6d",
  name: "hallifax",
  email: "test@example.com",
  password: "FDDHCDKJADKJAHSKJHSAX",
  profileImg: "img/profilepic_hallifax.jpg"
}

app.get('/user', function (req, res) {
  res.send("Got a GET request at /user")
})

app.get('/user/:id', function (req, res) {
  res.send(`Got id at /user/:id :: id = ${req.params.id}`)
})

app.post('/user', function (req, res) {
  res.send('Got a POST request at /user')
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})
