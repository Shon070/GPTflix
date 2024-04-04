import { useState } from "react";
import { BACKGROUND_PHOTO } from "../utils/constants";
import Header from "./Header";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleClick = () => {
    setIsSignIn((signUp) => !signUp);
  };

  return (
    <>
      <Header />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src={BACKGROUND_PHOTO}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <form className="w-4/12 absolute my-40 mx-auto right-0 left-0 bg-black p-12 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl pb-5">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-black opacity-50 w-full border-white text-white rounded-md"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="p-4 my-4 bg-black opacity-50 w-full border-white text-white rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-black opacity-50 w-full border-white text-white rounded-md"
        />
        <button className="my-6 p-4 w-full font-semibold bg-red-600 hover:bg-red-800 rounded-md ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {isSignIn ? "New to Netflix?" : "Already a User?"}{" "}
          <strong
            className="cursor-pointer hover:underline"
            onClick={handleClick}
          >
            {isSignIn ? "Sign Up now." : "Sign In."}
          </strong>
        </p>
      </form>
    </>
  );
};

export default SignIn;
