import PhotoGrid from "../Components/post";
import ProfileHeader from "../Components/profile-header";
import ProfileTabs from "../Components/profile-tabs";
import Photo from "../Components/repost";
import { Search, Bell} from "lucide-react"
import { Button } from '@/components/ui/button'



export default function ProfilePage() {
  
  return (
    <main className="container max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-16">
        <div>
        <h1 className="text-2xl font-bold">Profile</h1>
        </div>
        
        
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search"
              className="w-[400px] pl-9 rounded-full border border-input bg-background px-3 py-2"
            />
          </div>
          <div className='flex gap-4'> 
          <Button size="icon" variant="ghost" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-0.5 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
              1
            </span>
          </Button>
          <Button size="icon" variant="ghost" className="relative">
            <img src="./msg.png" className="h-8 w-8" />
            
          </Button>
          </div>
        </div>
      <ProfileHeader />
      <ProfileTabs />
    </main>
  )
}

