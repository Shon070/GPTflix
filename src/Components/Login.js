import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BACKGROUND_PHOTO } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { addUser } from "../utils/store/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleToggleSignin = () => {
    setIsSignIn((signUp) => !signUp);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleClick = () => {
    const errMsg = checkValidData(
      // displayName?.current?.value ,
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(errMsg);

    if (errMsg) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        // displayName?.current?.value,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user)
          navigate("/browse");
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute my-40 mx-auto right-0 left-0 bg-black p-12 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl pb-5">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-black opacity-50 w-full border-white text-white rounded-md"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="p-4 my-4 bg-black opacity-50 w-full border-white text-white rounded-md"
        />

        <div className="relative">
          <input
            ref={password}
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            className="p-4 my-4 bg-black opacity-50 w-full border-white text-white rounded-md pr-10"
          />
          <button
            onClick={togglePasswordVisibility}
            className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white"
          >
            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <p className="font-bold text-red-600">{errorMessage}</p>
        <button
          onClick={handleClick}
          className="my-6 p-4 w-full font-bold text-base bg-red-600 hover:bg-red-800 rounded-md "
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {isSignIn ? "New to Netflix?" : "Already a User?"}{" "}
          <strong
            className="cursor-pointer hover:underline"
            onClick={handleToggleSignin}
          >
            {isSignIn ? "Sign Up now." : "Sign In."}
          </strong>
        </p>
      </form>
    </>
  );
};

export default Login;
