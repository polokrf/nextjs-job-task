import LoginForm from '@/Components/Login/LoginForm';
import React from 'react';

const Login = () => {
  return (
    <div className=' my-20 flex justify-center'>
     
       
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className=' my-3 text-center '>
          <h1 className=' font-bold text-2xl'>Login Now</h1>
        </div>
            <div className="card-body">
           <LoginForm></LoginForm>
            </div>
          </div>
        </div>
     
    
  );
};

export default Login;