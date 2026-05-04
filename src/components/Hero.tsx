'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Hero as HeroType, Product } from '@/types/sanity'

interface HeroProps {
  hero: HeroType
  products: Product[]
  onProductClick: (product: Product) => void
}

interface CubeFace {
  id: string
  title: string
  subtitle: string
  color: string
  textColor: string
  transform: string
}

const Hero: React.FC<HeroProps> = ({ hero, products, onProductClick }) => {
  const [rotation, setRotation] = useState({ x: -25, y: 45 })
  const [isDragging, setIsDragging] = useState(false)
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 })
  const cubeRef = useRef<HTMLDivElement>(null)
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null)

  const faces: CubeFace[] = [
    { id: 'product-1', title: '小帮主任', subtitle: 'AI 班主任助手', color: 'bg-yellow', textColor: '', transform: 'rotateY(0deg) translateZ(105px)' },
    { id: 'product-2', title: '泡泡阅读侠', subtitle: '校园阅读助手', color: 'bg-blue', textColor: 'text-white', transform: 'rotateY(90deg) translateZ(105px)' },
    { id: 'product-3', title: '待办神签', subtitle: '修仙风防拖延', color: 'bg-red', textColor: 'text-white', transform: 'rotateY(180deg) translateZ(105px)' },
    { id: 'product-4', title: '无敌花题集', subtitle: 'AI 题库工具', color: 'bg-green', textColor: '', transform: 'rotateY(-90deg) translateZ(105px)' },
    { id: 'product-5', title: 'Wiki知识管理', subtitle: 'AI 分身', color: 'bg-pink', textColor: '', transform: 'rotateX(90deg) translateZ(105px)' },
    { id: 'product-6', title: '加入我们', subtitle: 'Woder AI', color: 'bg-white', textColor: '', transform: 'rotateX(-90deg) translateZ(105px)' },
  ]

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setLastPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const deltaX = e.clientX - lastPos.x
    const deltaY = e.clientY - lastPos.y
    setRotation(prev => ({
      x: prev.x - deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }))
    setLastPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    setIsDragging(true)
    setLastPos({ x: touch.clientX, y: touch.clientY })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const touch = e.touches[0]
    const deltaX = touch.clientX - lastPos.x
    const deltaY = touch.clientY - lastPos.y
    setRotation(prev => ({
      x: prev.x - deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }))
    setLastPos({ x: touch.clientX, y: touch.clientY })
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleFaceClick = (faceId: string) => {
    const product = products.find(p => p._id === faceId)
    if (product) {
      onProductClick(product)
    }
  }

  useEffect(() => {
    const startAutoRotate = () => {
      autoRotateRef.current = setInterval(() => {
        setRotation(prev => ({
          x: prev.x - 0.3,
          y: prev.y + 0.5
        }))
      }, 16)
    }

    if (!isDragging) {
      startAutoRotate()
    } else {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current)
      }
    }

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current)
      }
    }
  }, [isDragging])

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-[42px] items-center min-h-[620px]">
      <div>
        <h1 className="text-[clamp(42px,7vw,88px)] leading-[0.95] mb-6 tracking-tight text-shadow-yellow font-black">
          {hero.title.split('\n').map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
          <span className="block text-[clamp(18px,2.5vw,32px)] mt-4 tracking-wide font-mono text-shadow-none">
            {hero.subtitle}
          </span>
        </h1>

        <div className="relative bg-cream border-4 border-black shadow-[8px_8px_0_#111] p-6 max-w-[640px] text-lg leading-[1.8] whitespace-pre-line">
          <div className="absolute -top-4 left-[22px] bg-red text-white border-3 border-black px-3 py-1 text-xs font-black -rotate-1">
            核心理念
          </div>
          {hero.manifesto}
        </div>

        <div className="flex flex-wrap gap-[14px] mt-[26px]">
          <button className="px-[18px] py-[12px] bg-green border-3 border-black shadow-[5px_5px_0_#111] font-black text-base hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[1px_1px_0_#111] transition-all">
            看看我能做什么
          </button>
          <button className="px-[18px] py-[12px] bg-white border-3 border-black shadow-[5px_5px_0_#111] font-black text-base hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[1px_1px_0_#111] transition-all">
            工作坊详情
          </button>
        </div>
      </div>

      <div 
        className="relative min-h-[520px] flex items-center justify-center perspective-[800px] select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute w-[430px] h-[430px] border-3 border-dashed border-black/35 rounded-full animate-spin-slow pointer-events-none"></div>
        <div className="absolute w-[330px] h-[330px] border-3 border-dashed border-black/35 rounded-full animate-spin-reverse pointer-events-none"></div>
        
        <div className="absolute top-[34px] left-[18px] w-[62px] h-[62px] bg-red border-4 border-black shadow-[5px_5px_0_#111] rotate-[14deg] animate-drift pointer-events-none"></div>
        <div className="absolute bottom-[72px] right-[8px] w-[90px] h-[48px] bg-yellow border-4 border-black shadow-[5px_5px_0_#111] -rotate-[9deg] animate-drift-delay-2s pointer-events-none"></div>
        <div className="absolute bottom-[30px] left-[42px] w-[72px] h-[72px] bg-blue rounded-full border-4 border-black shadow-[5px_5px_0_#111] animate-drift-delay-4s pointer-events-none"></div>

        <div 
          ref={cubeRef}
          className="relative w-[210px] h-[210px] cursor-grab active:cursor-grabbing"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: isDragging ? 'none' : 'transform 0.1s ease-out'
          }}
        >
          {faces.map((face) => (
            <div
              key={face.id}
              className={`absolute w-[210px] h-[210px] ${face.color} ${face.textColor} border-5 border-black shadow-[10px_10px_0_rgba(17,17,17,0.75)] flex flex-col items-center justify-center text-center p-[18px] font-black text-2xl cursor-pointer hover:brightness-105`}
              style={{
                transform: face.transform,
                backfaceVisibility: 'hidden'
              }}
              onClick={(e) => {
                e.stopPropagation()
                handleFaceClick(face.id)
              }}
            >
              {face.title}
              <small className="block mt-2 text-xs font-mono opacity-75">{face.subtitle}</small>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm text-black/50 font-mono mt-4">
          拖拽旋转
        </div>
      </div>
    </section>
  )
}

export default Hero
