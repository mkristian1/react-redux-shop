import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator'

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch() {
        return { hasError: true };
    }

    // componentDidCatch(error, errorInfo) {
    //     // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок 
    //     logErrorToMyService(error, errorInfo);
    // }
 

    render() {
        if (this.state.hasError) {
            // Можно отрендерить запасной UI произвольного вида      
            return <ErrorIndicator />
        } else {
            return this.props.children
        }
    }
}