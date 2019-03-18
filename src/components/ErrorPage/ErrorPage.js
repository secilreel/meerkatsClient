import React from 'react';

class ErrorPage extends React.Component {
    state = {error: null};
    componentDidCatch(error) {
        console.error(error);
        this.setState({ error });
    }
    render() {
        if (this.state.error) {
            return (
                <div className="error container">
                    <h2>Something seems to have gone wrong</h2>
                    <p>Try refreshing the page</p>
                </div>
            );
        }
        return this.props.children;
    }
}
export default ErrorPage;