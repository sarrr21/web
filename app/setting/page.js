"use client"
import { Button } from "@/components/ui/button"
import { Delete } from "lucide-react"
import { useState } from "react"
import DeleteAccountModal from "../Components/delete-modal"
import { Search, Bell,  Trash} from "lucide-react"
import Image from 'next/image';

export default function AccountSettings() {
    const [showModal, setShowModal] = useState(false)
  return (
    <div className=" mx-auto px-14 py-8">
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
        <div className="relative w-20 h-20">
      
      <Image
        src="/img.png" 
        alt="Profile"
        width={80}
        height={80}
        className="rounded-full border-2 border-white"
      />

      {/* Edit Button */}
      <button className="absolute bottom-0 right-0 bg-black p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 3.487a2.121 2.121 0 0 1 3 3l-10.5 10.5a2 2 0 0 1-.878.518l-3.5 1a1 1 0 0 1-1.238-1.238l1-3.5a2 2 0 0 1 .518-.878l10.5-10.5Z"
          />
        </svg>
      </button>
    </div>
      <div className="grid gap-8 md:grid-cols-2 shadow-xl rounded-xl p-4 mt-4">
        
        <div className="space-y-2 ">
          <h2 className="text-xl font-semibold">General</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-full  focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="@johndoeaccount"
                className="w-full px-3 py-2 border border-gray-300 rounded-full  focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <textarea
                id="bio"
                rows="4"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <Button className="bg-black text-white hover:bg-gray-800">Save Changes</Button>
          </form>
        </div>

        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Account</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Delete Account</h3>
            <p className="text-gray-600">
              This action is irreversible and will permanently delete all your data associated with the account.
            </p>
            <Button
      onClick={() => setShowModal(true)}
      className="flex items-center gap-2 px-4 py-2 bg-[#b81616] text-white rounded-lg hover:bg-red-600"
      variant="destructive"
    >
      <img src="/Trash.png" className="w-5 h-5" />
      Delete My Account
    </Button>
            {showModal && <DeleteAccountModal onClose={() => setShowModal(false)} />}
          </div>
        </div>
      </div>
    </div>
  )
}

