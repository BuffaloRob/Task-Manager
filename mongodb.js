// CRUD actions

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database')
  }

  const db = client.db(databaseName)

  const completeAllTasks = db.collection('tasks').updateMany({
    completed: false
  }, {
    $set: {
      completed: true
    }
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })

  // more test code 
  // const updatePromise = db.collection('users').updateOne({
  //   _id: new ObjectID("60252f5927fc532a7de8989f")
  // }, {
  //   $inc: {
  //     age: 1
  //   }
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // db.collection('tasks').findOne({ _id: new ObjectID("60232a92380fc3a8568fdda0")}, (error, task) => {
  //   if (error) {
  //     return console.log('thats not even a thing')
  //   }

  //   console.log(task)
  // })

  // db.collection('tasks').find({ completed: false }).toArray((error, task) => {
  //   console.log(task)
  // })


  // db.collection('users').findOne({ _id: new ObjectID("60231f6b778e1586cdcb58a5")}, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }

  //   console.log(user)
  // })

  // db.collection('users').find({ age: 37 }).toArray((error, users) => {
  //   console.log(users)
  // })

  // db.collection('users').find({ age: 37 }).count((error, count) => {
  //   console.log(count)
  // })


  // db.collection('users').insertOne({
  //   name: 'Jonsey',
  //   age: 39,
  // }, (error, results) => {
  //   if (error) {
  //     return console.log('unable to insert user')
  //   }

  //   console.log(results.ops)
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Jen',
  //     age: 28
  //   }, {
  //     name: 'Gunner',
  //     age: 22
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents')
  //   }
  //   return console.log(result.ops)
  // })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'walk dog',
  //     completed: false
  //   }, {
  //     description: 'buy milk',
  //     completed: true
  //   }, {
  //     description: 'fuck hoes',
  //     completed: false
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to make task')
  //   }

  //   return console.log(result.ops)
  // })

})