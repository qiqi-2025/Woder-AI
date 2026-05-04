import React from 'react'

interface FooterProps {
  footer: string
}

const Footer: React.FC<FooterProps> = ({ footer }) => {
  return (
    <footer className="relative z-20 mt-[104px] mb-14 pt-4 font-mono text-sm opacity-80">
      {footer}
    </footer>
  )
}

export default Footer
