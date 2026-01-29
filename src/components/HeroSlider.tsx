
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: '/images/slider1-fiberinternetonline.my.gif',
    alt: '600 Mbps fibreinternet',
    link: '#cards-section'
  },
  {
    id: 2,
    image: '/images/slider2-fiberinternetonline.gif',
    alt: 'Business banner new 1',
    link: '#cards-section'
  }
]

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative w-full bg-white group border-b border-gray-100">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div className="relative flex-[0_0_100%] min-w-0" key={slide.id}>
                <a href={slide.link} className="block w-full relative"> 
                 {/* 
                    Using width 0 / height 0 with w-full h-auto is the best way 
                    to handle varying aspect ratio responsive images without predefined container height
                 */}
                 <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover max-h-[750px]"
                  priority={slide.id === 1}
                  unoptimized={slide.image.endsWith('.gif')} // Helpful for animated GIFs sometimes
                />
                
               
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:block"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:block"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'bg-[#E6007E] w-8' 
                : 'bg-gray-300 w-2.5 hover:bg-gray-400'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
