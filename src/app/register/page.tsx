'use client'


import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router =  useRouter()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create your account
        </h2>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-black mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

   

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer hover:underline" onClick={()=>router.push('/login')} >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
