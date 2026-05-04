'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Honor } from '@/types/sanity'

interface HonorsSectionProps {
  honors: Honor[]
}

interface ImageCarouselProps {
  images: string[]
  onClose: () => void
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (images.length === 0) return null

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60]" onClick={onClose}>
      <div className="relative max-w-4xl w-full mx-4" onClick={e => e.stopPropagation()}>
        <button 
          className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-yellow"
          onClick={onClose}
        >
          ×
        </button>
        
        <div className="relative bg-black rounded-lg overflow-hidden">
          <div className="aspect-video relative">
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
          
          {images.length > 1 && (
            <>
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 px-4 py-8 text-white text-2xl font-bold"
                onClick={goToPrevious}
              >
                ‹
              </button>
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 px-4 py-8 text-white text-2xl font-bold"
                onClick={goToNext}
              >
                ›
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/40'}`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        <div className="text-center text-white mt-4">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}

interface HonorModalProps {
  honor: Honor | null
  onClose: () => void
}

const HonorModal: React.FC<HonorModalProps> = ({ honor, onClose }) => {
  const [showCarousel, setShowCarousel] = useState(false)
  const [carouselImages, setCarouselImages] = useState<string[]>([])

  if (!honor) return null

  const handleImageClick = (images: string[]) => {
    if (images && images.length > 0) {
      setCarouselImages(images)
      setShowCarousel(true)
    }
  }

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/56 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <div 
          className="bg-cream border-5 border-black shadow-[14px_14px_0_#111] p-7 max-w-[760px] w-full max-h-[86vh] overflow-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className="absolute top-4 right-4 bg-red text-white w-10 h-10 border-3 border-black shadow-[4px_4px_0_#111] flex items-center justify-center text-xl font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#111]"
            onClick={onClose}
          >
            ×
          </button>
          <h2 className="text-3xl font-black mb-4">{honor.title}</h2>
          <p className="text-lg leading-relaxed whitespace-pre-line">{honor.description}</p>
          
          {honor.images && honor.images.length > 0 && (
            <div 
              className="mt-6 cursor-pointer"
              onClick={() => handleImageClick(honor.images || [])}
            >
              <div className="p-5 bg-black/5 border-2 border-dashed border-black/30 rounded text-center text-black/60 hover:bg-black/10 transition-colors">
                点击查看 {honor.images.length} 张图片
              </div>
            </div>
          )}
          
          {(!honor.images || honor.images.length === 0) && (
            <div className="mt-6 p-5 bg-black/5 border-2 border-dashed border-black/30 rounded text-center text-black/40">
              [证书/奖杯图片位置]
            </div>
          )}
        </div>
      </div>
      
      {showCarousel && (
        <ImageCarousel 
          images={carouselImages} 
          onClose={() => setShowCarousel(false)} 
        />
      )}
    </>
  )
}

const HonorsSection: React.FC<HonorsSectionProps> = ({ honors }) => {
  const [selectedHonor, setSelectedHonor] = useState<Honor | null>(null)

  return (
    <section className="mt-[72px]">
      <h2 className="inline-block bg-black text-white px-4 py-2 font-black text-xl -rotate-1 mb-6">
        比赛与认可
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
        {honors.map((honor) => (
          <div 
            key={honor._id}
            className="border-3 border-black bg-cream shadow-[5px_5px_0_#111] p-[18px] cursor-pointer hover:-translate-y-1 hover:-rotate-1 transition-all"
            onClick={() => setSelectedHonor(honor)}
          >
            <strong className="text-base">{honor.title}</strong>
            <p className="text-sm mt-1 whitespace-pre-line">{honor.description}</p>
          </div>
        ))}
      </div>

      <HonorModal honor={selectedHonor} onClose={() => setSelectedHonor(null)} />
    </section>
  )
}

export default HonorsSection
