"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OnboardingSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Pick a Location, See the Pulse",
      description:
        "Choose any location and explore posts from that area. Switch /n places anytime to stay updated on what matters to you.",
      image: "https://s3-alpha-sig.figma.com/img/85a8/ebe0/4b98df60f601feee9618fb9a04e2fe13?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rzuchr7SCIKykfIuBMWXB1I2t2Og9tw5y9zL8ulEuL-Znge-unZyLsVGTO-oLGD0vRVO2ToIr1zPH~jtOkuvkBTrQtiPTj0ykIAIXy0KQMRTgpRZF8iLx3EVSaQKResA4bKD7gk2CtSM1PhckQEKOYfWTzWFaI9b3Pa0ziJKsfPpuN2ZP62MB3Mc12b4CaNGTZ7GBsLMATXXngF6D9hZRMcZQbrK62unnuX8wDjlCRv28Ez-FwwKFnkzQU4y8wTkX-0ki7VXM5ZW8QoPCbPRdoFumxM72nEEMXtwymTiod-L-YMZV-SRiZAXiyTPALYGwXH2sSfJlNKUI8EgBa4Ycw__",
      button: "Next",
    },
    {
      title: "Engage, Share, Repost",
      description:
        "Like, comment, and share what interests you. Repost content to 'My Pulse' and keep track of your activity.",
      image: "https://s3-alpha-sig.figma.com/img/50df/7f02/462fdfa3ffaad685e14eaa2e7b298828?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ORpYnIpJaULPWt5JZ6VUJah2ZwlPYN7yGG~jZd60jLFhR5DZD5WZVCvScZ09mgakzS7w7Tepvg48Rl8WNKgdWXuy90RcTNgATE77lkuNJDYsblvTqC5QUaemiTILazrFr5AU7LFpWkA5lFJCBXzH3Tn86k3OZ58VkmfSRB8OviuUpaRZdLDvGMeiDgiwcLiGDsG9AQq3BvSyXpfowyWRS7DpvE0rygHvZivp30BEt7R6rdxOO7OpLUnbinYwif2jz3ZnoXaI4ekohJM2I4EOjXOw7DhOkha2ihIaHlp7SaW2MAFAZn2AoQ5k-Ok8VgwcRg3gydbsfDZlGniG8PZkTA__",
      button: "Next",
    },
    {
      title: "Chat & Connect",
      description:
        "Talk one-on-one or in groups. Stay connected with people nearby or in different locations worldwide.",
      image: "https://s3-alpha-sig.figma.com/img/6619/7030/8be2404e8ea4e184534ef44f42ec79a9?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P2N6xWr~8Sz5o3SHOQcY9XwOwx5cQvTxMZy2nyu6WEZrz~MsvfaMXSJTFpwyIGNXoqNSwwTROpfd1KbWU9nZ9LrU0w7HjHXlWpO9cafIOz5~nUze3KcWWwlGYNr2zFrOFhbbKxLgFT2Xj8eoCdJk~TchgVlFyX3kYorGXrYbLX-u4ADEEWikEz1luKVjgQDLdgJ7IqEOKqQlwDDu0uLvIWCb675hN7CxywJW8AhFOdgeVL7748~Q0CTrgen2O3Qm0BzCCke4ikmUBktoe4ibdTmbmOIecVBlQuTspkRop0~DSG9zMSF9fXZIW33M~oLO34e5Z-E04lyvAlUrRzCDpA__",
      button: "Get Started",
    },
  ]

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-[1060] h-[567px] w-full relative overflow-hidden shadow-xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7Rnib1VInZZ2sA54lv9DnBXSne8jBr.png"
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>

        <div className="flex  gap-8 p-8 pt-12 items-center">
            <div>
          <div className="space-y-4 w-1/2 pt-24 px-8">
            <h1 className="text-4xl font-semibold whitespace-nowrap">{currentSlideData.title}</h1>
            <p className="text-gray-600 text-sm">{currentSlideData.description}</p>
          </div>
          <div className="flex justify-between items-center p-8 mt-40">
            <div className="flex gap-2 ">
          <Button
            onClick={handleNext}
            className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-8 flex items-center gap-2"
          >
            
            <ArrowRight className="w-5 h-5" />
          </Button>
          <span><p className="mt-4 font-semibold">{currentSlideData.button}</p></span>
          </div>
          <Button variant="ghost" className="text-gray-500 hover:text-gray-700">
            Skip
          </Button>
        </div>
          </div>
          <div className="relative w-1/2">
            <img
              src={currentSlideData.image || "/placeholder.svg"}
              alt="Feature preview"
              className="w-[365px] h-[464px] rounded-lg shadow-lg"
            />
          </div>
        </div>

        
      </div>
    </div>
  )
}

