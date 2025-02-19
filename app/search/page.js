import { Search, MapPin, MoreHorizontal, Heart, MessageCircle, Share2, Bell } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import PeopleSuggestions from '../Components/people'
import PeopleYouMayKnow from '../Components/follow'

const posts = [
  {
    id: 1,
    author: 'Komo News',
    avatar: '/img.png',
    timeAgo: '33mins ago',
    location: 'Seattle',
    content: 'Federal Ways sees 11% drop in overall crime as drug arrests surge by more than 402%',
    image: '/feed1.png',
    likes: 23,
    comments: 23,
  },
  {
    id: 2,
    author: 'Seattle Times',
    avatar: '/img.png',
    timeAgo: '1h ago',
    location: 'Seattle',
    content: 'New waterfront park project enters final phase of construction with exciting features',
    image: '/feed1.png',
    likes: 45,
    comments: 12,
  }
]

export default function FeedPage() {
  return (
    <div className="w-full mx-auto py-8 px-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
        <h1 className="text-2xl font-bold">My Pulse</h1>
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
      

      
      <div className="flex gap-2 ">
       
        <p className=" text-lg font-semibold ">Posts from people you follow</p>
        
      </div>

      <div className="mt-24 flex items-center justify-center ">
        <div className="text-center space-y-2 ">
         
          <div className="w-16 h-16 mx-auto ">
            <img src="./inbox.png" />
          </div>
          <h2 className="text-md font-semibold text-gray-800">No posts yet</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            There are no posts on "My Pulse" yet. <br /> follow users to see there posts
          </p>
  
        
          <button
            className="mt-12 px-6 py-2.5 bg-black text-white rounded-lg 
                       hover:bg-gray-800 transition-colors duration-200 
                       flex items-center justify-center gap-2 mx-auto"
          >
           <Search className='h-6 w-6' />
            <span className="text-sm">Search for Users</span>
          </button>
        </div>
      </div>

      <PeopleYouMayKnow />
</div>

   
  )
}

