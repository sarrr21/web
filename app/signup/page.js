'use client'
import React, { useState } from "react";

import Image from 'next/image'
import Link from 'next/link'

export default function Signup() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  return (
    <div className=" min-h-screen w-full flex items-center justify-center bg-cover bg-center" 
         style={{ backgroundImage: "url('/image5.png')" }}>
      <div className="w-full max-w-md p-4">
        <div className='flex justify-center'>
          <img src="./sea.png" className='w-36 h-36'/>
        </div>
        <div className="backdrop-blur-sm bg-white/30 mx-14 rounded-lg px-6 py-12">
         
          <button className="w-full bg-white text-gray-600  py-2 px-4 rounded mb-4 flex items-center justify-center gap-2 hover:bg-gray-50">
            <Image src="/google.png" alt="Google" width={20} height={20} />
            Log in with Google
          </button>

          <button className="w-full bg-white text-gray-600  py-2 px-4 rounded mb-6 flex items-center justify-center gap-2 hover:bg-gray-50">
            <Image src="/mail.png" alt="Email" width={20} height={20} />
            Log in with Email
          </button>

         
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-2 border-gray-700"></div>
            <span className="px-4 text-sm text-gray-500 font-medium">OR</span>
            <div className="flex-1 border-t border-2 border-gray-700"></div>
          </div>

       
          <form className="space-y-4">
            <div>
              <input
                type="name"
                placeholder="Name"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 bg-white/80"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 bg-white/80"
              />
            </div>
            <div>
              <input
                type="username"
                placeholder="Username"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 bg-white/80"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 bg-white/80"
              />
            </div>
       
        <div className="flex items-start mb-4">
          <input
            id="terms-checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor="terms-checkbox"
            className="ml-2 text-sm text-gray-700"
          >
            I agree to the Terms and Privacy Policy
          </label>
        </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white font-semibold py-2 px-4 rounded  transition-colors"
            >
              Sign Up
            </button>
          </form>

        
          <p className="mt-6 text-center text-gray-600">
             have an account?{' '}
            <Link href="/signup" className="text-gray-900  font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

