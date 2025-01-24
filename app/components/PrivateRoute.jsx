
import React from 'react';
import { LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";



const PrivateRoute = async({children}) => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if(user){
        return children;
    }
    
    return (
        <div>
            <LoginLink></LoginLink>
        </div>
    );
};

export default PrivateRoute;