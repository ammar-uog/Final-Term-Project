"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0b] border-t border-white/5 pt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="h-6 w-6 bg-indigo-500 rounded-lg rotate-3" />
              <span className="text-xl font-bold tracking-tight text-white">Chrono.</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Building the next generation of digital excellence with speed, security, and elegance.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Platform</h3>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/dashboard", label: "Dashboard" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-500 hover:text-indigo-400 transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Resources</h3>
            <ul className="space-y-4">
              {["Documentation", "Privacy", "Terms", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="/contact" className="text-gray-500 hover:text-indigo-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Get Updates</h3>
            <div className="relative">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full px-4 py-3 bg-[#161618] border border-white/5 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white text-black rounded-lg hover:bg-indigo-50 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <p className="mt-4 text-[11px] text-gray-600">
              Join 2,000+ others receiving our monthly insights.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs text-gray-600">
              <p>© {currentYear} Chrono Studio Inc.</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
              <div className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-green-500 uppercase tracking-tighter">All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}