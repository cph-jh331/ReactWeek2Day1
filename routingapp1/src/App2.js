import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from './components/Product';
import Header from './components/Header';

const Home = () => (
    <div>
        <h2>Home View</h2>
        <p>Info about this site</p>
    </div>
)

const Company = () => {
    return (
        <div>
            <h2>About Us</h2>
            <p>Our about page</p>
        </div>
    )
}

export default class App2 extends React.Component {
    render() {
        return (
            <Router >
                <div>
                    <Header />
                    <Switch>
                        <Route path="/products" render={(props) => (<Product {...props} bookStore={this.props.bookStore} />)} />
                        <Route path="/company" component={Company} />
                        <Route component={Home}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}