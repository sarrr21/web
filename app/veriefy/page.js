import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EmailVerification() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 gap-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Verify Your Email</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            To start using our platform, confirm your email address by clicking the link we have sent to:
          </p>
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-sm">example@mail.com</p>
          </div>
          <Button className="w-full bg-black hover" variant="default">
            Resend Email
          </Button>
          <p className="text-sm text-center">
            Need Help?{" "}
            <a href="#" className="text-primary underline">
              Contact our Customer Support
            </a>
          </p>
        </CardContent>
      </Card>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Verify Your Email</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            To start using our platform, confirm your email address by clicking the link we have sent to:
          </p>
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-sm">example@mail.com</p>
          </div>
          <Button className="w-full bg-black hover" variant="default">
            Resend Email
          </Button>
          <p className="text-sm text-center">
            Need Help?{" "}
            <a href="#" className="text-primary underline">
              Contact our Customer Support
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

