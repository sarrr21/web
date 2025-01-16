'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function OTP() {
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const [timer, setTimer] = useState(45)
  const [isResending, setIsResending] = useState(false)

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer])

  const handleChange = (index, value) => {
    if (value.length > 1) return
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.querySelector(`input[name="code-${index + 1}"]`)
      if (nextInput) nextInput.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.querySelector(`input[name="code-${index - 1}"]`)
      if (prevInput) prevInput.focus()
    }
  }

  const handleResend = async () => {
    setIsResending(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setTimer(45)
    setIsResending(false)
  }

  return (
    <div className="min-h-screen bg-cover bg-center relative" 
         style={{ backgroundImage: "url('/image5.png')" }}>
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 flex flex-col items-center pt-8">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/sea.png"
            alt="Seattle Pulse"
            width={128}
            height={128}
            className="mb-2"
          />
          
        </div>

        {/* Verification Card */}
        <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
          <h2 className="text-xl font-semibold text-center mb-4">
            Enter verification code
          </h2>
          <p className="text-gray-500 text-sm text-center mb-6">
            Code sent to anonuzi.work@gmail.com
          </p>

          {/* Code Input */}
          <div className="flex justify-between mb-8">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                name={`code-${index}`}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-xl font-semibold focus:border-blue-500 focus:outline-none"
                maxLength={1}
              />
            ))}
          </div>

          {/* Timer */}
          <p className="text-gray-500 text-sm text-center mb-4">
            Resend in {Math.floor(timer / 60)}:
            {(timer % 60).toString().padStart(2, '0')}
          </p>

          {/* Verify Button */}
          <button
            className="w-full bg-[#0f172a] text-white py-3 rounded-lg font-medium hover:bg-[#1e293b] transition-colors"
          >
            Verify
          </button>

          {/* Resend Button */}
          {timer === 0 && (
            <button
              onClick={handleResend}
              disabled={isResending}
              className="w-full mt-4 text-blue-600 hover:text-blue-700"
            >
              {isResending ? 'Resending...' : 'Resend Code'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

