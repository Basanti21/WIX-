import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-4xl w-full shadow-md p-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
          <p className="text-sm mb-4">
            Already have an account? <a href="#" className="text-blue-600">Log In</a>
          </p>
          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
            <input type="email" placeholder="Confirm email" className="w-full border p-2 rounded" />
            <input type="password" placeholder="Choose a password" className="w-full border p-2 rounded" />
            <input type="password" placeholder="Confirm password" className="w-full border p-2 rounded" />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Sign Up
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            * By signing up, you agree to our <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-center border rounded py-2 hover:bg-gray-50">
            <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" className="mr-2" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center border rounded py-2 hover:bg-blue-400 bg-blue-700 text-white">
            <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png" alt="Facebook" className="mr-2" />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
