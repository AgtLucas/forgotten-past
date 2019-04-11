import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import CreateTransactionForm from '../';

describe('CreateTransactionForm', () => {
  it('should render CreateTransactionForm', () => {
    const props = {
      transaction: {
        description: 'Foo',
        price: 100,
        type: 'credit'
      },
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
    };

    const wrapper = shallow(<CreateTransactionForm {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});