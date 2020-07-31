import React, { Component } from 'react';


class TheLeanStartup extends Component {

    componentDidMount() {
        document.title = 'The Lean Startup';
    }

    render() {
        return (
            <div>
                <h1>The Lean Startup</h1>
                <div style={{color: 'gray'}}>July 29, 2020</div>
                <p>
                    Todo.
                </p>
            </div>
        )
    }
}

export default TheLeanStartup;