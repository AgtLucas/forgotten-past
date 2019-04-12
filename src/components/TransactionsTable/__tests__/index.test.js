import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import TransactionsTable from '../';

describe('TransactionsTable', () => {
  it('should render TransactionsTable', () => {
    const props = {
      transactions: [
        {
          description: 'Foo',
          price: 100,
          type: 'credit'
        },
      ],
      transactionsTotalPrice: 231,
      deleteTransactionById: jest.fn(),
    };

    const wrapper = shallow(<TransactionsTable {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});