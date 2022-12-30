import React, { useContext, useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthProvider';
import SmallSpinner from '../components/SmallSpinner';

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { logIn, googleLogIn } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setLoading(true)
        logIn(email, password)
            .then(res => {
                console.log(res.user);
                toast.success('Log in successful');
                navigate('/');
                setLoading(false)
            })
    }


    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(res => {
                console.log(res.user);
                toast.success('Log in successful');
                navigate('/')
            })
            .catch(e => console.log(e.message))
    }

    return (
        <div className='mt-20'>
            <div className="flex justify-center items-center text-slate-800">
                <div className='border w-[400px] p-10 bg-white rounded-2xl'>
                    <h1 className='text-4xl font-bold mb-8 text-center'>Login</h1>
                    <form onSubmit={handleLogIn} className='space-y-8'>
                        <div className="input-field">
                            <div className='flex items-center border-b-2 border-b-slate-500 p-1'>
                                <span className='mr-5 text-xl'><HiOutlineMail /></span>
                                <input className='w-full border-none focus:outline-none bg-transparent' type="email" placeholder='User Email' name='email' />
                            </div>
                        </div>
                        <div className="input-field">
                            <div className='flex items-center border-b-2 border-b-slate-500 p-1'>
                                <span className='mr-5 text-xl'><RiLockLine /></span>
                                <div className='w-full flex items-center'>
                                    <input className='w-full border-none focus:outline-none bg-transparent' type="password" placeholder='User Password' name='password' />
                                    <span className='ml-4 text-lg'>{showPass ? <FaRegEye onClick={() => setShowPass(!showPass)} /> : <FaRegEyeSlash onClick={() => setShowPass(!showPass)} />}</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between mt-2 text-base'>
                                <div>
                                    <input className='mr-2' type="checkbox" name="" id="remember" />
                                    <label htmlFor="remember">Remember me</label>
                                </div>
                                <p className='text-end hover:underline'>Forget password?</p>
                            </div>
                        </div>
                        <button className='w-full py-2 text-white font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 uppercase hover:bg-gradient-to-l' type='submit'>{loading ? <SmallSpinner /> : "Login"}</button>
                    </form>

                    <p className='text-center my-3'>Or</p>
                    <button onClick={handleGoogleLogIn} className='flex items-center justify-center border border-slate-600 w-full py-2 rounded-full uppercase font-semibold'><FcGoogle className='mr-3 text-xl' /> Log in with google</button>
                    <p className='mt-4 text-center'>New to Task Tracker? <Link className='hover:underline' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;