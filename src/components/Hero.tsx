'use client'

import React, { useEffect, useRef, useState } from 'react'
import { CubeFaceContent, SiteContent } from '@/types/siteContent'

interface HeroProps {
  hero: SiteContent['hero']
  cubeFaces: CubeFaceContent[]
  onOpenModal: (modalKey: string) => void
  onScrollToProducts: () => void
}

const Hero: React.FC<HeroProps> = ({ hero, cubeFaces, onOpenModal, onScrollToProducts }) => {
  const [rotation, setRotation] = useState({ x: -25, y: 45 })
  const [isDragging, setIsDragging] = useState(false)
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 })
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true)
    setLastPos({ x: event.clientX, y: event.clientY })
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = event.clientX - lastPos.x
    const deltaY = event.clientY - lastPos.y

    setRotation((previous) => ({
      x: previous.x - deltaY * 0.5,
      y: previous.y + deltaX * 0.5,
    }))
    setLastPos({ x: event.clientX, y: event.clientY })
  }

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0]
    setIsDragging(true)
    setLastPos({ x: touch.clientX, y: touch.clientY })
  }

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!isDragging) return

    const touch = event.touches[0]
    const deltaX = touch.clientX - lastPos.x
    const deltaY = touch.clientY - lastPos.y

    setRotation((previous) => ({
      x: previous.x - deltaY * 0.5,
      y: previous.y + deltaX * 0.5,
    }))
    setLastPos({ x: touch.clientX, y: touch.clientY })
  }

  useEffect(() => {
    if (!isDragging) {
      autoRotateRef.current = setInterval(() => {
        setRotation((previous) => ({
          x: previous.x - 0.3,
          y: previous.y + 0.5,
        }))
      }, 16)
    } else if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current)
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
          {hero.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="block text-[clamp(18px,2.5vw,32px)] mt-4 tracking-wide font-mono text-shadow-none">
            {hero.subtitle}
          </span>
        </h1>

        <div className="relative bg-cream border-4 border-black shadow-[8px_8px_0_#111] p-6 max-w-[640px] text-lg leading-[1.8]">
          <div className="absolute -top-4 left-[22px] bg-red text-white border-3 border-black px-3 py-1 text-xs font-black -rotate-1">
            核心理念
          </div>
          {hero.manifesto.map((line) => (
            <p key={line} className="mb-1 last:mb-0">
              {line}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-[14px] mt-[26px]">
          <button
            className="px-[18px] py-[12px] bg-green border-3 border-black shadow-[5px_5px_0_#111] font-black text-base hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[1px_1px_0_#111] transition-all"
            onClick={onScrollToProducts}
          >
            {hero.primaryButtonLabel}
          </button>
          <button
            className="px-[18px] py-[12px] bg-white border-3 border-black shadow-[5px_5px_0_#111] font-black text-base hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[1px_1px_0_#111] transition-all"
            onClick={() => onOpenModal('workshop')}
          >
            {hero.secondaryButtonLabel}
          </button>
        </div>
      </div>

      <div
        className="relative min-h-[520px] flex items-center justify-center perspective-[800px] select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
      >
        <div className="absolute w-[430px] h-[430px] border-3 border-dashed border-black/35 rounded-full animate-spin-slow pointer-events-none" />
        <div className="absolute w-[330px] h-[330px] border-3 border-dashed border-black/35 rounded-full animate-spin-reverse pointer-events-none" />

        <div className="absolute top-[34px] left-[18px] w-[62px] h-[62px] bg-red border-4 border-black shadow-[5px_5px_0_#111] rotate-[14deg] animate-drift pointer-events-none" />
        <div className="absolute bottom-[72px] right-[8px] w-[90px] h-[48px] bg-yellow border-4 border-black shadow-[5px_5px_0_#111] -rotate-[9deg] animate-drift-delay-2s pointer-events-none" />
        <div className="absolute bottom-[30px] left-[42px] w-[72px] h-[72px] bg-blue rounded-full border-4 border-black shadow-[5px_5px_0_#111] animate-drift-delay-4s pointer-events-none" />

        <div
          className="relative w-[210px] h-[210px] cursor-grab active:cursor-grabbing"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
          }}
        >
          {cubeFaces.map((face) => (
            <button
              key={face.id}
              className={`absolute w-[210px] h-[210px] ${face.colorClass} ${face.textColorClass || ''} border-5 border-black shadow-[10px_10px_0_rgba(17,17,17,0.75)] flex flex-col items-center justify-center text-center p-[18px] font-black text-2xl cursor-pointer hover:brightness-105`}
              style={{
                transform: face.transform,
                backfaceVisibility: 'hidden',
              }}
              onClick={(event) => {
                event.stopPropagation()
                onOpenModal(face.modalKey)
              }}
            >
              {face.title}
              <small className="block mt-2 text-xs font-mono opacity-75">{face.subtitle}</small>
            </button>
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
