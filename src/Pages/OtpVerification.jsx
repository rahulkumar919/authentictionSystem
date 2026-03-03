import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import summryApi from "../../context/backendApi";
import { toast } from "react-toastify";
import axios from "axios";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || localStorage.getItem("signupEmail");

  useEffect(() => {
    if (!email) {
      navigate("/signup");
    }
  }, [email, navigate]);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      await axios.post(summryApi.verifyOtp.url, {
        email,
        otp,
      });

      toast.success("OTP Verified Successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          OTP Verification
        </h2>

        <p className="text-center text-gray-500 mb-6 text-sm">
          Enter the 6-digit code sent to your email
        </p>

        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            maxLength={6}
            onChange={(e) => setOtp(e.target.value.trim())}
            className="w-full text-center text-lg tracking-widest border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Verify OTP
          </button>
        </form>

        <Link to="/resend-otp" className="group flex justify-center mt-6">
          <span className="text-sm font-semibold text-indigo-600 transition-all duration-300 group-hover:text-indigo-700">
            Resend OTP
          </span>
          <span className="ml-1 text-indigo-600 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default OtpVerification;
