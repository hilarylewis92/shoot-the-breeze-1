import React, { Component } from 'react';
import { map } from 'lodash';

export default class DisplayMessages extends Component {

  renderMessages(messages){
    return messages.map(message => {
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

  render(){
    const {messages} = this.props;

    return(
      <ul className='message-field'>
        {this.renderMessages(messages)}
      </ul>
    );
  }
}
