'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Product } from '@/types/sanity'

interface ProductGridProps {
  products: Product[]
  selectedProduct?: Product | null
  onCloseProductModal?: () => void
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

interface ModalProps {
  product: Product | null
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  const [showCarousel, setShowCarousel] = useState(false)
  const [carouselImages, setCarouselImages] = useState<string[]>([])

  if (!product) return null

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
          <h2 className="text-2xl font-black mb-4">{product.modalTitle || product.title}</h2>
          <div 
            className="text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: product.modalBody || product.description }}
          />
          
          {product.images && product.images.length > 0 && (
            <div 
              className="mt-6 cursor-pointer"
              onClick={() => handleImageClick(product.images || [])}
            >
              <div className="p-5 bg-black/5 border-2 border-dashed border-black/30 rounded text-center text-black/60 hover:bg-black/10 transition-colors">
                点击查看 {product.images.length} 张图片
              </div>
            </div>
          )}
          
          {(!product.images || product.images.length === 0) && (
            <div className="mt-6 p-5 bg-black/5 border-2 border-dashed border-black/30 rounded text-center text-black/40">
              [产品截图/界面图片位置]
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

const ProductGrid: React.FC<ProductGridProps> = ({ products, selectedProduct, onCloseProductModal }) => {
  const [internalSelectedProduct, setInternalSelectedProduct] = useState<Product | null>(null)

  const activeProduct = selectedProduct !== undefined ? selectedProduct : internalSelectedProduct
  const handleClose = onCloseProductModal || (() => setInternalSelectedProduct(null))

  const sortedProducts = [...products].sort((a, b) => a.order - b.order)

  const bgColors = [
    'bg-[#fff0a8]',
    'bg-[#bdf7d0]',
    'bg-[#b9d4ff]',
    'bg-[#ffc1dc]',
    'bg-[#d7c2ff]',
    'bg-white'
  ]

  return (
    <section className="mt-[72px]" id="products">
      <h2 className="inline-block bg-black text-white px-4 py-2 font-black text-xl -rotate-1 mb-6">
        我做过的小产品
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedProducts.map((product, index) => (
          <article 
            key={product._id}
            className={`product-card ${bgColors[index % bgColors.length]} min-h-[230px] border-4 border-black shadow-[8px_8px_0_#111] p-5 cursor-pointer relative overflow-hidden hover:-translate-y-2 hover:-rotate-1 transition-all`}
            onClick={() => {
              if (onCloseProductModal) {
                onCloseProductModal()
              }
              setInternalSelectedProduct(product)
            }}
          >
            <div className="font-mono text-sm font-black mb-[18px]">PRODUCT {String(product.order).padStart(2, '0')}</div>
            <h3 className="text-[26px] font-black mb-[14px] leading-[1.1]">{product.title}</h3>
            <p className="text-[15px] leading-[1.75] max-w-[92%] font-normal">{product.description}</p>
            <div className="absolute w-[100px] h-[100px] right-[-30px] bottom-[-30px] bg-black/8 border-4 border-black transform rotate-[24deg] pointer-events-none"></div>
          </article>
        ))}
      </div>

      <Modal product={activeProduct} onClose={handleClose} />
    </section>
  )
}

export default ProductGrid
