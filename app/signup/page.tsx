"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail, User, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    localStorage.setItem("isAuthenticated", "true")
    localStorage.setItem("userEmail", formData.email)
    localStorage.setItem("userName", formData.name)
    router.push("/dashboard")
  }

  return (
    <main className="min-h-screen bg-[#0a0a0b] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full -z-10" />

      <div className="w-full max-w-5xl grid lg:grid-cols-10 gap-0 bg-[#111113]/50 backdrop-blur-xl border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
        
        {/* Left Side: Branding & Trust (40%) */}
        <div className="hidden lg:flex lg:col-span-4 bg-gradient-to-br from-[#161618] to-[#0a0a0b] p-12 flex-col justify-between border-r border-white/5">
          <div>
            <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center mb-8">
              <ShieldCheck className="text-black w-6 h-6" />
            </div>
            <h2 className="text-4xl font-bold text-white leading-tight mb-6">
              Start your <br /> <span className="text-indigo-400">journey</span> with <br /> Chrono.
            </h2>
            
            <div className="space-y-6">
              {[
                "Unlimited project management",
                "Real-time team collaboration",
                "Advanced data analytics",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-sm text-gray-400 italic">
              "Chrono has completely transformed how our team handles sprints. The dark UI is just a beautiful bonus."
            </p>
            <p className="text-xs font-bold text-white mt-4 uppercase tracking-widest">— Alex Rivera, CTO</p>
          </div>
        </div>

        {/* Right Side: Signup Form (60%) */}
        <div className="lg:col-span-6 p-8 md:p-16">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">Create your account</h1>
            <p className="text-gray-500">Join 10,000+ professionals managing projects today.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl text-sm font-medium animate-in fade-in slide-in-from-top-1">
                {error}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-[#161618] border border-white/5 rounded-2xl text-white focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-gray-700"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-[#161618] border border-white/5 rounded-2xl text-white focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-gray-700"
                    placeholder="john@chrono.studio"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-12 py-3.5 bg-[#161618] border border-white/5 rounded-2xl text-white focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-gray-700"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Confirm</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-12 py-3.5 bg-[#161618] border border-white/5 rounded-2xl text-white focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-gray-700"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 py-4 bg-white text-black font-black rounded-2xl hover:bg-indigo-50 transition-all active:scale-[0.98] mt-4"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-white font-bold hover:text-indigo-400 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}