import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');

import LoggedInStatus from '../lib/components/LoggedInStatus';

describe('LoginStatus', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<LoggedInStatus />)
    assert.equal(wrapper.type(), 'div');
  });

    it('renders one button at a time', () => {
    const wrapper = shallow(<LoggedInStatus />)
    const button = wrapper.find('button');
    expect(button.length).to.equal(1);
  });
});
