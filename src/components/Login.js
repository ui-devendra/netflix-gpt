import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />

      <div className=" m-auto p-10 w-96 font-thin relative z-20 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-40 before:content-[''] before:rounded">
        <h1 className="text-3xl font-thin mb-6 relative text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        <form className="relative">
          <div className="flex gap-2">
            {!isSignInForm && (
              <input
                type="text"
                placeholder="First Name"
                className="p-2 my-2 text-white border border-gray-500 rounded w-full bg-transparent"
              />
            )}
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Last Name"
                className="p-2 my-2 text-white border border-gray-500 rounded w-full bg-transparent"
              />
            )}
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="p-2 my-2 text-white border  border-gray-500 rounded w-full bg-transparent"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 my-2 text-white border border-gray-500 rounded w-full bg-transparent"
          />
          {!isSignInForm && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-2 my-2 border border-gray-500 rounded w-full bg-transparent"
            />
          )}

          <button className="text-white p-2 my-2 bg-red-700 hover:bg-red-900 w-full rounded">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex items-center mb-4 text-gray-400">
            <input
              id="remember-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 border-gray-300 bg-transparent rounded "
            />
            <label for="remember-checkbox" className="ms-2 text-sm font-thin">
              Remember me
            </label>
            <p className="ml-auto text-sm font-thin text-gray-400">
              <span className="underline cursor-pointer">Forgot Password</span>
            </p>
          </div>
          <p className="pt-4 text-sm font-thin text-gray-200">
            {isSignInForm ? "New to Netflix?" : "Already a member?"}{" "}
            <span
              className="underline font-semibold cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now" : "Sign in"}
            </span>
          </p>
        </form>
      </div>
      <div className="bg-overlay absolute inset-0 h-full overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-70 before:content-['']">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/US-en-20250113-TRIFECTA-perspective_5bde7b75-98f7-439c-8d45-244f70e1b5ae_large.jpg"
          className=""
        />
      </div>
    </div>
  );
};

export default Login;
