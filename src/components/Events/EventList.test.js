import React from 'react';
import ReactDOM from 'react-dom';
import EventList from './Event';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('<Event />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <EventList />
  </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(
    <MemoryRouter>
        <EventList />
    </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });

})
