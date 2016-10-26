import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');

import FilterMessages from '../lib/components/FilterMessages';

describe('FilterMessages', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<FilterMessages />)
    assert.equal(wrapper.type(), 'div');
  });

  it('renders two buttons', () => {
  const wrapper = shallow(<FilterMessages />)
  const buttons = wrapper.find('button');
  expect(buttons.length).to.equal(2);
});

});
