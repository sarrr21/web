"use client"
import { useState } from "react";
import { RefreshCw, MapPin, Edit3 } from "lucide-react";
import LocationMap from "./location-map";
import PhotoGrid from "./post";
import Photo from "./repost";
import Image from "next/image";


export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="mt-6">
      <div className="w-full flex justify-center border-t bg-transparent space-x-6">
        <button
          onClick={() => setActiveTab("posts")}
          className={`${
            activeTab === "posts" ? "border-t-2 border-primary text-black" : ""
          } rounded-none shadow-n flex items-center gap-2 text-[#677080]`}
        >
           <Image
               src="/feed.png"
               alt="Seattle Pulse Logo"
               width={20}
               height={20}
               className={`${
                activeTab === "posts" ? " text-black" : ""
              }  text-[#677080]`}
               priority
           />
          <span className="font-semibold">Posts</span>
        </button>
        <button
          onClick={() => setActiveTab("reposts")}
          className={`${
            activeTab === "reposts" ? "border-t-2 border-primary text-black" : ""
          } rounded-none flex items-center gap-2 text-[#677080]`}
        >
          <RefreshCw size={16} />
          <span className="font-semibold">Reposts</span>
        </button>
        <button
          onClick={() => setActiveTab("location")}
          className={`${
            activeTab === "location" ? "border-t-2 border-primary text-black" : ""
          } rounded-none flex items-center gap-2 text-[#677080]`}
        >
          <MapPin size={16} />
          <span className="font-semibold">Location Map</span>
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "posts" && <PhotoGrid />}
        {activeTab === "reposts" && <Photo />}
        {activeTab === "location" && <LocationMap />}
      </div>
    </div>
  );
}
