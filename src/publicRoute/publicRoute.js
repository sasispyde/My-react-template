import React, {Suspense} from 'react';

/* Fall back UI */
import Spinner from '../components/utils/spinner/spinner';

import { Redirect } from 'react-router-dom';

const PublicRoute = (props) => {
	const Component = props.component;
    const isLogedIn = localStorage.getItem('user_details');
	
    var isAuthenticated = false;
	if(isLogedIn !== null && isLogedIn !== undefined) {
		isAuthenticated = true;
	}
    
    if(!isAuthenticated) {
        return (
            <>
            {/*<LoginContainer>*/}
                <Suspense fallback={<Spinner />}>
                    <Component />
                </Suspense>
            {/*</LoginContainer>*/}
            </>
        )
    }
    return (
        <Redirect to={{ pathname: '/dashboard' }} />
    )
}

export default PublicRoute;