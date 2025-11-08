const users = [
  { id: 1, username: 'john_doe' },
  { id: 2, username: 'jane_smith' },
  { id: 3, username: 'alice' }
];

function getUserDataPromise(userId) {
  const user= users.find(usr =>usr.id === userId)
      if (user) {
      resolve(user);   
    } else {
      reject("Not found"); 
    }
  
}

getUserDataPromise(2)
  .then((user) => {
    console.log('Promise Result:', user);
    // Output: Promise Result: { id: 2, username: 'jane_smith' }
  })
  .catch((error) => {
    console.error(error);
  });