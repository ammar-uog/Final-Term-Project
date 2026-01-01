"use client"

import { Bot, Zap, ShieldCheck, BrainCircuit, Timer, MessageSquareText } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      title: "Privacy First",
      desc: "Your calendar data is encrypted and never sold. We prioritize your security above all.",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
    },
    {
      title: "Neural Accuracy",
      desc: "Our AI understands nuance, context, and human intent to book meetings perfectly.",
      icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Time Sovereignty",
      desc: "We believe your time is your most valuable asset. We help you reclaim it.",
      icon: <Timer className="w-6 h-6 text-pink-400" />,
    },
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white selection:bg-purple-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-purple-500/10 blur-[120px] rounded-full -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            The end of the <br /> 
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-400 bg-[length:200%_auto] animate-shine bg-clip-text text-transparent">scheduling dance.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Chrono was born from a simple frustration: Why do we spend hours every week just trying to find 30 minutes to talk? 
            We built an AI that handles the "when" so you can focus on the "why."
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#161618] border border-white/5 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Mission</h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  To give a billion hours back to the world's workforce. By automating the administrative 
                  friction of collaboration, we empower teams to spend their creative energy on 
                  problem-solving rather than logistics.
                </p>
              </div>
              <div className="h-64 rounded-3xl bg-gradient-to-br from-purple-500/10 to-indigo-500/5 border border-white/10 flex items-center justify-center relative group">
                <Bot className="w-24 h-24 text-purple-500/50 group-hover:scale-110 group-hover:text-purple-400 transition-all duration-500" />
                <div className="absolute inset-0 bg-purple-500/5 blur-2xl rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The AI Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">How Chrono Thinks</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
             {/* Decorative connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/5 to-transparent -z-10" />
            
            {[
              { step: "01", title: "Analyze", icon: <MessageSquareText className="w-5 h-5" />, desc: "AI reads the incoming request and checks your complex availability." },
              { step: "02", title: "Negotiate", icon: <Zap className="w-5 h-5" />, desc: "Our agent reaches out to your guest to find the optimal overlap." },
              { step: "03", title: "Finalize", icon: <ShieldCheck className="w-5 h-5" />, desc: "The meeting is booked, reminders sent, and your deep work is protected." }
            ].map((s, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold mx-auto">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 px-6 bg-[#0d0d0f]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div 
                key={idx} 
                className="group p-10 rounded-[2.5rem] bg-[#111113] border border-white/5 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:bg-purple-500/10 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for a lighter calendar?</h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            We are currently in a selective private beta. Join a community of over 10,000 users 
            who have reclaimed their workweek.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button className="px-8 py-4 bg-white text-black rounded-2xl font-bold hover:bg-purple-50 transition-all w-full sm:w-auto">
               Join the Waitlist
             </button>
             <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all w-full sm:w-auto">
               Read our Security Whitepaper
             </button>
          </div>
        </div>
      </section>
    </main>
  )
}