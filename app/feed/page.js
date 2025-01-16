import { Search, MapPin, MoreHorizontal, Heart, MessageCircle, Share2, Bell } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Sample data for feed posts
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
    <div className="w-full mx-auto p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
        <h1 className="text-2xl font-bold">Feed</h1>
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
      

      {/* Location Sel ector */}
      <div className=" flex items-center justify-center gap-2 mb-6">
        <MapPin className="h-4 w-4 text-muted-foreground" />
        <span className="text-muted-foreground text-xl font-semibold">Happening in</span>
        <Button variant="ghost" className="font-semibold text-xl">
          Seattle
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Button>
      </div>

      {/* Feed Posts */}
     
        
      <div className="space-y-6 max-w-xl mx-auto">
  {posts.map((post) => (
    <div key={post.id} className="rounded-lg border bg-card text-card-foreground shadow-sm">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Image
            src={post.avatar || "/placeholder.svg"}
            alt={post.author}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold">{post.author}</h3>
            <p className="text-sm text-muted-foreground">{post.timeAgo}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            {post.location}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Save post</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
              <DropdownMenuItem>Hide</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="relative aspect-video w-full">
        <Image
          src={post.image || "/placeholder.svg"}
          alt="Post image"
          fill
          className="object-cover"
        />
      </div>

      {/* Post Content */}
      <div className="px-4 py-2">
        <p>{post.content}</p>
      </div>

      {/* Post Image */}
     

      {/* Post Actions */}
      <div className="flex items-center gap-4 p-4">
        <Button variant="ghost" size="sm" className="gap-2">
          <Heart className="h-4 w-4" />
          {post.likes}
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <MessageCircle className="h-4 w-4" />
          {post.comments}
        </Button>
        <Button variant="ghost" size="sm" className="ml-auto">
          <img src="./share.png" className="h-4 w-4" />
        </Button>
      </div>
    </div>
  ))}
</div>

    </div>
  )
}

