const mongoose = require('mongoose')
const validator = require('validator')

// const me = new User({
//   name: 'Rob',
//   email: 'Rob@test.com',
//   password: 'tr'
//   // age: 33
// })

// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log(`Error: ${error}`)
// })

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

const task = new Task({
  description: 'get eggs',
  // completed: false
})

task.save().then(() => {
  console.log(task)
}).catch((error) => {
  console.log(error)
})