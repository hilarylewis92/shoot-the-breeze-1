import React, { Component } from 'react';
import firebase, { signIn, signOut } from '../firebase';

export default class LoggedInStatus extends Component {
  render(){
    const {user} = this.props;

    return (
      <div className="LoginStatus">
        {user ?
          <p>Logged in as
          <span className ='user-display'>{user.displayName}</span>
          ({user.email})
          <button className='LogOut-btn'
            onClick={()=>signOut()}>Log Out</button></p>
          :<button className='LogIn-btn'
            onClick={()=>signIn()}>Log In</button>
        }
      </div>
    );
  }
}
