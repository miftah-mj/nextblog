import React from "react";
import {
    RegisterLink,
    LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = () => {
    return (
        <nav className="bg-blue-200 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className=" text-lg font-bold">My Blog</div>
                <div className="hidden md:flex space-x-4">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <LoginLink>Sign in</LoginLink>
                    <RegisterLink>Sign up</RegisterLink>
                </div>
                <div className="md:hidden">
                    <button className=" focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
