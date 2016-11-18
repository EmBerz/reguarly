
import jsdom from 'jsdom'
import React from 'react';
import { mount } from 'enzyme';
import Button from '../src/components/button.js'
import sinon from 'sinon';

let expect = require('chai').expect

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

describe('the button component', () => {
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
