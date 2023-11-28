import { Component } from "react";

type ClassCounterStateProps = {
    classCount: number;
};

export class ClassCounter extends Component<ClassCounterStateProps> {
    constructor(props: ClassCounterStateProps) {
        super(props);
        this.state = {
            classCount: 0,
        };
    }

    state: ClassCounterStateProps = {
        classCount: 0,
    };

    count = this.state.classCount;

    handleIncrement = () => {
        this.setState((prevState: ClassCounterStateProps) => ({
            count: prevState.classCount + 1,
        }));
    };

    handleDecrement = () => {
        this.setState((prevState: ClassCounterStateProps) => ({
            count: prevState.classCount - 1,
        }));
    };

    render() {
        return (
            <>
                <h2>Class Counter Example</h2>
                <div>{this.count}</div>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
            </>
        );
    }
}
