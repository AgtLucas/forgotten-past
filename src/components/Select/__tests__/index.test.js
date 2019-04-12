import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Select from '../';

describe('Select', () => {
  it('should render Select', () => {
    const props = {
    };

    const wrapper = shallow(<Select {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});