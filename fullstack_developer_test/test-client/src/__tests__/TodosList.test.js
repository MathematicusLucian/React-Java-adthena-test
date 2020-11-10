import React from 'react';
import { shallow, render, mount } from "enzyme";
import TodosList from './../components/tasktwo/TodosList';

describe('TodosList', () => {

  let wrapper;
  const todosStub = [
  {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
  },
  {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
  },
  {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
  },
  {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
  }];

  beforeEach(() => {
    const props = {};
    wrapper = shallow(<TodosList {...props} todos={todosStub}></ TodosList>);
  });

  it('should render correctly', () => {
    shallow(<TodosList todos={todosStub} />);
  });

  it('should render - shallow', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render (snapshot)', () => {
    const rendered = render(<div className="todoList" todos={todosStub} />)
    expect(rendered).toMatchSnapshot();
  });

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TodosList debug todos={todosStub} />)
    expect(component).toMatchSnapshot();
  });

  it('task class should exist', () => {;
    expect(wrapper.find(".todoList").length).toEqual(1);
  });

  it('task class should exist', () => {;
    expect(wrapper.find(".todoItem").length).toEqual(4);
  });

  it('task class should exist', () => {;
    expect(wrapper.find(".todoItem").first().text()).toBe("1: delectus aut autem");
  });

});