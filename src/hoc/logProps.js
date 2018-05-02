import React, { Component } from 'react';

function logProps (WrappedComponent) {
    return class extends Component {
        componentWillReceiveProps(nextProps) {
            console.log('prevProps', this.props);
            console.log('nextProps', nextProps);
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}

export default logProps;