import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10">

        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          About Powerful Login System
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Powerful Login System is a modern authentication project designed to
          demonstrate secure, scalable, and real-world login flows using best
          practices in web development.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Why This Project?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Authentication is one of the most critical parts of any
              application. This project focuses on building a clean and secure
              login system with OTP verification, encrypted passwords, and a
              smooth user experience — just like production systems used in
              real applications.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Key Features
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>🔐 Email-based OTP verification</li>
              <li>🛡 Secure password hashing</li>
              <li>⚡ Fast and user-friendly login flow</li>
              <li>📱 Responsive UI design</li>
              <li>🔁 Resend OTP with validation</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t pt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            Tech Stack & Principles
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This project is built using modern frontend and backend technologies
            with a strong focus on security, scalability, and clean code
            practices. The goal is to reflect how authentication systems are
            designed and implemented in real-world applications.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
