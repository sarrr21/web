import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RecoverPassword() {
  return (
    <div className="min-h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/image5.png')" }}>
      <div className='flex justify-center'>
          <img src="./sea.png" className='w-36 h-36'/>
        </div>
    <Card className="w-full max-w-lg h-[402px] mx-auto p-8 rounded-3xl ">
      <CardHeader className="space-y-6">
        <CardTitle className="font-semibold text-xl">Recover Password</CardTitle>
      </CardHeader>
      <CardContent >
        <div className="">
          <p className="text-sm text-muted-foreground mb-4">Enter your email below to recover your password</p>
          <p className="mb-1">Email</p>
          <Input type="email" placeholder="example@email.com" className="w-full py-3 text-black " />
        </div>
        <Button className="w-full bg-gray-400 hover:bg-gray-500 rounded-full mt-6 ">Resend</Button>
       
        <div className="text-center text-sm ">
        <p className="p-0 text-center  text-muted-foreground mt-2">Resend email after 90s</p>
        <div className="mt-4">
          <span >Remembered your password? </span>
          <a href="/login" className="text-primary hover:underline">
            Login
          </a>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

