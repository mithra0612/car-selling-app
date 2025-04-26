import React, { useState } from "react";
import Header from "../Header/header";
import { Card } from "flowbite-react";
import { Eye as EyeIcon, EyeOff as EyeOffIcon } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Header />
      <div className="h-screen w-full bg-[url('https://shorturl.at/DGQGu')] bg-cover bg-center flex items-center justify-center">
        <Card className="w-full max-w-[450px] h-auto border-2 border-orange-400">
          <div className="flex justify-center items-center flex-col gap-4 p-3">
            <h1 className="text-2xl font-bold flex items-center">
              <div className="text-orange-400 pr-2">Create</div> an account
            </h1>
            <label className="w-full font-medium text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="border-2 border-gray-300 rounded-lg w-full h-[40px] px-3 text-sm hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-0"
            />
            <div className="w-full">
              <label className="text-sm font-medium text-gray-600 flex items-center">
                Password
                <a href="#" className="text-sm text-orange-400 ml-auto">
                  Forgot Password?
                </a>
              </label>

              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="border-2 border-gray-300 rounded-lg w-full h-[40px] px-3 text-sm hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-0"
                />
                <button
                  type="button"
                  id="togglePassword"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <button className="rounded-lg w-full h-[40px] bg-orange-400 text-white">
              Create account
            </button>
            <button className="flex items-center justify-center gap-2 border-2 border-gray-300 rounded-lg w-full h-[40px] hover:border-orange-400 focus:outline-none focus:ring-0 focus:ring-orange-400">
              <img
                src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                alt="Google Icon"
                className="w-5 h-5"
              />
              <span>Sign in with Google</span>
            </button>

            <p className="text-sm">
              Already have an account?{" "}
              <a href="#" className="text-orange-400 font-medium">
                Log In
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
