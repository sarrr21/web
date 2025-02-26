"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useState } from "react"

export default function PasswordReset() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/image5.png')" }}>
       <div className='flex justify-center'>
          <img src="./sea.png" className='w-36 h-36'/>
        </div>
    <Card className="max-w-lg p-8  mx-auto">
      <CardHeader className="space-y-4">
        <CardTitle className="font-semibold text-xl">Reset your password</CardTitle>
        <p className="text-sm text-muted-foreground">Create a new password to be able to login</p>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="new-password"className="font-normal text-sm">Create New Password</Label>
            <div className="relative">
              <Input id="new-password" type={showPassword ? "text" : "password"} className="pr-10" />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="font-normal text-sm">Confirm Password</Label>
            <div className="relative">
              <Input id="confirm-password" type={showConfirmPassword ? "text" : "password"} className="pr-10" />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <Button className="w-full bg-black text-white hover:bg-black/90 rounded-full">Reset</Button>
          <div className="text-center text-sm">
            Remembered your password?{" "}
            <Link href="/login" className="text-primary hover:underline">
              login
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}

