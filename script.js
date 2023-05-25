// class User {
//   constructor(name, role) {
//     this.name = name;
//     this.role = role
//   }

//   wrongUser() {
//     if(!user1.name){
//       console.log('Wrong user name')
//     }
//     else if(!user1.role) {
//       console.log('Wrong user role')
//     }
// }

// getName() {
//   return user1.name
// }

// getRole() {
//   return user1.role
// }

// login() {
//   return console.log('User is logged in')
// }

// logout() {
//   return console.log('User is logged out')
// }

// сhangeName() {
//   let newName = prompt('Enter new name');
//   return console.log(`New name is ${newName}`)
// }

// changePassword() {
//   let newPassword = prompt('Enter new password');
//   return console.log(`New password is ${newPassword}`)
// }

// }

// class Admin extends User {
//   constructor(name, role) {
//     super();
//     this.name = name;
//     this.role = role
//   }
//   wrongUser() {
//     if(!user1.name){
//       console.log('Wrong user name')
//     }
//     else if(!user1.role) {
//     console.log('Wrong user role')
//   }
// }

// addUser() {
//   let user4 = new Admin;
//   user4.name = prompt('Add new user name');
//   user4.role = 'admin';
//   return console.log(`New user is ${user4.name} ${user4.role}`)
// }

// removeUser() {
//   user3 = null;
// }

// changeUserRole() {
//   user2.role = 'admin';
// }

// getAllUsers() {
//   return console.log(`All users are ${admin1} ${user1} ${user2} ${user3}`);
// }

// removeAllUsers() {
// }

// }

// let admin1 = new Admin('John', 'admin');
// let user1 = new User('Jane', 'user');
// let user2 = new User('Bob', 'user');
// let user3 = new User('Mark', 'user');

// user1.getName()
// user1.getRole()
// user1.login()
// user1.logout()
// user1.сhangeName()
// user1.changePassword()

// user2.getName()
// user2.getRole()
// user2.login()
// user2.logout()

// user3.getName()
// user3.getRole()
// user3.login()
// user3.logout()

// admin1.addUser()
// admin1.removeUser()
// admin1.changeUserRole()
// admin1.getAllUsers()



const time = document.getElementsByClassName('time')[0];
const dateTime = document.getElementsByClassName('date')[0];
const del = document.getElementsByClassName('delete')[0];
let clock = document.getElementsByClassName('clock-item')[0];
let addButton = document.getElementById('add');
let timeZone = document.getElementById('timeZone');
let worldClock;

function createClock(obj) {
  worldClock = new WorldClock(timeZone.value);
}

function getDate() {
  clock.innerHTML = worldClock.getCurrentDate()
}

function getTime() {
  clock.innerHTML = worldClock.getCurrentDateTime()
}

addButton.addEventListener('click', createClock);
dateTime.addEventListener('click', getDate);
time.addEventListener('click', getTime);


class  WorldClock {
  constructor(timeZone) {
    this.timeZone = timeZone;
  }


  getCurrentDateTime() {
    return new Date().toLocaleTimeString();
    
}


getCurrentDate() {
    return new Date().toLocaleString()
}

deleteClock() {}

}