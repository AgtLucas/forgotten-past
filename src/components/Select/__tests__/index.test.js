import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Select from '../';

describe('Select', () => {
  it('should render Select', () => {
    const wrapper = shallow(<Select><option>Hi!</option></Select>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});