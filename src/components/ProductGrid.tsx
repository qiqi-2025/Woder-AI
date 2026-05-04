import React from 'react'
import { ProductContent } from '@/types/siteContent'

interface ProductGridProps {
  products: ProductContent[]
  onOpenModal: (modalKey: string) => void
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onOpenModal }) => {
  const sortedProducts = [...products].sort((a, b) => a.order - b.order)

  return (
    <section className="mt-[72px] scroll-mt-8" id="products">
      <h2 className="inline-block bg-black text-white px-4 py-2 font-black text-xl -rotate-1 mb-6">
        我做过的小产品
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedProducts.map((product) => (
          <article
            key={product.id}
            className={`product-card ${product.cardColor} min-h-[230px] border-4 border-black shadow-[8px_8px_0_#111] p-5 cursor-pointer relative overflow-hidden hover:-translate-y-2 hover:-rotate-1 transition-all`}
            onClick={() => onOpenModal(product.modalKey)}
          >
            <div className="font-mono text-sm font-black mb-[18px]">{product.no}</div>
            <h3 className="text-[26px] font-black mb-[14px] leading-[1.1]">{product.title}</h3>
            <p className="text-[15px] leading-[1.75] max-w-[92%] font-normal">{product.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductGrid
