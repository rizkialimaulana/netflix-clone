import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef} from "react";
import { FaGoogle, FaKey, FaUser } from "react-icons/fa";
import { auth } from "../firebase";

const LoginScreen = () => {
  const emailRef = useRef(null)
  const passRef = useRef(null)
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch((error) => {
      alert(error.message)
    })
  }
  
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch((error) => {
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="z-30 text-white backdrop-blur-sm w-[90%] px-4 md:px-0 md:w-[40rem] h-[30rem] flex flex-col items-center justify-evenly bg-black/70">
        <h1 className="font-bold text-3xl">Sign In</h1>
        <form className="flex flex-col items-center space-y-5 text-sm md:text-lg">
          <div className="flex items-center space-x-6">
            <FaUser className="text-white text-xl" />
            <input
              ref={emailRef}
              className="outline-none p-4 border-b border-red-600 bg-transparent"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex items-center space-x-6">
            <FaKey className="text-white text-xl" />
            <input
              ref={passRef}
              className="outline-none p-4 border-b border-red-600 bg-transparent"
              type="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" onClick={register} className="text-white bg-red-600 px-6 py-3 w-full">
            Register
          </button>
          <button type="submit" onClick={login} className="text-white bg-red-600 px-6 py-3 w-full">
            Sign In
          </button>
        </form>
        <div className="flex flex-col items-center space-y-3">
          <p className="text-lg">Login with :</p>
          <FaGoogle className="text-white text-xl cursor-pointer" />
        </div>
        <p className="text-white">
          Dont have an account?{" "}
          <span
            onClick={register}
            className="cursor-pointer transition-color duration-[250ms] hover:text-red-600"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginScreen;
