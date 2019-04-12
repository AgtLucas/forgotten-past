import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Input from '../';

describe('Input', () => {
  it('should render Input', () => {
    const props = {
    };

    const wrapper = shallow(<Input {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});