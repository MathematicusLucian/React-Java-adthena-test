import React from 'react';
import { shallow, render, mount } from "enzyme";
import TaskTwo from './../components/tasktwo/TaskTwo';

describe('TaskTwo', () => {

  let wrapper;
  beforeEach(() => {
    const props = { changeRoute: jest.fn() };
    wrapper = shallow(<TaskTwo {...props}></ TaskTwo>);
  });

  it('should render correctly', () => {
    shallow(<TaskTwo />);
  });

  it('should render - shallow', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render (snapshot)', () => {
    const rendered = render(<div className="task"/>)
    expect(rendered).toMatchSnapshot();
  });

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TaskTwo debug />)
    expect(component).toMatchSnapshot();
  });

  it('task class should exist', () => {;
    expect(wrapper.find(".task").length).toEqual(1);
  });

  it('should render an input tag', () => {
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('should render an input tag - 2', () => {
    expect(wrapper.find("input").length).toEqual(1);
  });

  it('the default value for the input field should be empty', () => {
    expect(wrapper.find('input').prop('value')).toBe('');
  });

  it('should set the user value on change event with trim', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value: 'John  ',
      },
    });
    expect(wrapper.find('input').prop('value')).toEqual(
      'John',
    );
  });

  it('on change of value in the field, the state of that field in the component should be updated', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value: 'Ivan',
      },
    });
    expect(wrapper.find('input').prop('value')).toBe(
      'Ivan'
    );
    wrapper.find('input').simulate('change', {
      target: {
        value: 'David',
      },
    });
    expect(wrapper.find('input').prop('value')).toBe(
      'David'
    );
  });

  it('on input change, a submit handler function should be triggered on click event', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value: 'Ignatius',
      },
    });
    wrapper = wrapper.update();
    expect(wrapper.find('h3.userRequested').text()).toBe("Ignatius");
  });

  it('on clicking theme switch button, toggle background colour (is light on load)', () => {
    const fn = jest.fn();
    const wrapper = shallow(<TaskTwo onClick={fn} />);
    wrapper.find('ToggleButton').simulate('click');
    expect(wrapper.props().theme.background).toEqual("#999");
    wrapper.find('ToggleButton').simulate('click');
    expect(wrapper.props().theme.background).toEqual("#363537");
    wrapper.find('ToggleButton').simulate('click');
    expect(wrapper.props().theme.background).toEqual("#999");
  });

});