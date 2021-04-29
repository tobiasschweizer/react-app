import React from 'react';

interface FunProps {
    label: string;
}

class Fun extends React.Component<FunProps>{

    state: { count: number };

    constructor(props: FunProps) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times, {this.props.label}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}

export default Fun;
