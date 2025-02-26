"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="  items-center justify-center  p-4 bg-cover bg-center"
    style={{ backgroundImage: "url('/image5.png')" }}>
       <div className='flex justify-center'>
          <img src="./sea.png" className='w-36 h-36'/>
        </div>
      <div className="w-full mx-auto max-w-lg  space-y-6 bg-white rounded-3xl p-8">
     
        <div className=" ">
          <h1 className="text-xl font-semibold ">Login - Welcome Back!</h1>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="font-normal text-md">Email</Label>
            <Input id="email" placeholder="example@email.com" type="email" required className="py-3" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="font-normal text-md">Password</Label>
            <div className="relative">
              <Input id="password" type={showPassword ? "text" : "password"} required  className="py-3"/>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm">
                Remember me
              </Label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-500 underline">
              Forgot your password?
            </a>
          </div>

          <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-2">Login</Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-xs ">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>

          <Button variant="outline" className="w-full border border-[#000000] rounded-full" onClick={() => {}}>
            <img src="https://www.google.com/favicon.ico" alt="" className="mr-2 h-5 w-5" />
            Login with Google
          </Button>

          <Button variant="outline" className="w-full border border-[#000000] rounded-full" onClick={() => {}}>
            <img src="https://www.facebook.com/favicon.ico" alt="" className="mr-2 h-5 w-5" />
            Login with Facebook
          </Button>

          <Button variant="outline" className="w-full border border-[#000000] rounded-full" onClick={() => {}}>
            <img src="./apple.png" alt="" className="mr-2 h-5 w-5" />
            Login with Apple
          </Button>

          <div className="text-center text-sm">
            Don't Have an Account?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

