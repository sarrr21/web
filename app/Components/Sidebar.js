'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, PlusCircle, Activity, MoreHorizontal } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-[250px] flex-col border-r bg-white">
      <div className="flex justify-center h-16 items-center border-b p-16">
        <Image
          src="/image.png"
          alt="Seattle Pulse Logo"
          width={100}
          height={60}
          className="rounded-full"
          priority
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 ">
      <Button
  variant="ghost"
  className={cn(
    "w-full justify-start gap-2",
    pathname === "/feed" ? "bg-black text-white py-2" : "bg-white text-black"
  )}
  asChild
>
  <Link href="/feed">
  <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke={pathname === "/feed" ? "white" : "black"}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    Feed
  </Link>
</Button>

        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-2",
            pathname === "/add-story" ? "bg-black text-white" : "bg-white text-black"
          )}
          asChild
        >
          <Link href="/add-story">
            <PlusCircle className="h-5 w-5" />
            Add Your Story
          </Link>
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-2",
            pathname === "/my-pulse" ? "bg-black text-white" : "bg-white text-black"
          )}
          asChild
        >
          <Link href="/my-pulse">
            <Activity className="h-5 w-5" />
            My Pulse
          </Link>
        </Button>
      </nav>

      {/* User Profile */}
      <div className="border-t p-2">
        <div className="flex items-center gap-2 p-2">
          <Image
            src="/img.png"
            alt="Profile picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex-1 truncate">
            <div className="font-medium">John</div>
            <div className="text-xs text-muted-foreground">@johndoeaccount</div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

