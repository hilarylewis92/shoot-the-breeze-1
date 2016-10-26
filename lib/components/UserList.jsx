import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { uniqBy, sortedUniqBy, map } from 'lodash';

export default class UserList extends Component {

  get displayUsers() {
    let users = this.props.messages.map(message => {
      return {
        userName: message.user.displayName,
        id: message.user.uid,
        email: message.user.email
      };
    });
    var findUser = uniqBy(users, 'id');
    return sortedUniqBy(findUser, 'userName');
  }

  render() {
    const{userFilter} = this.props;

    return (
      <div id="user-list">
        <h3>Users</h3>
        <ul>
          {this.displayUsers.map(user => {
            return <li
              key= {user.createdAt}
              value={user.userName}
              onClick={()=>userFilter(user)}>
              {user.userName} ({user.email})
            </li>
          })}
        </ul>
      </div>
    )
  }
}
