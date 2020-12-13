import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from '../header';
import WithBookstoreService from '../hoc'
import CardPage from '../pages/card-page';
import HomePage from '../pages/home-page';


const App = ({ bookstoreService }) => {
    return (
        <Container>
            <Header numItems={2} total={100} />
            <Switch>
                <Route path="/" exact>
                    <HomePage/>
                </Route>
                <Route path="/card-page">
                    <CardPage/>
                </Route>
            </Switch>
        </Container>
    );
}

export default WithBookstoreService()(App);