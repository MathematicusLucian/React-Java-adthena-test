import React from 'react';
import { shallow, render, mount } from "enzyme";
import App from '../app';

it('renders correctly', () => {
  const rendered = render(<App/>)
  expect(rendered).toMatchSnapshot();
})