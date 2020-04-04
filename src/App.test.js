import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  const container = shallow(<App />);
  
  it('renders', () => {
    container;
  });

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });
});
