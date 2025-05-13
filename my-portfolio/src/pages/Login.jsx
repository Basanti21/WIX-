import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded">
        <h2 className="text-2xl font-bold text-center mb-6">Log in to Your Account</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded" placeholder="********" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-500">Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
