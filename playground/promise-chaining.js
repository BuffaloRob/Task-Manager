require('../src/db/mongoose')
const User = require('../src/models/user')


// 6026ce6892e94d7be6b151d9

User.findByIdAndUpdate('60269a65c2cb81eab2578b9b', { age: 1 }).then((user) => {
  console.log(user)
  return User.countDocuments({ age: 1 })
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})