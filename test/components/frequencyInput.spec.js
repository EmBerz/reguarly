
require('../test.main.js')
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai'
import FrequencyInput from '../../src/components/frequencyInput.js'

describe('the FrequencyInput component', () => {
  let fi, callback;
  beforeEach(() => {
    callback = sinon.spy()
    let props = {
      frequency: { amount : 2 },
      updateFrequency: callback
    }
    fi = mount(<FrequencyInput { ...props }/>)

  })
  it('is not undefined', () => {
    expect(fi).to.not.equal(undefined)
  });

  it('contains the frequency elements', () => {
    expect(fi.find('input').length).to.equal(1)
    expect(fi.find('select').length).to.equal(1)
  });
})
