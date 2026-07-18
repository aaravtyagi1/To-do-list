import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="max-h-screen pt-4 bg-white">
          <div className="max-w-7xl mx-8">

            {/* Logo */}
            <div className="flex items-center gap-4">
              <img
                src="icon.png"
                alt="TaskFlow"
                className="w-12 h-12 object-contain"
              />

              <h2 className="text-3xl font-bold text-[#0F172A]">
                TaskFlow
              </h2>
            </div>

            {/* Main Section */}
            <div className="grid lg:grid-cols-2 items-center mt-10 ml-20">
              {/* LEFT CONTENT */}
              <div>

                <p className="text-[#6C4DF6] text-2xl font-semibold mb-6">
                  Organize. Prioritize. Achieve.
                </p>

                <h1 className="text-[84px] leading-[82px] font-extrabold text-[#0F172A]">
                  Your tasks,
                </h1>

                <h1 className="text-[84px] leading-[82px] font-extrabold bg-gradient-to-r from-[#7C5CFC] to-[#5B45F4] bg-clip-text text-transparent">
                  your way.
                </h1>

                <p className="mt-8 max-w-xl text-[22px] leading-[45px] text-gray-500">
                  TaskFlow is a smart and intuitive to-do list app
                  that helps you stay organized, boost productivity,
                  and get things done — every day.
                </p>
                {/* Continue Button */}
                <Link to='/login' className='mt-16 w-64 h-12 rounded-2xl bg-gradient-to-r from-[#7454FF] to-[#5A3CF0] text-white text-2xl font-semibold flex items-center justify-center gap-4 shadow-xl hover:scale-[1.1] transition ' >
                  Continue
                  <span className="text-2xl">→</span>
                </Link>
                <p className="mt-6 text-xl text-gray-500">
                  Continue to login or create your account
                </p>

              </div>
              {/* RIGHT SIDE EMPTY */}
              <div className="h-[300px] mb-20 ml-10">
                <img class="h-[450px]" src="image.png" alt="" />
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Home
