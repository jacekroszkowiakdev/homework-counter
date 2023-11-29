import { Component } from "react";

interface ClassCounterState {
    classCount: number;
}

export class ClassCounter extends Component {
    constructor(props: ClassCounterState) {
        super(props);
        this.state = {
            classCount: 0,
        };
        // this.handleDecrement = this.handleDecrement.bind(this);
        // this.handleIncrement = this.handleIncrement.bind(this);
    }

    state: ClassCounterState = {
        classCount: 0,
    };

    handleIncrement = () => {
        if (this.state.classCount > 0) {
            this.setState((prevState: ClassCounterState) => ({
                classCount: prevState.classCount + 1,
            }));
        } else {
            alert("Count cannot be negative.");
        }
    };

    handleDecrement = () => {
        if (this.state.classCount > 0) {
            this.setState((prevState: ClassCounterState) => ({
                classCount: prevState.classCount - 1,
            }));
        } else {
            alert("Count cannot be negative.");
        }
    };

    render() {
        return (
            <>
                <h2>Class Counter Example:</h2>
                <div>{this.state.classCount}</div>
                <button onClick={this.handleIncrement.bind(this)}>+</button>
                <button onClick={this.handleDecrement.bind(this)}>-</button>
            </>
        );
    }
}
