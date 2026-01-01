"use client"

import { Bot, CalendarDays, Zap, Mic, Sparkles, ShieldCheck, ChevronRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Autonomous Scheduling",
      description: "Our AI agents negotiate meeting times via email and Slack, finding the perfect slot without you lifting a finger.",
      features: ["NLP Negotiation", "Timezone Mastery", "Conflict Resolution"],
      icon: <Bot className="w-8 h-8 text-indigo-400" />,
      span: "md:col-span-2",
      color: "from-indigo-500/20 to-transparent"
    },
    {
      title: "Intelligence Sync",
      description: "Deep integration with Google, Outlook, and Apple calendars.",
      features: ["Real-time Sync", "Multi-Account Support"],
      icon: <CalendarDays className="w-8 h-8 text-purple-400" />,
      span: "md:col-span-1",
      color: "from-purple-500/10 to-transparent"
    },
    {
      title: "Smart Buffers",
      description: "AI-enforced rest periods to prevent back-to-back burnout.",
      features: ["Focus Mode", "Dynamic Breaks"],
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      span: "md:col-span-1",
      color: "from-yellow-500/10 to-transparent"
    },
    {
      title: "AI Meeting Transcripts",
      description: "Automatically record and summarize your calls into actionable tasks and highlights using advanced LLMs.",
      features: ["Automated Action Items", "Sentiment Analysis", "Searchable Archives"],
      icon: <Mic className="w-8 h-8 text-emerald-400" />,
      span: "md:col-span-2",
      color: "from-emerald-500/20 to-transparent"
    },
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with Purple Shine Effect */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 blur-[100px] -z-10" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">
            <Sparkles className="w-3 h-3 text-purple-400" />
            Next-Gen Productivity
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent mb-6">
            Meet your <br /> 
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-400 bg-[length:200%_auto] animate-shine bg-clip-text text-transparent">AI Executive Assistant.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Chrono automates the chaos of scheduling, so you can focus on the work that actually matters.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden p-8 rounded-[2.5rem] bg-[#111113] border border-white/5 hover:border-white/10 transition-all duration-500 ${service.span}`}
            >
              {/* Glow Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="mt-10 flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
                  Explore Feature <ChevronRight className="w-4 h-4 text-purple-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-purple-600 to-indigo-700 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-purple-500/20">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-2">Save 10 hours every week.</h2>
            <p className="text-purple-100">Join the waitlist for the Chrono AI private beta.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-purple-50 transition-all active:scale-95 whitespace-nowrap">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}