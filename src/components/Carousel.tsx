import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { X } from "lucide-react"

import image1 from "@/assets/1.webp"
import image2 from "@/assets/2.webp"
import image3 from "@/assets/3.webp"
import image4 from "@/assets/4.webp";

const images = [
  image1,
  image2,
  image3,
  image4
]

export function CarouselDemo() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [isFullScreen, setIsFullScreen] = React.useState(false)

  const toggleFullScreen = React.useCallback(() => {
    if (!api) return

    if (!isFullScreen) {
      setIsFullScreen(true)
      api.plugins().autoplay.stop()
    } else {
      setIsFullScreen(false)
      api.plugins().autoplay.play()
    }
  }, [api, isFullScreen])

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullScreen) {
        toggleFullScreen()
      }
    }

    if (isFullScreen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isFullScreen, toggleFullScreen])

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      plugins={[Autoplay({ delay: 2000 })]}
      opts={{ loop: true }} // Added loop so it plays infinitely
      className={`w-full h-full transition-all duration-300 ${
        isFullScreen ? "fixed inset-0 z-[100] bg-black" : ""
      }`}
    >
      <CarouselContent className="h-full ml-0">
        {images.map((src, index) => (
          <CarouselItem 
            key={index} 
            className="h-full pl-0 cursor-pointer" 
            onClick={toggleFullScreen}
          >
            <img 
              src={src} 
              alt={`Slide ${index + 1}`} 
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
              className={`w-full h-full transition-all duration-300 ${
                isFullScreen ? "object-contain md:object-contain" : "object-cover"
              }`} 
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation()
              api?.scrollTo(index)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {isFullScreen && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            toggleFullScreen()
          }}
          className="absolute top-6 right-6 z-[110] p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
        >
          <X size={32} />
        </button>
      )}
    </Carousel>
  )
}

export default CarouselDemo;