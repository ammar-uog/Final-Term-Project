"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    // Centering wrapper: fixed inset-x-0 + flex justify-center
    <nav className="fixed top-0 inset-x-0 z-50 flex justify-center px-6 py-4 pointer-events-none" style={{ marginLeft: "406px" }}>
      <div 
        className={`w-full  max-w-5xl transition-all duration-500 rounded-[2rem] border pointer-events-auto ${
          scrolled 
            ? "bg-[#161618]/80 backdrop-blur-md border-white/10 shadow-2xl" 
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex justify-between items-center h-16 px-6 lg:px-8">
          
          {/* Logo with Purple Shine */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="h-6 w-6 bg-gradient-to-tr from-purple-500 to-indigo-400 rounded-md shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
            <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-white via-purple-300 to-white bg-[length:200%_auto] animate-shine bg-clip-text text-transparent">
              Chrono
            </span>
          </Link>

          {/* Center Navigation - Pill Look */}
          <div className="hidden md:flex items-center bg-[#232326]/50 border border-white/5 rounded-full p-1 shadow-inner">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive(href) 
                    ? "bg-[#323235] text-white shadow-lg" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <Link 
              href="/login" 
              className="group flex items-center gap-1.5 bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-purple-50 transition-all active:scale-95"
            >
              Log in
              <ArrowUpRight className="w-4 h-4 text-black/40 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="px-6 pb-8 pt-2 space-y-2 bg-[#161618] rounded-b-[2rem] border-t border-white/5">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-2xl text-base font-medium ${
                  isActive(href) 
                    ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4">
              <Link 
                href="/login"
                className="flex items-center justify-center w-full py-4 bg-white text-black rounded-2xl font-bold"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}