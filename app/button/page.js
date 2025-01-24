import React from 'react'
import { Button } from "@/components/ui/button"

function page() {
  return (
    <div className='mt-10 gap-6 p-4'>
      <Button variant="outline" className="border-black px-8 py-6 rounded-xl border-2 text-lg">Unfollow</Button>
      <Button variant="outline" className="border-black px-8 py-6 rounded-xl border-2 text-lg">Edit Profile</Button>
    </div>
  )
}

export default page
