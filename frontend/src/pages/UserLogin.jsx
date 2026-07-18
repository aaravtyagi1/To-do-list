import React, { useState } from "react";
import {Link} from "react-router-dom"

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [userData , setUserData] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(email, password);
    setUserData({
      email:email,
      password:password
    })
    setPassword('');
    setEmail("");
  }

  return (
    <div className="w-full h-screen text-black p-6">

      <div className="flex flex-row-reverse mx-auto text-lg font-medium ">
        <button className="border border-black border-2 px-4 py-1 rounded-lg">
          <Link  className="/text-sm text-violet-700 hover:text-violet-300 transition" to="/signup">Register</Link>
        </button>
      </div>

      <div className="flex justify-center items-center h-[80%] ">
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className="w-[460px] bg-zinc-600 backdrop-blur-lg border border-white/20 rounded-3xl p-10 mt-14 shadow-2xl">

          {/* Heading */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-white">
              Welcome Back
            </h1>

            <p className="text-gray-300 mt-2 text-base">
              Sign in to continue to your account.
            </p>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>
            <input 
              required
              value = {email}
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
            type="email" name="email" placeholder="Enter your email" className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/30 transition" />
          </div>
          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>

            <input 
              required
              value = {password}
              onChange={(e)=>{
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/30 transition"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center justify-between mb-8">
            <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-violet-500"
              />
              Remember me
            </label>

            <button
              type="button"
              className="text-sm text-violet-300 hover:text-violet-200 transition"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 text-white text-lg font-semibold hover:scale-[1.02] hover:shadow-xl transition duration-300"
          >
            Login
          </button>

          {/* Footer */}
          <p className="text-center text-gray-300 text-sm mt-8">
            Don't have an account?{" "}
            <Link  className="/text-sm text-violet-300 hover:text-violet-200 transition" to="/signup">Register</Link>
          </p>

        </form>
            <div className="h-[300px] mb-20 ml-44">
              <img class="h-[450px]" src="image.png" alt="" />
            </div>
      </div>
    </div>
  );
};

export default UserLogin;