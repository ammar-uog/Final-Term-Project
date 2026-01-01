"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { 
  Plus, Edit2, Trash2, LogOut, 
  Calendar, X, Bot, Clock, 
  Video, FileText, CheckCircle2 
} from "lucide-react"

interface Meeting {
  id: string
  title: string
  guestName: string
  time: string
  date: string
  status: "Confirmed" | "Pending AI Negotiation"
}

export default function DashboardPage() {
  const router = useRouter()
  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({ title: "", guestName: "", time: "" })
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (!isAuthenticated) {
      router.push("/login")
      return
    }
    setUserName(localStorage.getItem("userName") || "Explorer")
    const saved = localStorage.getItem("chronoMeetings")
    if (saved) setMeetings(JSON.parse(saved))
  }, [router])

  const saveMeetings = (updated: Meeting[]) => {
    setMeetings(updated)
    localStorage.setItem("chronoMeetings", JSON.stringify(updated))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.title.trim()) return

    if (editingId) {
      const updated = meetings.map((m) =>
        m.id === editingId ? { ...m, ...formData } : m
      )
      saveMeetings(updated)
      setEditingId(null)
    } else {
      const newMeeting: Meeting = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        status: "Confirmed"
      }
      saveMeetings([newMeeting, ...meetings])
    }
    setFormData({ title: "", guestName: "", time: "" })
    setShowForm(false)
  }

  const handleLogout = () => {
    localStorage.clear()
    router.push("/login")
  }

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-purple-200 to-white/40 bg-clip-text text-transparent">
              {userName}'s Calendar
            </h1>
            <p className="text-gray-500 mt-2 flex items-center gap-2">
              <Bot className="w-4 h-4 text-purple-400" />
              Chrono AI has optimized 4 slots for you today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-2xl font-black transition-all hover:bg-purple-50 active:scale-95 shadow-lg shadow-white/5"
            >
              <Plus className="w-5 h-5" />
              Schedule Meeting
            </button>
            <button onClick={handleLogout} className="p-3 bg-white/5 border border-white/10 text-gray-400 hover:text-red-400 rounded-2xl transition-all">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { label: "Total Meetings", val: meetings.length, icon: <Calendar className="text-purple-400" /> },
            { label: "AI Negotiated", val: "12", icon: <Bot className="text-indigo-400" /> },
            { label: "Time Saved", val: "4.5h", icon: <Clock className="text-emerald-400" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-[#111113] border border-white/5 p-6 rounded-[2rem] flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.val}</p>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl">{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* Modal Form */}
        {showForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0a0a0b]/90 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-[#111113] border border-white/10 rounded-[2.5rem] p-10 shadow-2xl scale-up-center">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold">New Appointment</h3>
                <button type="button" onClick={() => setShowForm(false)} className="text-gray-500 hover:text-white"><X /></button>
              </div>
              <div className="space-y-4">
                <input
                  placeholder="Meeting Title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-5 py-4 bg-[#161618] border border-white/5 rounded-2xl text-white focus:outline-none focus:border-purple-500/50"
                />
                <input
                  placeholder="Guest Email / Name"
                  value={formData.guestName}
                  onChange={(e) => setFormData({...formData, guestName: e.target.value})}
                  className="w-full px-5 py-4 bg-[#161618] border border-white/5 rounded-2xl text-white focus:outline-none focus:border-purple-500/50"
                />
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full px-5 py-4 bg-[#161618] border border-white/5 rounded-2xl text-white focus:outline-none focus:border-purple-500/50"
                />
                <button type="submit" className="w-full py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-500 transition-all">
                  {editingId ? "Update Schedule" : "Start AI Negotiation"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Meetings List */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold px-2">Upcoming Schedule</h2>
          {meetings.length === 0 ? (
            <div className="py-20 bg-[#111113] border-2 border-dashed border-white/5 rounded-[3rem] text-center">
              <Calendar className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <p className="text-gray-500">No upcoming meetings. Your AI is resting.</p>
            </div>
          ) : (
            meetings.map((m) => (
              <div key={m.id} className="group bg-[#111113] border border-white/5 p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-purple-500/30 transition-all">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 bg-purple-500/10 rounded-2xl flex flex-col items-center justify-center border border-purple-500/20">
                    <span className="text-[10px] font-bold text-purple-400 uppercase">{m.date.split(' ')[0]}</span>
                    <span className="text-xl font-bold">{m.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold group-hover:text-purple-300 transition-colors">{m.title}</h4>
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <Video className="w-3 h-3" /> With {m.guestName} • <Clock className="w-3 h-3" /> {m.time || "TBD"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-[#111113]" />
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-[#111113]" />
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-white/5 rounded-xl text-gray-400 hover:text-white transition-colors"><FileText className="w-4 h-4" /></button>
                    <button onClick={() => {saveMeetings(meetings.filter(x => x.id !== m.id))}} className="p-2 bg-red-500/5 rounded-xl text-red-500/50 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  )
}