"use client"

import type React from "react"
import { useState } from "react"
import { Send, Mail, Phone, MapPin, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Message sent! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white selection:bg-indigo-500/30 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
            Let's start a <br /> conversation.
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Have a project in mind or just want to say hi? We’re always open to discussing new ideas and creative opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-6 rounded-3xl bg-[#111113] border border-white/5 hover:border-indigo-500/20 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email us at</p>
                  <p className="text-white font-medium">hello@chrono.studio</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#111113] border border-white/5 hover:border-purple-500/20 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Call us</p>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-[#161618] to-[#0a0a0b] border border-white/5 mt-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                Live Support
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Our average response time is under 2 hours during business hours.
              </p>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0a0b] bg-gray-800" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0b] bg-indigo-500 flex items-center justify-center text-[10px] font-bold">
                  +12
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form Card */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-[#111113] border border-white/5 p-8 md:p-10 rounded-[2.5rem] shadow-2xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-[#161618] border border-white/5 rounded-2xl text-white focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-[#161618] border border-white/5 rounded-2xl text-white focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  className="w-full px-5 py-4 bg-[#161618] border border-white/5 rounded-2xl text-white focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-5 py-4 bg-[#161618] border border-white/5 rounded-2xl text-white focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all resize-none placeholder:text-gray-600"
                />
              </div>

              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-3 bg-white hover:bg-indigo-50 text-black font-bold py-4 rounded-2xl transition-all active:scale-[0.98]"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  )
}