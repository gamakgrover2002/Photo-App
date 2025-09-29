// App.tsx
import { useState } from "react";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 px-4">
      


      {/* Form Card */}
      <div className="bg-white p-12 rounded-3xl shadow-xl w-full max-w-md transform transition-transform duration-300 hover:scale-105">
        <form className="flex flex-col gap-6">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="px-5 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-gray-700 placeholder-gray-400 transition-colors duration-300"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="px-5 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-gray-700 placeholder-gray-400 transition-colors duration-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-5 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-gray-700 placeholder-gray-400 transition-colors duration-300"
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="px-5 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none text-gray-700 placeholder-gray-400 transition-colors duration-300"
            />
          )}

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-300"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="mt-6 text-gray-500 text-sm text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="text-blue-500 font-semibold cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
