import React from 'react';
import ReactDOM from 'react-dom';
import EventDetails from './Event';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {MemoryRouter} from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('<EventDetails />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <EventDetails />
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(
    <MemoryRouter>
    <EventDetails 
    title="test Event"
    date="Fri March 30, 2019"
    time="10:30:00"
    place="Boston"
        />
    </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });

it('renders empty given no selection', () => {
    const wrapper = shallow(<EventDetails />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

it('Should call props.onClick() when the Close button is clicked', () => {
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    const clickHandler = () => {console.log('button clicked')};
    const wrapper = shallow(<EventDetails onClick={clickHandler}/>);
    wrapper.find('button').at(0).simulate('click', fakeEvent);
    expect(toJson(wrapper)).toMatchSnapshot();
});
})
