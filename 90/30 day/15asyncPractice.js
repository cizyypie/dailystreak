const users = [
  { id: 1, username: 'john_doe' },
  { id: 2, username: 'jane_smith' },
  { id: 3, username: 'alice' }
];

// Implementasi Callback
function getUserDataCallback(userId, callback) {
  fetch(users.id)
  .then(response => {
    if(!response.ok){
        throw new Error ("ERROR ! fail to get data")
    }
    return response.json
  }).then(response => {
    if (!response.ok) {
        throw new Error('network response was no ok');
    }
    return
     response.json();
  })
  .then(users => {
    const dataUser = {
        id: users.id,
        username: users.username
    }; 
    callback(dataUser);
  })
  .catch(error =>{
    callbackError(error)
  })
 
}

// Implementasi Promise
function getUserDataPromise(userId) {
  //code
}

// Implementasi Async/Await
async function getUserDataAsync(userId) {
  //code
}

// Test Case Callback
getUserDataCallback(1, (user) => {
  console.log('Callback Result:', user);
  // Output: Callback Result: { id: 1, username: 'john_doe' }
});

// Test Case Promise
getUserDataPromise(2)
  .then((user) => {
    console.log('Promise Result:', user);
    // Output: Promise Result: { id: 2, username: 'jane_smith' }
  })
  .catch((error) => {
    console.error(error);
  });

// Test Case Async/Await
(async () => {
  const user = await getUserDataAsync(3);
  console.log('Async/Await Result:', user);
  // Output: Async/Await Result: { id: 3, username: 'alice' }
})();