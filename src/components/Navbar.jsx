"use client";

import React, { useState } from "react";
import {
    RegisterLink,
    LoginLink,
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

const Navbar = () => {
    const { isAuthenticated } = useKindeAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-blue-200 py-4 px-4 lg:px-0">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-lg font-bold">
                    NextBlog
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link href="/">Home</Link>
                    {isAuthenticated ? (
                        <Link href="/profile">Profile</Link>
                    ) : (
                        <LoginLink postLoginRedirectURL="/profile">
                            Profile
                        </LoginLink>
                    )}
                    {isAuthenticated ? (
                        <LogoutLink>Logout</LogoutLink>
                    ) : (
                        <div className="space-x-4">
                            <LoginLink postLoginRedirectURL="/">
                                Sign in
                            </LoginLink>
                            <RegisterLink postLoginRedirectURL="/">
                                Sign up
                            </RegisterLink>
                        </div>
                    )}
                </div>
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger onClick={toggleDropdown}>
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
                        </DropdownMenuTrigger>
                        <DropdownMenuContent isOpen={isDropdownOpen}>
                            <DropdownMenuItem>
                                <Link href="/">Home</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                {isAuthenticated ? (
                                    <Link href="/profile">Profile</Link>
                                ) : (
                                    <LoginLink postLoginRedirectURL="/profile">
                                        Profile
                                    </LoginLink>
                                )}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                {isAuthenticated ? (
                                    <LogoutLink>Logout</LogoutLink>
                                ) : (
                                    <div className="space-x-4">
                                        <LoginLink postLoginRedirectURL="/">
                                            Sign in
                                        </LoginLink>
                                        <RegisterLink postLoginRedirectURL="/">
                                            Sign up
                                        </RegisterLink>
                                    </div>
                                )}
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
