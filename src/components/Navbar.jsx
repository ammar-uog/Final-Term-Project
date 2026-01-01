import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MenuIcon, XIcon, BotIcon } from "./Icons.jsx";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Dashboard", path: "/dashboard" }
    ];

    const isActive = (path) => location.pathname === path;

    const handleMobileNavClick = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    }

    return (
        <nav className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="flex-shrink-0 text-white text-2xl font-bold flex items-center"
                        >
                            <BotIcon className="h-8 w-8 text-[#7B61FF] mr-2" />
                            IntelliMeet
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.path)
                                            ? "bg-slate-700 text-white"
                                            : "text-gray-300 hover:bg-slate-700 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <button onClick={() => navigate("/login")} className="bg-slate-800 text-gray-300 hover:bg-slate-700 px-4 py-2 rounded-md text-sm font-medium transition-colors mr-2">
                            Login
                        </button>
                        <button onClick={() => navigate("/signup")} className="bg-[#7B61FF] text-white hover:bg-[#6a52e0] px-4 py-2 rounded-md text-sm font-medium transition-colors">
                            Sign Up
                        </button>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <XIcon className="block h-6 w-6" />
                            ) : (
                                <MenuIcon className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(link.path)
                                        ? "bg-slate-700 text-white"
                                        : "text-gray-300 hover:bg-slate-700 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-2 px-2 border-t border-slate-700">
                            <button onClick={() => handleMobileNavClick('/login')} className="w-full text-left bg-slate-800 text-gray-300 hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium transition-colors mb-2">
                                Login
                            </button>
                            <button onClick={() => handleMobileNavClick('/signup')} className="w-full text-left bg-[#7B61FF] text-white hover:bg-[#6a52e0] px-3 py-2 rounded-md text-base font-medium transition-colors">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
