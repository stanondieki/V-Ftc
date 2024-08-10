import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0c0827]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-8">
          <img src="your-logo-url.png" alt="FTC Logo" className="h-16" />
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              EMAIL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              PASSWORD
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12m-3 0a3 3 0 116 0 3 3 0 01-6 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center text-sm text-gray-700">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Remember Me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-800">
              Forget password?
            </a>
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#4facfe] to-[#f093fb] text-white font-bold shadow-lg"
            >
              Login
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#4facfe] to-[#f093fb] text-white font-bold shadow-lg"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
