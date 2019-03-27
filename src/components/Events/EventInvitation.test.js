import React from 'react';
import ReactDOM from 'react-dom';
import EventInvitation from './Event';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {MemoryRouter} from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('<EventInvitation />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <EventInvitation />
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(
    <MemoryRouter>
    <EventInvitation 
    title="test Event"
    day="Fri March 30, 2019"
    time="10:30:00"
    venue="Boston"
        />
    </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });

it('renders empty given no selection', () => {
    const wrapper = shallow(<EventInvitation />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

it('Should call this.onSubmit() when the Attendance button is clicked', () => {
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    const clickHandler = () => {
    };
    
    const wrapper = shallow(<EventInvitation onClick={clickHandler}/>);
    wrapper.find('button').at(0).simulate('submit', fakeEvent);
    expect(toJson(wrapper)).toMatchSnapshot();
});
})
