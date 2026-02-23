import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import image1 from "@/assets/jacuzzi.webp"
import image2 from "@/assets/gym.webp";
import image3 from "@/assets/swimming-pool.webp";
import image4 from "@/assets/club.webp";
import image5 from "@/assets/running.webp";



const amenities = [
  { title: "Modern Gym", image: image2, description: "Fully equiped gym amenities" },
  { title: "Swimming Pool", image: image3, description: "Rejuvenate in our crystal clear pool" },
  { title: "Running Track", image: image5, description: "Dedicated tracks for your morning jogs" },
  { title: "Luxurious Club House", image: image4, description: "A perfect space for recreation" },
  { title: "Jacuzzi", image: image1, description: "Premium jacuzzi in every unit" },
]

export function AmenitiesCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {amenities.map((item, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-gray-200 text-sm mt-2">{item.description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious className="left-8 bg-white/10 hover:bg-white/20 text-white border-white/20" />
        <CarouselNext className="right-8 bg-white/10 hover:bg-white/20 text-white border-white/20" />
      </div>
    </Carousel>
  )
}

export default AmenitiesCarousel;