/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container mx-auto px-5 h-screen mt-8">
            <form className='border shadow-sm w-full md:w-4/6 mx-auto p-10'>
                <h2 className='text-center text-black font-semibold text-4xl mb-5'>Please Register!!!</h2>
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
                <div className='mb-5 text-center'>
                    <p className='text-xl text-gray-600'>Already have an Acount! Please <Link className='text-blue-600 text-2xl p-1' to="/register">Register</Link></p>
                </div>
                
                <button className='w-full text-center border rounded-md bg-blue-400 hover:bg-blue-600 duration-300 py-2 text-white font-medium text-xl mt-5'>Register</button>
                
            </form>
        </div>
    );
};

export default Login;