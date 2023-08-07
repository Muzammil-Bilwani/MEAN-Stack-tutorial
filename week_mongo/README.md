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

### Connecting to MongoDB Atlas

MongoDB Atlas is a cloud-based database service that provides a fully managed MongoDB deployment. It's a good option if you don't want to set up and manage your own MongoDB server.

### Setting up a MongoDB Atlas Cluster

To set up a MongoDB Atlas cluster, you need to:

- Create a MongoDB Atlas account.
- Create a new project.
- Create a new cluster.
- Connect to the cluster using a MongoDB client or a programming language like Node.js.

Example Node.js code to connect to a MongoDB Atlas cluster:

```js
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://<username>:<password>@<cluster-url>", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
```

### Schema Validation in Mongoose

Mongoose provides schema validation to ensure that documents conform to a specific structure before they're saved to the database.

Example code to define a Mongoose model with schema validation:

```js
const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 18,
    max: 65
  }
})

const Person = mongoose.model("Person", personSchema)

module.exports = Person
```

### Ref and Populate in Mongoose

Mongoose provides the ref option to reference documents in other collections. It also provides the populate method to populate referenced documents.

Example code to define a Mongoose model with ref and populate:

```js
const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [{ type: mongoose.Schema.Types.ObjectId, ref: "Food" }]
})

const foodSchema = new mongoose.Schema({
  name: String,
  calories: Number
})

const Person = mongoose.model("Person", personSchema)

const Food = mongoose.model("Food", foodSchema)

module.exports = { Person, Food }
```

### Mongoose Middleware

Mongoose provides middleware functions that run before or after certain operations. You can use them to perform additional tasks like validation or logging.

Example code to define a Mongoose model with middleware:

```js
const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
})

personSchema.pre("save", function (next) {
  console.log("Saving person...")
  next()
})

personSchema.post("save", function (doc, next) {
  console.log("Person saved.")
  next()
})

const Person = mongoose.model("Person", personSchema)

module.exports = Person
```

### Mongo Aggregation

MongoDB provides the aggregation pipeline to process data records and return computed results. It's useful for performing complex queries that can't be done with the find method.

Example code to use the aggregation pipeline:

```js
const Person = require("./models/person")

Person.aggregate([
  { $match: { age: { $gt: 25 } } },
  { $group: { _id: "$name", total: { $sum: "$age" } } }
])
```
