import React, { useState } from 'react'
import { use } from 'react';
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault();
    setUserData({
      email:email,
      password:password,
      fullName:{
        firstName:firstName,
        lastName:lastName
      },
    })
    console.log(email);
    console.log(password);
    console.log(firstName);
    setFirstName('')
    setLastName('')
    setPassword('')
    setEmail("");
  } 

  return (
    <div className="w-full h-screen text-black p-6" >
      <div className="flex justify-center items-center h-[80%] ">
        <div className="h-[300px] mb-20 mr-20">
          <img class="h-[450px]" src="image.png" alt="" />
        </div>
        
        <form onSubmit={(e)=>{submitHandler(e)}}  
          className="w-[520px] bg-zinc-600 backdrop-blur-lg border border-white/20 rounded-3xl p-8 mt-14 shadow-2xl"
        >
          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white">
              Welcome 
            </h1>
            <p className="text-gray-300 mt-2 text-sm">
              Sign in to continue to your account.
            </p>
          </div>

          <label className="block text-sm text-gray-300 mb-1">
            Full Name
          </label>

          {/* Fullnames */}
          <div className="mb-3 flex gap-10">
            <input
              required
              value = {firstName}
              onChange={(e)=>{
                setFirstName(e.target.value);
              }}
              type="text"
              name="firstName"
              placeholder="First name"
              className="w-20% px-2 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/30 transition"
            />
            <input
              required
              value = {lastName}
              onChange={(e)=>{
                setLastName(e.target.value);
              }}
              type="text"
              name="lastName"
              placeholder="Last name"
              className="w-20% px-2 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/30 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>

            <input
              required
              value = {email}
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-2 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/30 transition"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
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
              className="w-full px-2 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/30 transition"
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
            Register
          </button>

          {/* Footer */}
          <p className="text-center text-gray-300 text-sm mt-8">
            Already have an account?{" "}
            <a href="/login">
                <Link  className="/text-sm text-violet-300 hover:text-violet-200 transition" to="/Login">Login</Link>
            </a>
          </p>

        </form>
      </div>
    </div>
  )
}

export default UserSignup