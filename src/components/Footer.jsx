import React from "react";

const Footer = () => {
    return (
        <footer className="p-4 bg-blue-950 text-white text-center">
            <p>
                &copy; {new Date().getFullYear()} NextBlog. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
