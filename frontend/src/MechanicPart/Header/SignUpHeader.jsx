import React from "react";
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 h-16 flex items-center px-6 shadow-lg">
      <div className="flex-grow"></div>
      <div className="flex items-center gap-10 relative">
        <Link to="/signup">
          <button className="border-2 border-white p-1 w-28 text-white text-lg rounded-lg mr-6">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
