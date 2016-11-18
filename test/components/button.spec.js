
require('../test.main.js')
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai'

import Button from '../../src/components/button.js'

describe('the Button component', () => {
  let button, fakeClicker;
  beforeEach(() => {
    fakeClicker = sinon.spy();
    button = mount(<Button label="hello" handleClick={fakeClicker}/>)
  })
  it('is not undefined', () => {
    expect(button).to.not.equal(undefined)
  });
  it('has the label hello', () => {
    expect(button.text()).to.equal('hello')
  });
  it('calls the click handler on click', () => {
    button.simulate('click');
    expect(fakeClicker.called).to.equal(true)
  })

})

//
// describe('<Foo />', () => {
//   it('allows us to set props', () => {
//     const wrapper = mount(<Foo bar="baz" />);
//     expect(wrapper.props().bar).to.equal('baz');
//     wrapper.setProps({ bar: 'foo' });
//     expect(wrapper.props().bar).to.equal('foo');
//   });
