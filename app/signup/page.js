"use client"

import { useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form validation and submission logic here
    setErrors({ email: "This email is already used" })
  }

  return (
    <div className="bg-cover bg-center min-h-screen"
    style={{ backgroundImage: "url('/image5.png')" }}>
       <div className='flex justify-center'>
          <img src="./sea.png" className='w-36 h-36'/>
        </div>
    <div className="w-full max-w-xl mx-auto p-8 bg-white  rounded-3xl">
      <div className="flex items-center mb-6">
        <button className="mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold">Sign Up – We're excited to have you!</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-sm mb-2">First Name</span>
            <Input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
          </div>
          <div>
            <span  className="text-sm mb-2" >Last Name</span>
            <Input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
          </div>
        </div>

        <div>
          <span  className="text-sm mb-2">Username</span>
          <Input name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        </div>

        <div>
          <span  className="text-sm mb-2">Email</span>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="relative">
          <span  className="text-sm mb-2">Create Password</span>
          <Input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 mt-3 -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOffIcon className="h-4 w-4 text-gray-500" />
            ) : (
              <EyeIcon className="h-4 w-4 text-gray-500" />
            )}
          </button>
        </div>

        <div className="relative">
          <span  className="text-sm mb-2">Confirm Password</span>
          <Input
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className=""
          />
          <button
            type="button"
            className="absolute right-3  top-1/2 mt-3 -translate-y-1/2"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOffIcon className="h-4 w-4 text-gray-500" />
            ) : (
              <EyeIcon className="h-4 w-4 text-gray-500" />
            )}
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: checked }))}
          />
          <label htmlFor="terms" className="text-sm">
            I agree to the{" "}
            <a href="#" className="text-blue-600">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full" type="submit ">
          Create Account
        </Button>

        <p className="text-center text-sm">
          Already Have an Account?{" "}
          <a href="#" className="text-blue-600">
            Login
          </a>
        </p>
      </form>
    </div>
    </div>
  )
}

