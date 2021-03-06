import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';
import { pick, map, extend, filter } from 'lodash';
import moment from 'moment';

const DisplayMessages = require('./DisplayMessages');
import FilterMessages from './FilterMessages';
import InputForm from './InputForm';
const LoggedInStatus = require('./LoggedInStatus');
import UserList from './UserList';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
      user: null,
      filteredMessages: [],
      filterString: ''
    };
  }

  componentDidMount() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  addNewMessage() {
    const { user, draftMessage } = this.state;
    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: moment().format('MMMM Do, h:mm a')
    });
    this.setState({ draftMessage: '' });
  }

  updateMessageState (e){
    this.setState({ draftMessage: e.target.value});
  }

  UpdateFilteredState(filterString){
    this.setState(
      {filteredMessages: filter(this.state.messages, (message) => {
          return message.content.toLowerCase().includes(filterString.toLowerCase());
      }),
    filterString: filterString});
  }

  UserFilter(user){
    this.state.filterString = 1;
    this.setState(
      {filteredMessages: filter(this.state.messages, (message) => {
        return message.user.email.includes(user.email);
      }),
    });
  }

  toggleShownMessage(){
    if(this.state.filterString){
      return this.state.filteredMessages;
    }else{
      return this.state.messages;
      }
  }

  sortMessages() {
    let array = this.state.messages;
    let reversed = array.reverse();
    this.setState({messages: reversed});
  }

  render() {
    const { user, messages, draftMessage, filteredMessages} = this.state;
    const toggleShownMessage = this.toggleShownMessage();

    return (
      <section className="Application">
        <div className="FilterMessages">
          <FilterMessages
            onFilterChange={this.UpdateFilteredState.bind(this)}
            sortMessages={this.sortMessages.bind(this)}
          />
        </div>

        <div className="main">
          <DisplayMessages
            messages= {toggleShownMessage}
          />

          <UserList
            messages={messages}
            userFilter={this.UserFilter.bind(this)}
          />
        </div>

        <div className="Log-in-Status">
          <LoggedInStatus
            user = {user}
          />
        </div>

        <div className="InputForm">
          <InputForm
            draftedMessage={draftMessage}
            onDraftedMessageChange={this.updateMessageState.bind(this)}
            onMessageSubmit={() => this.addNewMessage()}
            clearField = {()=> {this.setState({draftMessage: ''})}}
          />
        </div>
      </section>
    )
  }
}
