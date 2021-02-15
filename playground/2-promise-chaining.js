require('../src/db/mongoose')
const Task = require('../src/models/task')

// 60268ee1d7b9bcc5ceb3161c

Task.findByIdAndDelete('60268ee1d7b9bcc5ceb3161c').then((task) => {
  console.log(task)
  return Task.countDocuments({ completed: false })
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})