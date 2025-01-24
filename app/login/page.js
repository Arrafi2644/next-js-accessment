import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';
import React from 'react';

const Login = () => {
    return (
        <div>
           <LoginLink className='bg-green-400 px-3 p-11'>Login now</LoginLink>
        </div>
    );
};

export default Login;