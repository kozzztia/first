import React from 'react';

class ClassContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }
    increment() {
        this.setState({ count: this.state.count + 10 });
    }
    decrement() {
        this.setState({ count: this.state.count - 10 });
    }
    render() {
        return (
            < div >
                <h2>{this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div >
        )
    }
}
export default ClassContainer;