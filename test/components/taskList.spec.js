require('../test.main.js')
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai'
import tasks from '../fixtures/tasks.js'
import Frequency from '../../src/models/frequency.js'
import ListItem from '../../src/components/listItem.js'
import TaskList from '../../src/components/taskList.js'

describe('the taskList component', () => {
  let taskList, callback;
  beforeEach(() => {
    callback = sinon.spy()
    let props = {
      tasks
    }
    taskList = mount(<TaskList {...props}/>)

  })
  it('is not undefined', () => {
    expect(taskList).to.not.equal(undefined)
  });
  it('contains a list item for each task', () =>{
    expect(taskList.find('li').length).to.equal(tasks.length)
  })
  describe('a new task', () => {
    let newTask;
    beforeEach(() => {
      taskList.instance().addTask();
      newTask = taskList.state().tasks[taskList.state().tasks.length-1]
    })
    it('is blank when it is added', () => {
      expect(newTask.title).to.equal(undefined)
      expect(newTask.description).to.equal(undefined)

    })
    it('is not saved', () => {
      expect(newTask.saved).to.equal(false)
    })
  })
  describe('saving a task', () => {
    let task;
    beforeEach(()=>{
      task =   {
          title: 'yoddle',
          frequency: {  amount: 3, unit: 'day' },
          description: 'yodelaehooo! best kind of song'
        };
      taskList.instance().saveNewTask(task);

    })
    it('adds the task to the list', () => {
      expect(taskList.text()).to.contain(task.title)
      expect(taskList.text()).to.contain(task.description)
    })
    xit('displays the frequency in its readable format', () => {
      let freqStr = new Frequency(...task.frequency)
      expect(taskList.text()).to.contain(freqStr.perString())
    })
  })

})
