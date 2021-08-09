import React from 'react';

/* Context */
import USERINFO from './context';

/* util functios */
import { DECRYPTEDATA } from '../utilityFunctions/utils';

const ContextProvider = (props) => {

    let userInfo = localStorage.getItem("info");    
    try {
        if(userInfo != null) {
            userInfo = DECRYPTEDATA(userInfo);
        } else {
            userInfo = {};
        } 
    } catch(err) {
        userInfo = {};
        console.log(err);
        localStorage.clear();
        window.location.reload();
    }

    return (
        <USERINFO.Provider value={userInfo}>
            {
                props.children
            }
        </USERINFO.Provider>
    )
}

export default React.memo(ContextProvider);