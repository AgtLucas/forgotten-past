import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ErrorMessage from '../';

describe('ErrorMessage', () => {
  it('should render ErrorMessage', () => {
    const wrapper = shallow(<ErrorMessage>Error</ErrorMessage>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});