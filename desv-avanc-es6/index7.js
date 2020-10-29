//EventEmitter permite criar novos eventos

import EventEmitter from 'events';

// const emitter = new EventEmitter();

// emitter.on('User Logged', (data) => {
//   console.log(data);
// });

// emitter.emit('User Logged', { user: 'Ricardo Castro' });

//####################################################

class Users extends EventEmitter {
  userLogged(data) {
    this.emit('User Logged', data);
  }
}

const users = new Users();

users.on('User Logged', (data) => {
  console.log(data);
});

users.userLogged({ user: 'Ricardo' });
