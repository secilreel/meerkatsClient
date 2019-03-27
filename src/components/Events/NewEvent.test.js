import React from 'react';
import ReactDOM from 'react-dom';
import NewEvent from './Event';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {MemoryRouter} from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('<NewEvent />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <NewEvent />
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(
    <MemoryRouter>
    <NewEvent 
    title="Test New Event"
    day="Fri March 30, 2019"
    time="10:30:00"
    venue="Boston"
        />
    </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });

it('renders empty given no selection', () => {
    const wrapper = shallow(<NewEvent />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

it('Should call this.onSubmit() when the Submit button is clicked', () => {
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    const clickHandler = () => {
    };
    
    const wrapper = shallow(<NewEvent onClick={clickHandler}/>);
    wrapper.find('button').at(0).simulate('submit', fakeEvent);
    expect(toJson(wrapper)).toMatchSnapshot();
});
})
