import React, { useState } from 'react';

export const DropdownMenu = ({ children }) => {
    return (
        <div className="relative inline-block text-left">
            {children}
        </div>
    );
};

export const DropdownMenuTrigger = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            {children}
        </button>
    );
};

export const DropdownMenuContent = ({ children, isOpen }) => {
    return (
        <div
            className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
                isOpen ? 'block' : 'hidden'
            }`}
        >
            {children}
        </div>
    );
};

export const DropdownMenuItem = ({ children }) => {
    return (
        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            {children}
        </div>
    );
};

export const DropdownMenuLabel = ({ children }) => {
    return (
        <div className="px-4 py-2 text-sm font-medium text-gray-900">
            {children}
        </div>
    );
};

export const DropdownMenuSeparator = () => {
    return (
        <div className="border-t border-gray-100"></div>
    );
};
