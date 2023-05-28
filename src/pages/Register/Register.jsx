/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../probiders/AuthProviders';
import google from '../../assets/img/google.png'

const Register = () => {
    const {createUser, loginWithGoogle} = useContext(AuthContext);

        const handleGoogleLogin = ()=>{
            loginWithGoogle()
            .then(()=>{
                alert ("login success")
            })
        }
        const handleRegistration = (event)=>{
            event.preventDefault()
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            createUser(email, password)
            .then(result=>{
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
            })
            .catch(error=>{
                console.log(error.message)
            })
        }
    return (
        <div className="container mx-auto px-5 h-screen mt-5">
            <form onSubmit={handleRegistration} className='border shadow-sm w-full md:w-4/6 mx-auto px-14 py-5'>
                <h2 className='text-center text-black font-semibold text-4xl mb-3'>Please Register!!!</h2>
                <div className='mb-5'>
                    <label className='block mb-2 text-xl text-gray-600 cursor-pointer' htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter You Name" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"/>
                </div>
                <div className='mb-5'>
                    <label className='block mb-2 text-xl text-gray-600 cursor-pointer' htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Your Email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"/>
                </div>
                <div className='mb-5'>
                    <label className='block mb-2 text-xl text-gray-600 cursor-pointer' htmlFor="password">Password</label>
                    <input type="password" placeholder="Create Password" id="password" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"/>
                </div>
                <div className='mb-5'>
                    <label className='block mb-2 text-xl text-gray-600 cursor-pointer' htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" id="confirmPassword" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"/>
                </div>
                <div className='mb-2 text-center'>
                    <p className='text-xl text-gray-600'>Already have an Acount! Please <Link className='text-blue-600 text-2xl p-1' to="/login">Login</Link></p>
                </div>
                
                <button onClick={handleGoogleLogin} className='w-full text-center border rounded-md bg-blue-400 hover:bg-blue-600 duration-300 py-2 text-white font-medium text-lg mt-5'><img className='w-6 h-6 inline mr-2' src={google} alt="" /><span>Login with google</span></button>
                <button type="submit" className='w-full text-center border rounded-md bg-blue-400 hover:bg-blue-600 duration-300 py-2 text-white font-medium text-lg mt-5'>Register</button>
                
            </form>
        </div>
    );
};

export default Register;