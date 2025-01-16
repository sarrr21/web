'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    console.log('Password reset requested for:', email)
  }

  return (
    <div className="min-h-screen relative bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image5.png"
          alt="Seattle Skyline"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Back Button */}
        <Link 
          href="/"
          className="absolute top-4 left-4 text-white flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>

        {/* Logo */}
        <div className="w-full pt-8 flex justify-center">
          <div className="w-32 h-32 relative">
            <Image
              src="/sea.png"
              alt="Seattle Pulse Logo"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="max-w-sm mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-center mb-2">
            Forgot password
          </h1>
          <p className="text-gray-500 text-center mb-8">
            Enter your email to reset your password 
            and access your account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#0a0f29] text-white rounded-md hover:bg-[#1a1f39] transition-colors"
            >
              Send reset link
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

