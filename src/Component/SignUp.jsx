import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SignInButton } from "@clerk/clerk-react";
import summryApi from "../../context/backendApi";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isSignedIn } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await fetch(summryApi.signup.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.username,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        localStorage.setItem("signupEmail", data.email);
        toast.success("OTP sent to your email");
        navigate("/otp-verification");
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      toast.success("Login successful");
      navigate("/");
    }
  }, [isSignedIn]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="bg-white p-8 rounded-xl w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create your account
        </h2>

        {/* MANUAL SIGNUP FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("username", { required: "Username required" })}
            placeholder="Username"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            {...register("email", { required: "Email required" })}
            placeholder="Email"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              {...register("password", {
                required: "Password required",
                minLength: 8,
              })}
              placeholder="Password"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={() => setShowPass((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="relative">
            <input
              type="password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              placeholder="Confirm Password"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            disabled={loading}
            className={`w-full p-3 rounded text-white font-semibold transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Sending OTP..." : "Sign Up"}
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* GOOGLE SIGNUP */}
        <SignInButton mode="modal" redirectUrl="/">
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 bg-white text-gray-800 p-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-8 h-8"
            />
            Sign up with Google
          </button>
        </SignInButton>

        {/* LOGIN LINK */}
        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
