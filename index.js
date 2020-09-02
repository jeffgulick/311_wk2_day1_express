
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000

const { users } = require('./state');//saves to users variable
let counter = users.length;
app.use(bodyParser.json());//need to post new users?

/* BEGIN - create routes here */
app.get('/users',(req, res) => {
  res.json(users);
})

//any user
app.get('/users/:id', (req, res) => {
  res.json(users.filter(user => user._id == (req.params.id)));
});

//post new user
app.post('/users', (req, res) => {
  let newUser = req.body;
  newUser._id = counter + 1;
  users.push(newUser);
  res.json(users);
  counter++;
})

//put
app.put('/users/:id', (req, res) => {
  users.forEach(user => {
    if(user._id == (req.params.id)){
      user.name = req.body.name;
      user.occupation = req.body.occupation;
      user.avatar = req.body.avatar;
      res.json(user)
    }
  })
})

//delete
app.delete('/users/:id', (req, res) => {

  users.forEach(user => {
    if(user._id == (req.params.id)){
      user.isActive = false;
      // res.json(user);
      res.send(`User ${user._id} has been removed`);
    }
  })
})
/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))