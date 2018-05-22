import React, { Component } from 'react';
import UserItem from './components/user-item';
import UserList from './components/user-list';


class UserPage extends Component {

  render() {
    return (
      <div>
        <UserList />
      </div>
    );
  }
}

export default UserPage;
