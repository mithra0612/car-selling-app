import React, { useState } from "react";
import { Card } from "flowbite-react";
import { Eye, EyeOff } from "lucide-react";
import SignUpHeader from "./SignUpHeader";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    const email = "mechanic@gmail.com";
    const pwd = "mechanic123";
    const userName = "Moulee";
    const userPwd = "moulee123";

    if (mail === email && password === pwd) {
      navigate("/profile");
    } else if (mail === userName && password === userPwd) {
      navigate("/Buyer");
    } else {
      alert("Invalid Username or Password!");
    }
  };

  return (
    <div>
      <style>
        {`
          input[type="password"]::-ms-reveal, 
          input[type="password"]::-ms-clear {
            display: none;
          }

          input[type="password"]::-webkit-password-eye {
            display: none;
          }
        `}
      </style>
      <SignUpHeader />
      <div className="h-screen w-full bg-[url('https://shorturl.at/DGQGu')] bg-cover bg-center flex items-center justify-center">
        <Card className="w-full max-w-[450px] h-auto border-2 border-orange-400 ">
          <div className="flex justify-center items-center flex-col gap-4 p-3">
            <h1 className="text-2xl font-bold flex items-center">
              <div className="text-orange-500 pr-2">Login</div> to your account
            </h1>
            <label className="w-full font-medium text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="border-2 border-gray-300 rounded-lg w-full h-[40px] px-3 text-sm hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-0"
              onChange={(e) => setMail(e.target.value)}
            />
            <div className="w-full">
              <label className="text-sm font-medium text-gray-600 flex items-center">
                Password
                <a href="#" className="text-sm text-orange-500 ml-auto">
                  Forgot Password?
                </a>
              </label>

              <div className="relative mt-1"></div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="border-2 border-gray-300 rounded-lg w-full h-[40px] px-3 text-sm hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-0 appearance-none"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  id="togglePassword"
                  className="absolute  right-3 mr-[660px] mt-[10px] text-gray-500 hover:text-gray-700 justify-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
            </div>

            <button
              className="rounded-lg min-w-full h-[40px] bg-orange-500 text-white items-center justify-center flex"
              onClick={handleLogin}
            >
              Login now
            </button>
            <p className="text-sm">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-orange-500 font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
