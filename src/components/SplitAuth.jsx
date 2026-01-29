import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import img from '../assets/about_robotics_hands.png';

const SplitAuth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
        setEmail('');
        setPassword('');
        setName('');
    };

    return (
        <div className="flex w-full h-screen bg-black overflow-hidden font-[sans-serif]">
            {/* Left Section - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 relative">
                <div className="w-full max-w-[450px] space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold tracking-tight text-white uppercase">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        <p className="text-gray-400 text-lg">
                            {isLogin
                                ? 'Welcome back! Please enter your details.'
                                : 'Please enter your details to create an account.'}
                        </p>
                    </div>

                    <form className="space-y-6 mt-8">
                        {/* Name Input (Signup Only) */}
                        {!isLogin && (
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors text-white placeholder:text-gray-600"
                                />
                            </div>
                        )}

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors text-white placeholder:text-gray-600"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-300">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="**********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors text-white placeholder:text-gray-600"
                            />
                        </div>

                        {/* Actions (Login Only) */}
                        {isLogin && (
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 rounded border-gray-700 bg-gray-800 text-red-500 focus:ring-red-500"
                                    />
                                    <span className="text-sm font-medium text-gray-400 select-none">Remember me</span>
                                </label>
                                <a href="#" className="text-sm font-bold text-gray-300 hover:text-white hover:underline">
                                    Forgot password
                                </a>
                            </div>
                        )}

                        {/* Buttons */}
                        <div className="space-y-4 pt-2">
                            <button
                                type="button"
                                className="w-full py-3.5 px-4 bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold rounded-lg transition-colors shadow-sm active:transform active:scale-[0.99]"
                            >
                                {isLogin ? 'Sign in' : 'Sign up'}
                            </button>

                            <button
                                type="button"
                                className="w-full py-3.5 px-4 bg-white border border-gray-200 hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm active:transform active:scale-[0.99]"
                            >
                                <FcGoogle className="text-xl" />
                                {isLogin ? 'Sign in with Google' : 'Sign up with Google'}
                            </button>
                        </div>

                        <div className="text-center pt-4">
                            <p className="text-sm text-gray-500">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <button
                                    type="button"
                                    onClick={toggleAuthMode}
                                    className="font-bold text-[#ef4444] hover:underline focus:outline-none"
                                >
                                    {isLogin ? "Sign up for free!" : "Sign in"}
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Section - Image */}
            <div className="hidden lg:block w-1/2 h-full relative bg-gray-100">
                <div className="absolute inset-0">
                    {/* Using the robotics hand image as requested */}
                    <img
                        src={img}
                        alt="Authentication Illustration"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
                </div>
            </div>
        </div>
    );
};

export default SplitAuth;
