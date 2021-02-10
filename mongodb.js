// CRUD actions

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database')
  }

  const db = client.db(databaseName)

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