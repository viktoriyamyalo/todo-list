import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("<App />", () => {
  const wrapper = shallow(<App />);
  it("should contain one div element", () => {
    expect (wrapper.find('div').length).toBe(1);
  })
})