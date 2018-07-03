import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Item from './item';

configure({ adapter: new Adapter() });

describe('<Item />', () => {
  // beforeAll(() => {
  //   const wrapper = shallow(<Item />);
  // });

  it('click button to show text', () => {
    const wrapper = mount(<Item />);
    expect(wrapper.find('p')).toHaveLength(1);
    const instance = wrapper.instance();

    instance.clickHandler();
    wrapper.update();
    expect(wrapper.find('p')).toHaveLength(2);
  });
});

describe('snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Item />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
