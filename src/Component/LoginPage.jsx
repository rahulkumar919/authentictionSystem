import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import summryApi from "../../context/backendApi";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios({
        url: summryApi.Login.url,
        method: summryApi.Login.method,
        data: {
          email: data.email,
          password: data.password,
        },
        withCredentials: true,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-600">
      <div className="bg-white p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email required" })}
              className="w-full border p-3 rounded"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password required" })}
              className="w-full border p-3 rounded"
            />
            <button  className = "absolute right-4 top-1/2 -translate-y-1/2"
              type="button"
              onClick={() => setShowPass((prev = !prev))}
            >
                {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button className="w-full bg-indigo-600 text-white p-3 rounded">
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
