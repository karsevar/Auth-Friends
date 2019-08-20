import {Route, Redirect} from 'react-router-dom';

export const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route 
        {...rest} 
        render={props => localStorage.getItem('token') ? (
            <Component {...props} /> 
        ) : (
            <Redirect to='/login' />
        )
    }
    />
);