
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { href: '/', label: 'Home' },
  { href: '/tour', label: 'Tour' },
  { href: '/epk', label: 'EPK' },
  { href: '/store', label: 'Store' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[rgba(11,11,15,.45)] border-b border-[rgba(187,153,255,.12)]">
      <div className="mx-auto w-[min(1152px,92vw)] py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-extrabold tracking-widest">
          <span className="w-9 h-9 rounded-xl grid place-items-center shadow-soft" style={{background: 'linear-gradient(135deg,#BB99FF,#7a5cff)'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18"/><path d="M12 3v18"/></svg>
          </span>
          <span>BLKLYT</span>
        </Link>
        <nav className="text-[#d9dcff]">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={clsx('ml-5 hover:underline', pathname === l.href && 'text-brand')}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn ml-4">Book a Show</Link>
        </nav>
      </div>
    </header>
  )
}
