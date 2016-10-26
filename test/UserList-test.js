import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');

import UserList from '../lib/components/UserList';

describe('UserList', () => {
  let message1 = {key:"1", createdAt: "October 26th, 8:39 am", content: "hello", user: {displayName: "christine", email: "christine.c.gamble@gmail.com", uid: "slkdjfdisufslkj"}}
  let message2 = {key:"2", createdAt: "October 27th, 9:01 am", content: "hey", user: {displayName: "hilary", email: "hilarylewis@gmail.com", uid: "eiwuriwuow"}}
  let messages = [message1, message2]
  it('renders as a <div>', () => {
    const wrapper = shallow(<UserList messages = {messages}/>)
    assert.equal(wrapper.type(), 'div');
  });
});
