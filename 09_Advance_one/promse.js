const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptpgraphy, network

  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "pradeep@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Pradeep", password: "123" });
    } else {
      reject("ERROR Something went wrong");
    }
  }, 2000);
});

// chaining

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const respone = await promiseFive;
    console.log(respone);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const respone = await fetch('https://api.github.com/users/hiteshchaudhary');
//         // console.log(respone);
//         const data = await respone.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E: ',error)
//     }
// }
// getAllUsers()

fetch("https://api.github.com/users/hiteshchaudhary")
  .then((respone) => {
    return respone.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
