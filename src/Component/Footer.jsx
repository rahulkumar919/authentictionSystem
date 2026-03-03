import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-600 to-purple-600 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Powerful Login System
          </h2>
          <p className="text-sm">
            A secure and modern authentication system with email verification,
            OTP validation, and role-based access.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/signup" className="hover:text-white">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white">
                Login
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Security
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Email OTP Verification</li>
            <li>Encrypted Passwords</li>
            <li>JWT Authentication</li>
            <li>Protected Routes</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Powerful Login System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
