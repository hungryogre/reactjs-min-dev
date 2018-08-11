import React from 'react';
import './App.css'

const propTypes = {};

const defaultProps = {};

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hello, World!</h1>
            </React.Fragment>
        );
    }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;