'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SiteModal as SiteModalType } from '@/types/siteContent'

interface SiteModalProps {
  modal: SiteModalType | null
  onClose: () => void
}

const imageExistsCache = new Map<string, boolean>()

export default function SiteModal({ modal, onClose }: SiteModalProps) {
  const [previewImageIndex, setPreviewImageIndex] = useState<number | null>(null)
  const [availableImages, setAvailableImages] = useState<boolean[]>([])

  useEffect(() => {
    setPreviewImageIndex(null)

    if (!modal?.images?.length) {
      setAvailableImages([])
      return
    }

    let isMounted = true

    Promise.all(
      modal.images.map(async (image) => {
        if (imageExistsCache.has(image.src)) {
          return imageExistsCache.get(image.src) || false
        }

        try {
          const response = await fetch(image.src, { method: 'HEAD' })
          const exists = response.ok
          imageExistsCache.set(image.src, exists)
          return exists
        } catch {
          imageExistsCache.set(image.src, false)
          return false
        }
      })
    ).then((results) => {
      if (isMounted) {
        setAvailableImages(results)
      }
    })

    return () => {
      isMounted = false
    }
  }, [modal])

  useEffect(() => {
    if (!modal) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (previewImageIndex !== null) {
          setPreviewImageIndex(null)
        } else {
          onClose()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [modal, onClose, previewImageIndex])

  if (!modal) return null

  const visibleImages = modal.images?.filter((_, index) => availableImages[index]) || []
  const previewImage = previewImageIndex !== null ? visibleImages[previewImageIndex] : null

  const goToPreviousImage = () => {
    setPreviewImageIndex((current) => {
      if (current === null) return null
      return current === 0 ? visibleImages.length - 1 : current - 1
    })
  }

  const goToNextImage = () => {
    setPreviewImageIndex((current) => {
      if (current === null) return null
      return current === visibleImages.length - 1 ? 0 : current + 1
    })
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/56 p-5" onClick={onClose}>
        <div
          className="relative max-h-[86vh] w-full max-w-[760px] overflow-auto border-5 border-black bg-cream p-7 shadow-[14px_14px_0_#111]"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border-3 border-black bg-red p-0 text-2xl font-black text-white shadow-[4px_4px_0_#111] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#111]"
            onClick={onClose}
            aria-label="关闭弹窗"
          >
            ×
          </button>

          <h2 className="mb-5 pr-12 text-[clamp(28px,5vw,38px)] font-black leading-tight">{modal.title}</h2>

          <div className="space-y-5">
            {modal.body.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p
                    key={index}
                    className={`whitespace-pre-line text-[17px] leading-[1.85] ${block.emphasis ? 'text-xl font-black' : ''}`}
                  >
                    {block.content}
                  </p>
                )
              }

              return (
                <div key={index}>
                  {block.title && <h3 className="mb-2 mt-2 text-xl font-black">{block.title}</h3>}
                  <ul className="list-disc space-y-1 pl-6 text-base leading-[1.9]">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {visibleImages.length > 0 ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {visibleImages.map((image, index) => (
                <button
                  key={image.src}
                  className="group relative aspect-video overflow-hidden border-3 border-black bg-white shadow-[5px_5px_0_#111]"
                  onClick={() => setPreviewImageIndex(index)}
                >
                  <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform group-hover:scale-105" />
                </button>
              ))}
            </div>
          ) : (
            modal.placeholder && (
              <div className="mt-6 border-2 border-dashed border-black/30 bg-black/5 p-5 text-center text-black/40">
                [{modal.placeholder}]
              </div>
            )
          )}
        </div>
      </div>

      {previewImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-5" onClick={() => setPreviewImageIndex(null)}>
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              className="absolute -top-14 right-0 text-5xl font-black text-white hover:text-yellow"
              onClick={() => setPreviewImageIndex(null)}
              aria-label="关闭图片预览"
            >
              ×
            </button>
            <div className="relative aspect-video overflow-hidden border-4 border-white bg-black">
              <Image src={previewImage.src} alt={previewImage.alt} fill className="object-contain" />
            </div>
            {visibleImages.length > 1 && (
              <>
                <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 px-4 py-8 text-4xl font-black text-white hover:bg-white/40" onClick={goToPreviousImage}>
                  ‹
                </button>
                <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 px-4 py-8 text-4xl font-black text-white hover:bg-white/40" onClick={goToNextImage}>
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
