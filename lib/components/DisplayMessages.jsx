import React, { Component } from 'react';
import { map } from 'lodash';

const DisplayMessages = ({messages}) => {

    return(
      <ul className='message-field'>
      {messages.map(message => {
        return (
          <li className='single-message' key={message.key}>
          <span className = 'timestamp'>{message.createdAt}</span>
          <span className = 'username'>{message.user.displayName}</span>
          <br/>
          <span className= 'message-content'>{message.content}</span>
          </li>
          );
        })
      }
      </ul>
    );
  }

module.exports = DisplayMessages;
