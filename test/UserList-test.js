import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');

import UserList from '../lib/components/UserList';

describe('UserList', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<UserList />)
    assert.equal(wrapper.type(), 'div');
  });
});
