import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UrlShortenerForm from './components/UrlShortenerForm';
import StatisticsPage from './components/StatisticsPage';
import Redirector from './components/Redirector';
import './styles/main.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={UrlShortenerForm} />
                <Route path="/statistics" component={StatisticsPage} />
                <Route path="/redirect/:shortUrl" component={Redirector} />
            </Switch>
        </Router>
    );
}

export default App;