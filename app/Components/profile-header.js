import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Share} from "lucide-react"
import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="space-y-4 mb-8">
      
        <div className="flex justify-center  gap-8 items-start">
          <Avatar className="w-46 h-46 border">
            <AvatarImage
              src="/img1.png"
              alt="Profile picture"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          
       <div className="space-y-3">
        <div className="flex gap-2">
            <h1 className="text-xl font-semibold text-[#27364b]">John Doe</h1>
            <p className="text-sm mt-1 text-[#677080]">/ @johndoesocial</p>
          </div>
        <div className="flex gap-2">
          <Button className="px-8 py-6 rounded-xl border-2 border-black text-lg">Follow</Button>
          <Button variant="outline" className="border-black px-8 py-6 rounded-xl border-2 text-lg">Message</Button>
          <div variant="outline" size="icon" className="border-black rounded-lg border-2 py-3 px-4">
            <Image
                     src="/Forward.png"
                     alt="Seattle Pulse Logo"
                     width={20}
                     height={20}
                     className="rounded-full"
                     priority
                   />
          </div>
        </div>
        <div className="flex gap-4">
        <div className="flex text-center gap-1">
          <div className="font-bold text-[#27364b]">12</div>
          <span className="text-sm font-semibold text-[#677080] mt-1">Posts</span>
        </div>
        <div className=" flex text-center gap-1">
          <div className="font-bold text-[#27364b]">207</div>
          <div className="text-sm font-semibold text-[#677080]  mt-1">Followers</div>
        </div>
        <div className="flex text-center gap-1">
          <div className="font-bold text-[#27364b]">64</div>
          <div className="text-sm font-semibold text-[#677080]  mt-1">Following</div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
        </div>
      </div>


    </div>
  )
}

