import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle } from 'lucide-react'
const images = [
  { id: "1", src: "/feed1.png", alt: "Seattle Skyline",  location: "Seattle" },
  
  { id: "2", src: "/Frame1.png", alt: "Seattle Skyline",  location: "Seattle" },
  { id: "3", src: "/Frame2.png", alt: "Seattle Skyline",  location: "Seattle" },
  { id: "4", src: "/Frame3.png", alt: "Seattle Skyline",  location: "Seattle" },
  { id: "5", src: "/Frame4.png", alt: "Seattle Skyline",  location: "Seattle" },
  { id: "6", src: "/Frame5.png", alt: "Seattle Skyline",  location: "Seattle" },
  
  ];

const Photo = () => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative bg-gray-200  overflow-hidden shadow-md group"
        >
          
          <Image
            src={image.src}
            alt={image.alt}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />

          
          <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white px-2 py-8">
            {image.location && (
              <p className="text-sm font-medium text-center">@ {image.location}</p>
            )}
            <div className="flex justify-center">
            <Button variant="ghost" size="sm" className="gap-2">
          <Heart className="h-4 w-4" />
          {30}
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <MessageCircle className="h-4 w-4" />
          {20}
        </Button>
        </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photo;
