import React from 'react';
import { shallow } from "enzyme";
import ToggleButton from './../components/tasktwo/ToggleButton';

describe('ToggleButton', () => {

  let wrapper;
  const theme = "Dark";

  beforeEach(() => {
    const props = {};
    wrapper = shallow(<ToggleButton {...props} theme={theme}></ ToggleButton>);
  });

  it('should render correctly', () => {
    shallow(<ToggleButton theme={theme} />);
  });

  it('should render - shallow', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ToggleButton debug theme={theme} />)
    expect(component).toMatchSnapshot();
  });

  it('should render a button tag', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('should render a button tag - 2', () => {
    expect(wrapper.find("button").length).toEqual(1);
  });

  it('button text should read "Switch theme to Dark"', () => {
    expect(wrapper.find("span").first().text()).toBe("Dark");
    expect(wrapper.find("button").first().text()).toBe("Switch theme to Dark");
  });

});