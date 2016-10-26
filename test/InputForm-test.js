import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');

import InputForm from '../lib/components/InputForm';


describe('InputForm', () => {
  let draftedMessage = "hello"
  it('renders as a <div>', () => {
    const wrapper = shallow(<InputForm draftedMessage = {draftedMessage}/>)
    assert.equal(wrapper.type(), 'div');
  });

});
