import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import Loader from '../../Shared/Loader';

const Login = () => {
    const {userLogin,googleSignIn,loading, setLoading} = useContext(AuthContext);
    const [error, setError] = useState('');

    if(loading){
        return <Loader></Loader>
    }

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(e => {
            console.log(e)
        })
    }

    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email,password)
        .then(result =>{
            const user = result.user;
            form.reset()
            setError('')
            toast.success('login successful')
            console.log(user);
        })
        .catch(error =>{
            const errorMessage = error.message;
            setError(errorMessage)
            setLoading(false)
            console.log(errorMessage)
        })

        // console.log(email, password);

    }
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-violet-400 text-white mx-auto my-10">
            <h1 className="text-2xl font-bold text-center">Log in</h1>
            <form onSubmit={handleLogin} className="space-y-6 ng-untouched ng-pristine ng-valid">
                
                <div className="space-y-1 text-sm">
                    <label for="email" className="block ">Email</label>
                    <input type="email" name="email" id="username" placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label for="password" className="block">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                    
                </div>
                <p className='text-red-600'>{error}</p>
                <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">Login</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                </button>
                
            </div>
            <p className="text-xs text-center sm:px-6 ">Don't have an account yet?
                <Link to='/signUp' className="underline text-violet-800">Sign up</Link>
            </p>
        </div>
    );
};

export default Login;