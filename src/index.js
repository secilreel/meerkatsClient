import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import {EventProvider} from '../src/contexts/EventContext';
import { EventListProvider } from './contexts/EventListContext';

ReactDOM.render(
<BrowserRouter>
    <EventListProvider>
        <EventProvider>
            <App />
        </EventProvider>
    </EventListProvider>
</BrowserRouter>, document.getElementById('root'));
