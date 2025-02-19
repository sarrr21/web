'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PlusCircle, Activity, MoreHorizontal } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'



export function Sidebar() {
  const pathname = usePathname()
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const { bottom, height } = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if dropdown fits below; otherwise, open above.
      setIsTop(bottom + height > viewportHeight);
    }
  }, [isOpen]);


  

  return (
    <div className="flex h-full w-[250px] flex-col border-r bg-white">
      {/* Logo Section */}
      <div className="flex justify-center h-16 items-center border-b px-4 py-16">
        <Image
          src="/image.png"
          alt="Seattle Pulse Logo"
          width={100}
          height={60}
          className="rounded-full"
          priority
        />
      </div>

      {/* Navigation Section */}
      <nav className="flex-1">
        <Button
          variant="ghost"
          className={cn(
            'w-full justify-start gap-2 py-2',
            pathname === '/feed' ? 'bg-black text-white' : 'bg-white text-black'
          )}
          asChild
        >
          <Link href="/feed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke={pathname === '/feed' ? 'white' : 'black'}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
            Feed
          </Link>
        </Button>

        <Button
          variant="ghost"
          className={cn(
            'w-full justify-start gap-2 py-2',
            pathname === '/add-story' ? 'bg-black text-white' : 'bg-white text-black'
          )}
          asChild
        >
          <Link href="/story">
            <PlusCircle className="h-5 w-5" />
            Add Your Story
          </Link>
        </Button>

        <Button
          variant="ghost"
          className={cn(
            'w-full justify-start gap-2 py-2',
            pathname === '/my-pulse' ? 'bg-black text-white' : 'bg-white text-black'
          )}
          asChild
        >
          <Link href="/pulse">
            <Activity className="h-5 w-5" />
            My Pulse
          </Link>
        </Button>
      </nav>

     
      <div className="border-t p-4">
        <div className="flex items-center gap-2">
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
          <div className="relative">
          <div className="relative">
      
      <div className="flex items-center gap-2 p-2">
        
       
      <Button variant="ghost" size="icon" onClick={toggleDropdown}>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
      </div>

     
      {isOpen && (
        <div
          className="absolute bottom-full right-0 mb-2 w-48 bg-white border rounded-lg shadow-lg"
        >
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 19a1 1 0 01-.707-1.707l10.5-10.5a1 1 0 011.414 0l1.5 1.5a1 1 0 010 1.414l-10.5 10.5a1 1 0 01-.707.293z"
                />
              </svg>
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 17v-6m2 6v-6m-5 6v-6m2 6v-6m-2 0a2 2 0 110-4h6a2 2 0 110 4v6"
                />
              </svg>
              Settings
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
    </div>
      </div>
    </div>
    </div>
  )
}
