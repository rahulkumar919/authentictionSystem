import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Secure Authentication <br className="hidden md:block" />
          Made Simple
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
          Build modern login systems with OTP verification, encrypted passwords,
          and a smooth user experience — designed for real-world applications.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="/signup"
            className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-white/60 px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
          >
            Login
          </Link>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-sm text-white/80">
          <span>🔐 OTP Verification</span>
          <span>🛡 Encrypted Passwords</span>
          <span>⚡ Fast & Secure</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;
