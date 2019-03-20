import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import {EventProvider} from '../src/contexts/EventContext';

ReactDOM.render(
<BrowserRouter>
    <EventProvider>
        <App />
    </EventProvider>
</BrowserRouter>, document.getElementById('root'));
