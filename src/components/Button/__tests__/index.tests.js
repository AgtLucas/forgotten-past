import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Button from '../';

describe('Button', () => {
  it('should render Button', () => {
    const wrapper = shallow(<Button>Hey</Button>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});