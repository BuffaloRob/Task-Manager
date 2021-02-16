require('../src/db/mongoose')
const Task = require('../src/models/task')

// 60268ee1d7b9bcc5ceb3161c

// Task.findByIdAndDelete('602ac9767df326ea0250e940').then((task) => {
//   console.log(task)
//   return Task.countDocuments({ completed: false })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const deleteTaskandCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskandCount('602ac8e509a16ae5e72d6323').then(count => {
  console.log(count)
}).catch(error => console.log(error))