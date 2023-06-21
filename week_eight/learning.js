const fs = require("fs")

// // Learning Call backs
const printFunc = function () {
  console.log("I am writing by own without co pilot")
  setTimeout(printFunc, 1000)
}

setTimeout(printFunc, 1000)

// Learning Recursion

function printNumber(number) {
  console.log(number)

  if (number > 10) {
    return printNumber(number - 1)
  } else {
    return number
  }
}
printNumber(20)

// Learning Promises
const promise = new Promise((resolve, reject) => {
  if (1 > 2) {
    reject("Error")
  } else {
    resolve("Success")
  }
})

promise.then(
  (data) => console.log(data),
  (err) => {
    console.log(err)
  }
)
// Learning Async Await

const findUsers = new Promise((resolve, reject) => {
  resolve(["Ali", "Nasir"])
})

const updateUser = new Promise((resolve, reject) => {
  resolve("User Updated")
})

const runWithPromise = function () {
  findUsers.then((users) => {
    const user = users.find((user) => user === "Ali")
    updateUser.then((result) => {
      console.log(result)
    })
  })
}

const run = async function () {
  const users = await findUsers
  const user = users.find((user) => user === "Ali")
  const result = await updateUser
  console.log(result)
}

runWithPromise()
run()
