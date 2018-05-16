import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {hasError: false};

    componentDidCatch(error, info) {
        this.setState(state => ({...state, hasError: true}))
    }

    render() {
        if(this.state.hasError) {
            return (
                <div className="container is-centered">
                    <div>
                        Sorry, something went wrong:(
                    </div>
                </div>
            );
        } else {
            return this.props.children;
        }
    }

}


export default ErrorBoundary;