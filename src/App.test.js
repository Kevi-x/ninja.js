import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import {userListMock} from './mocks/userListMock';


it('renders without crashing', () => {
  shallow(<App rows={[]} rowsPerPage={5} />);
});

it('renders 5 rows', () => {
  const wrapper = mount(<App rows={userListMock} rowsPerPage={5} />);

  expect(wrapper.find('tr').length).toBe(5);
});

it('filters rows based on input', () => {
  const wrapper = mount(<App rows={userListMock} rowsPerPage={5} />);

  wrapper.find('input').simulate('change', { target: { value: 'Ma' } });

  expect(wrapper.find('tr').length).toBe(2);
});
