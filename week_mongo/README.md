## Mongo DB

### Introduction to MongoDB

MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON (Binary JSON). It's designed for scalability and performance, making it suitable for various types of applications.

### Setting up a MongoDB Database

To set up a MongoDB database, you need to:

- Install MongoDB on your system.
- Start the MongoDB server.
- Connect to the MongoDB server using a MongoDB client or a programming language like Node.js.

Example Node.js code to connect to a MongoDB database:

```js
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
```

### Understanding MongoDB Data Models

MongoDB uses collections to store data. Documents within a collection can have varying structures, unlike traditional relational databases.

### Querying MongoDB Collections

To query MongoDB collections, you can use the find method to retrieve documents that match specific criteria.

Example code to query MongoDB using Node.js:

```js
const Person = require("./models/person") // Assuming you have a "Person" model

Person.find({ age: { $gt: 25 } }, (err, people) => {
  if (err) throw err
  console.log(people)
})
```

### Introduction to Mongoose

Mongoose is an ODM (Object Data Modeling) library for MongoDB in Node.js. It provides a higher-level abstraction for interacting with MongoDB.

### Setting up Mongoose Models

Mongoose models define the structure of documents within a collection. They also provide methods for CRUD operations.

Example code to define a Mongoose model:

```js
const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const Person = mongoose.model("Person", personSchema)

module.exports = Person
```

### Querying MongoDB with Mongoose

Mongoose provides a query builder API for querying MongoDB collections. You can use it to retrieve documents that match specific criteria.

Example code to query MongoDB using Mongoose:

```js
const Person = require("./models/person") // Assuming you have a "Person" model

Person.find({ age: { $gt: 25 } }, (err, people) => {
  if (err) throw err
  console.log(people)
})
```

### Creating, Reading, Updating, and Deleting Data using Mongoose

Mongoose provides methods to perform CRUD operations on MongoDB collections.

Example code for CRUD operations using Mongoose:

```js
const Person = require("./models/person")

// Create a new person
const newPerson = new Person({ name: "Alice", age: 30 })
newPerson.save((err, person) => {
  if (err) throw err
  console.log("New person created:", person)
})

// Read data
Person.find({}, (err, people) => {
  if (err) throw err
  console.log("All people:", people)
})

// Update data
Person.findOneAndUpdate({ name: "Alice" }, { age: 31 }, (err, person) => {
  if (err) throw err
  console.log("Updated person:", person)
})

// Delete data
Person.deleteOne({ name: "Alice" }, (err) => {
  if (err) throw err
  console.log("Person deleted.")
})
```

Remember to install the required packages (mongoose in this case) using npm install mongoose. Also, adapt the code to your specific project structure and requirements
