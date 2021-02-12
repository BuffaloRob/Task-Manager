const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    },
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('That age doesnt make sense')
      }
    }
  },
})

const me = new User({
  name: 'Tom',
  email: 'mike@'
  // age: 33
})

me.save().then(() => {
  console.log(me)
}).catch((error) => {
  console.log(`Error: ${error}`)
})

// const Task = mongoose.model('Task', {
//   description: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   }
// })

// const milk = new Task({
//   description: 'get milk',
//   completed: false
// })

// milk.save().then(() => {
//   console.log(milk)
// }).catch((error) => {
//   console.log(error)
// })