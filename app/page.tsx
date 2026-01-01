"use client"

import Link from "next/link"
import { ArrowRight, Zap, Bot, Calendar, Sparkles, MousePointerClick } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 sm:px-12 lg:px-20">
        {/* Animated Background Aura */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-purple-400">
                <Sparkles className="w-3 h-3" />
                Stop the back-and-forth
              </div>
              
              <h1 className="text-6xl sm:text-7xl font-bold leading-[1.1] tracking-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                Meetings booked <br /> 
                <span className="text-white">on autopilot.</span>
              </h1>
              
              <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                The world’s first AI scheduler that actually negotiates your calendar. Send a link, let Chrono handle the rest.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/signup"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-purple-50 transition-all active:scale-95 shadow-xl shadow-white/5"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all"
                >
                  View Features
                </Link>
              </div>
            </div>

            {/* Hero Visual Card: Representing AI Scheduling */}
            <div className="hidden lg:block relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-[3rem] blur opacity-20" />
              <div className="relative w-full h-[480px] bg-[#111113] border border-white/10 rounded-[2.5rem] overflow-hidden p-8">
                {/* Simulated AI Interface */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  
                  {/* AI Chat Bubble */}
                  <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
                    <p className="text-sm text-purple-200">"I've found 3 slots that work for both of you. Tuesday at 2 PM seems best based on your deep-work patterns."</p>
                  </div>

                  {/* Calendar Widget Preview */}
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4">
                    <div className="flex justify-between border-b border-white/5 pb-4">
                      <div className="h-4 w-24 bg-white/20 rounded-full" />
                      <div className="h-4 w-12 bg-white/10 rounded-full" />
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {[...Array(21)].map((_, i) => (
                        <div key={i} className={`h-8 rounded-lg ${i === 12 ? 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'bg-white/5'}`} />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Floating "Booked" Badge */}
                <div className="absolute bottom-10 right-10 bg-white text-black px-4 py-2 rounded-full font-bold flex items-center gap-2 animate-bounce">
                  <Zap className="w-4 h-4 fill-current" />
                  Meeting Confirmed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 sm:px-12 lg:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Scheduling Intelligence</h2>
            <p className="text-gray-500">Why thousands of executives are switching to Chrono.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Negotiation AI",
                description: "Our AI chats with your guests to find a time that works, handling all the friction for you.",
                icon: <Bot className="w-6 h-6 text-purple-400" />,
              },
              {
                title: "Deep Work Protection",
                description: "Chrono learns your productivity habits and protects your focus hours automatically.",
                icon: <Calendar className="w-6 h-6 text-indigo-400" />,
              },
              {
                title: "One-Click Booking",
                description: "Beautiful booking pages that convert leads and delight your clients.",
                icon: <MousePointerClick className="w-6 h-6 text-pink-400" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-10 bg-[#111113] border border-white/5 rounded-[2.5rem] hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-purple-600 to-indigo-700 p-12 md:p-20 text-center shadow-2xl shadow-purple-500/20">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Reclaim your time.
            </h2>
            <p className="text-lg md:text-xl text-purple-100/80 mb-10 max-w-xl mx-auto leading-relaxed">
              Stop playing email tag. Join the private beta and let AI handle your calendar.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-black rounded-2xl hover:bg-purple-50 transition-all active:scale-95"
            >
              Get Started for Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}