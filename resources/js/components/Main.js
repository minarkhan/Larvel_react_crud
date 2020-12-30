import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Nav from "./Nav"; 
import Contacts from "./Contacts"; 
import AddContact from "./AddContact"; 

function Main() {
    return (
        <Router>
        <>
            <Nav />
            <Switch>
                <Route path="/" exact component={Contacts}/>
                <Route path="/addContact" exact component={AddContact}/>
            </Switch>
        </>
        </Router>
    );
}

export default Main;

if (document.getElementById('Main')) {
    ReactDOM.render(<Main />, document.getElementById('Main'));
}
