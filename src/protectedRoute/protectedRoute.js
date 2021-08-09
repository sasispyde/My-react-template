import React, {Suspense} from 'react';

/* Fall back UI */
import Spinner from '../components/utils/spinner/spinner';

/* Dashboard */
import Dashboard from '../components/containers/dashboard/dashboard';

import { Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
	const Component = props.component;
    const isLogedIn = localStorage.getItem('user_details');

    var isAuthenticated = true;
	if(isLogedIn !== null && isLogedIn !== undefined) {
		isAuthenticated = true;
	}
    
    if(isAuthenticated) {
        return (
            <>
                <Dashboard>
                    <Suspense fallback={<Spinner />}>
                        <Component />
                    </Suspense>
                </Dashboard>
            </>
        )
    }
    return (
        <Redirect to={{ pathname: '/', state: { showMessage : 1 } } } />
    )
}

export default PrivateRoute;