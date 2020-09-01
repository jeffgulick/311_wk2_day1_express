
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')

/* BEGIN - create routes here */
app.get('/users',(req, res) => {
  res.json(users);
})

app.get('/users/:id', (req, res) => {
  res.json(users.filter(user => user._id == (req.params.id)))
});

app.post('/users', (req, res) => )

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))