import React from "react";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <header className="h-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="group cursor-pointer">
          <h1 className="text-2xl font-extrabold tracking-tight text-white">
            Powerful Login System
          </h1>
          <div className="h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Right side */}
        <nav className="flex items-center gap-6">

          {/* About */}
          <Link
            to="/about"
            className="relative text-white/80 hover:text-white font-medium cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>

          {/* SIGNED OUT */}
          <SignedOut>
            <>
              {/* Sign Up link */}
              <Link
                to="/signup"
                className="relative text-white/80 hover:text-white font-medium cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Sign Up
              </Link>

              {/* Google Sign In */}
              <SignInButton mode="modal" redirectUrl="/home">
                <button className="flex items-center gap-3 bg-white text-gray-900 px-5 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-transparent hover:border-white">
                  <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google"
                    className="w-8 h-8"
                  />
                  Continue with Google
                </button>
              </SignInButton>
            </>
          </SignedOut>

          {/* SIGNED IN */}
          <SignedIn>
            <div className="cursor-pointer border border-transparent hover:border-white rounded-full p-1 transition">
              <UserButton afterSignOutUrl="/login" />
            </div>
          </SignedIn>

        </nav>
      </div>
    </header>
  );
};

export default Header;
