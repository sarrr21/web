"use client"

import { useState } from "react"
import { Upload, MessageSquare, MapPin, Eye, Check, MoreHorizontal, Search, Bell, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    id: 1,
    name: "Upload Media",
    icon: "./cloud.png",
  },
  {
    id: 2,
    name: "Add Caption",
    icon: "./Text.png",
  },
  {
    id: 3,
    name: "Tag Location",
    icon: "./Map.png",
  },
  {
    id: 4,
    name: "Preview",
    icon: "./Check.png",
  },
]

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    media: null,
    caption: "",
    location: "",
  })

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const renderFormContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
          <div className="mb-8">
          <h2 className="mb-2 text-center text-xl text-[#0C1024] font-bold">Upload Media</h2>
          <p className="text-center text-[#5D6778] text-sm ">Select a photo or video from your gallery to share your<br/> story. Make it memorable!</p>
        </div>
            <div className="rounded-3xl  border-2 border-dashed border-[#A5A9E9] max-w-[934px] h-[466px] bg-[#E1E2F8]">
              <div className="text-center p-24 ">
                <img src="./Upload.png" className="mx-auto h-12 w-12 " />
                <h3 className=" text-lg font-bold mt-12">Choose a file or drag & drop it here</h3>
                <p className="mt-2 text-sm text-gray-500">VLC, MP3, GIF, PNG or JPEG formats, up to 50MB</p>
                <button className="mt-12 rounded-xl border-black border-2 w-[156px] h-12 px-3 py-2 text-sm font-medium  ">
                  Browse Files
                </button>
              </div>
            </div>
            </div>
        )
      case 2:
        return (
          <div>
          <div className="mb-8">
      <h2 className="mb-2 text-center text-xl text-[#0C1024] font-bold">Add Caption</h2>
      <p className="text-center  text-sm "><span className="text-[#5D6778]">Write a caption that describes your story. keep it short and<br/>
      engaging or skip this stage by clicking</span> <span><strong>"Next"</strong></span>  </p>
    </div>
        <div className="space-y-4">
          <h1 className="text-md font-normal">Caption</h1>
          <textarea
            className="min-h-[402px] w-[934px] rounded-lg border p-4"
            placeholder="Write your caption here..."
            value={formData.caption}
            onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
          />
          <div className="text-right text-sm text-gray-500">0 / 50</div>
        </div>
        </div>
        )
      case 3:
        return (
          <div>
               <div className="mb-8 py-6">
          <h2 className="mb-2 text-center text-xl text-[#0C1024] font-bold">Tag Location</h2>
          <p className="text-center text-[#5D6778] text-sm ">Add your location or the loaction of your post </p>
        </div>
            <div className="flex gap-4 w-[934px] h-[486px]">
              
                <div className="w-1/2">
                  <img
                    src="./Mapp.png"
                    alt="Map"
                    className="h-full w-full object-cover"
                  />
                </div>
              <div className="w-1/2">
              <h1 className="text-md font-normal mb-2">Location</h1>
              <div className="relative w-full">
      {/* Location Icon */}
      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />

      {/* Input Field */}
      <input
        type="text"
        className="w-full rounded-full border py-3 pl-12" 
        placeholder="Seattle"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
      />
    </div>
    <p className="  text-sm mt-6 "><span className="text-[#5D6778] ">Your location has been detected automatically. <br/> click </span> <span><strong>"Confrim Loctaion"</strong></span>   
    <span className="text-[#5D6778]">to confrim it or update it to <br/>reflect where your story took place.</span></p>
            </div>
            </div>
            </div>
        )
      case 4:
        return (
          <div >

          <div className="mb-8 py-6">
      <h2 className="mb-2 text-center text-xl text-[#0C1024] font-bold">Preview</h2>
      <p className="text-center text-[#5D6778] text-sm ">Take one last look at your story. if everything looks good,<br /> click'Post Story' to share it with the world. need changes?<br/> Go back and edit!  </p>
    </div>
    <div className=" max-w-[681px] h-[446px] mx-auto">
    <div  className="rounded-lg border  p-4  text-card-foreground ">
  {/* Post Header */}
  <div className="flex items-center justify-between ">
    <div className="flex items-center p-2 gap-2 font-semibold text-lg">
      <img
        src="./img.png"
        alt="Post"
        className="rounded-full w-10 h-10"
      />
      <div>
        <h3 className="font-semibold text-md">Komo News</h3>
        
      </div>
    </div>
    <div className="flex  gap-2">
      <div className="flex items-center text-sm text-muted-foreground">
        <MapPin className="mr-1 h-4 w-4" />
        <h1>Seattle</h1>
      </div>
      <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
        </Button>
    </div>
  </div>

  <div className="px-4 w-full">
    <img
      src="./feed1.png"
      alt="Post image"
      fill
      className="h-60 w-full"
    />
  </div>

  {/* Post Content */}
  <div className="px-4 py-2">
    <p className="text-[#4B5669] ">Federal Ways sees 11% drop in overall crime as drug arrests surge by more than 402%</p>
  </div>

  
 </div>

 
</div>
        </div>
        )
      default:
        return null
    }
  }

  return (
    <div>
       <div className="flex items-center justify-between px-16 pt-6 pb-6">
        <div>
        <h1 className="text-2xl font-bold">Add your story</h1>
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
      
    <div className="max-w-[998px] h-[840px] mx-auto p-6 border rounded-3xl">
      <div className="mb-8">
        <div className="flex justify-center items-center gap-6 border-b ">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-2 mb-4 ">
             <div
  className={`flex items-center justify-center w-10 h-10 rounded-full ${
    step.id < currentStep
      ? "bg-[#E1E2F8] border-2 border-[#4C68D5] text-white"
      : step.id === currentStep
        ? "bg-[#4C68D5] text-white"
        : "bg-gray-100 text-gray-500"
  }`}
>
  {step.id < currentStep ? (
    <img src="./seen.png" className="w-5 h-5" />
  ) : (
    <img
      src={step.icon}
      className={`w-6 h-6 ${step.id === currentStep ? "invert brightness-0" : ""}`}
    />
  )}
</div>

              <div className="ml-3">
                <p
                  className={`text-sm font-medium ${
                    step.id < currentStep
                      ? "text-[#4C68D5]"
                      : step.id === currentStep
                        ? "text-[#4C68D5]"
                        : "text-gray-500"
                  }`}
                >
                  {step.name}
                </p>
              </div>
              {index < steps.length - 1 && (
  <img
    src={step.id < currentStep ? "./Arroww.png" : "./Arrow.png"}
    className="w-12"
    alt="Step Arrow"
  />
)}

            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        {renderFormContent()}

        <div className="mt-8 flex justify-end gap-4 ">
          {currentStep !== 1 && (
            <Button className="w-40 h-12 rounded-xl bg-white hover:bg-white border-2 border-black flex items-center gap-4 px-4" onClick={handleBack}>
             <ArrowLeft className="w-5 h-5 text-black" />
            <span className="text-black">Back</span>
          </Button>
          )}

          {currentStep === 1 && (
            
            <div className="flex justify-end">
            <Button className="w-40 h-12 rounded-xl bg-black hover:bg-black flex items-center gap-4 px-4" onClick={handleNext}>
              <span>Use Media</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          
        
          )}

          {currentStep === 2 && 
          (
            <Button className="w-40 h-12 rounded-xl bg-black hover:bg-black flex items-center gap-4 px-4" onClick={handleNext}>
              <span>Next</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          )}

          {currentStep === 3 && (
            <Button className="w-40 h-12 rounded-xl bg-black hover:bg-black flex items-center gap-4 px-4" onClick={handleNext}>
            <span>Confrim Location</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
          )}

          {currentStep === 4 && (
             <Button className="w-40 h-12 rounded-xl bg-black hover:bg-black flex items-center gap-4 px-4" onClick={() => console.log("Story added!", formData)}>
             <span>Post Story</span>
           </Button>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}

