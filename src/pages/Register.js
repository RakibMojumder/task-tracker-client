import React, { useContext, useState } from 'react';
import { BiUser } from "react-icons/bi";
import { RiLockLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import SmallSpinner from '../components/SmallSpinner';

const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const { createUser, googleLogIn } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        setLoading(true)
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Register successful');
                navigate('/');
                setLoading(false)
            })
            .catch(e => console.log(e))
    };

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(res => {
                console.log(res.user);
                toast.success('Register successful');
                navigate('/')
            })
            .catch(e => console.log(e.message))
    }

    return (
        <div className="flex justify-center items-center text-slate-800 mt-20">
            <div className='border w-[400px] p-10 bg-white rounded-3xl'>
                <h1 className='text-4xl font-bold mb-8 text-center'>Register</h1>
                <form onSubmit={handleCreateUser} className='space-y-8'>
                    <div className="input-field">
                        <div className='flex items-center border-b-2 border-b-slate-500 p-1'>
                            <span className='mr-5 text-xl'><BiUser /></span>
                            <input className='w-full border-none focus:outline-none bg-transparent' type="text" placeholder='User Name' name='name' required />
                        </div>
                    </div>
                    <div className="input-field">
                        <div className='flex items-center border-b-2 border-b-slate-500 p-1'>
                            <span className='mr-5 text-xl'><HiOutlineMail /></span>
                            <input className='w-full border-none focus:outline-none bg-transparent' type="email" placeholder='User Email' name='email' required />
                        </div>
                    </div>
                    <div className="input-field">
                        <div className='flex items-center border-b-2 border-b-slate-500 p-1'>
                            <span className='mr-5 text-xl'><RiLockLine /></span>
                            <div className='w-full flex items-center'>
                                <input className='w-full border-none focus:outline-none bg-transparent' type={showPass ? "text" : "password"} placeholder='User Password' name='password' required />
                                <span className='ml-4 text-lg'>{showPass ? <FaRegEye onClick={() => setShowPass(!showPass)} /> : <FaRegEyeSlash onClick={() => setShowPass(!showPass)} />}</span>
                            </div>
                        </div>
                    </div>
                    <button className='w-full py-2 text-white font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 uppercase hover:bg-gradient-to-l' type='submit'>{loading ? <SmallSpinner /> : "Register"}</button>
                </form>

                <p className='text-center my-3'>Or</p>
                <button onClick={handleGoogleLogIn} className='flex items-center justify-center border border-slate-600 w-full py-1.5 rounded-full uppercase font-semibold'><FcGoogle className='mr-3 text-xl' /> Sign up with google</button>
                <p className='mt-4 text-center'>New to Task Tracker? <Link className='hover:underline' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;