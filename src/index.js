const express = require('express')
const bcrypt = require('bcrypt')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
  const token = jwt.sign({ _id: 'abc123' }, 'testSignature', { expiresIn: '2 days'})
  console.log(token)

  const data = jwt.verify(token, 'testSignature')
  console.log(data)
}

myFunction()