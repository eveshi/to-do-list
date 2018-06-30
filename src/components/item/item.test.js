import React from 'react';
import renderer from 'react-test-renderer';
import Item from './item';

it('renders correctly', () => {
  const tree = renderer.create(<Item />).toJSON();
  expect(tree).toMatchSnapshot();
});
