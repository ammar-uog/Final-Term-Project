import React from 'react';
import { GoogleIcon, MicrosoftIcon } from '../components/Icons.jsx';

const LoginPage = ({ setCurrentPage }) => {
    return (
        <div className="py-16 sm:py-24 px-4 flex items-center justify-center">
            <div className="max-w-md w-full mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Sign in to your account</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Or{' '}
                        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('Signup'); }} className="font-medium text-[#7B61FF] hover:text-[#00FFFF]">
                            create a new account
                        </a>
                    </p>
                </div>
                <div className="mt-12 bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email address</label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full px-4 py-3 rounded-md bg-slate-800 border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-[#7B61FF]" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full px-4 py-3 rounded-md bg-slate-800 border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-[#7B61FF]" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-[#7B61FF] hover:text-[#00FFFF]">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#7B61FF] hover:bg-[#6a52e0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B61FF] focus:ring-offset-slate-900 transition-colors">
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-600" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-slate-800 text-gray-400">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div>
                                <a href="#" className="w-full inline-flex justify-center items-center py-2 px-4 border border-slate-600 rounded-md shadow-sm bg-slate-700 text-sm font-medium text-gray-300 hover:bg-slate-600">
                                    <GoogleIcon />
                                    Google
                                </a>
                            </div>

                            <div>
                                <a href="#" className="w-full inline-flex justify-center items-center py-2 px-4 border border-slate-600 rounded-md shadow-sm bg-slate-700 text-sm font-medium text-gray-300 hover:bg-slate-600">
                                    <MicrosoftIcon />
                                    Microsoft
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;
