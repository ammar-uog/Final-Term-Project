"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Plus, Edit2, Trash2, LogOut, LayoutGrid, Calendar, X } from "lucide-react"

interface Item {
  id: string
  title: string
  description: string
  date: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [items, setItems] = useState<Item[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({ title: "", description: "" })
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (!isAuthenticated) {
      router.push("/login")
      return
    }
    setUserName(localStorage.getItem("userName") || "Explorer")
    const savedItems = localStorage.getItem("dashboardItems")
    if (savedItems) setItems(JSON.parse(savedItems))
  }, [router])

  const saveItems = (updatedItems: Item[]) => {
    setItems(updatedItems)
    localStorage.setItem("dashboardItems", JSON.stringify(updatedItems))
  }

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.title.trim()) return

    if (editingId) {
      const updatedItems = items.map((item) =>
        item.id === editingId ? { ...item, title: formData.title, description: formData.description } : item,
      )
      saveItems(updatedItems)
      setEditingId(null)
    } else {
      const newItem: Item = {
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      }
      saveItems([newItem, ...items])
    }
    setFormData({ title: "", description: "" })
    setShowForm(false)
  }

  const handleLogout = () => {
    localStorage.clear()
    router.push("/login")
  }

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Navigation / Stats Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              Welcome back, {userName}
            </h1>
            <p className="text-gray-500 mt-1">Here is what’s happening with your projects today.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
            >
              <Plus className="w-4 h-4" />
              New Project
            </button>
            <button
              onClick={handleLogout}
              className="p-2.5 bg-white/5 border border-white/10 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Overlay for Form (Classier than inline) */}
        {showForm && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-[#0a0a0b]/80 backdrop-blur-sm">
            <form 
              onSubmit={handleAddItem}
              className="w-full max-w-lg bg-[#111113] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl animate-in fade-in zoom-in duration-200"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold">{editingId ? "Edit Item" : "Create New Item"}</h3>
                <button type="button" onClick={() => {setShowForm(false); setEditingId(null)}} className="text-gray-500 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Project Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-5 py-3 bg-[#161618] border border-white/5 rounded-2xl text-white focus:outline-none focus:border-indigo-500/50 transition-all"
                    placeholder="E.g. Website Redesign"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-5 py-3 bg-[#161618] border border-white/5 rounded-2xl text-white focus:outline-none focus:border-indigo-500/50 transition-all resize-none"
                    placeholder="What are the details?"
                  />
                </div>
                <button type="submit" className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-indigo-50 transition-all">
                  {editingId ? "Save Changes" : "Create Item"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.length === 0 ? (
            <div className="col-span-full py-20 border-2 border-dashed border-white/5 rounded-[3rem] flex flex-col items-center justify-center text-center">
              <div className="p-4 bg-white/5 rounded-full mb-4">
                <LayoutGrid className="w-8 h-8 text-gray-600" />
              </div>
              <p className="text-gray-400 text-lg">No projects found. Ready to start something new?</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#111113] border border-white/5 p-8 rounded-[2.5rem] hover:border-indigo-500/30 transition-all duration-300 shadow-sm hover:shadow-indigo-500/5"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => { setFormData({title: item.title, description: item.description}); setEditingId(item.id); setShowForm(true); }}
                      className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => { if(confirm("Delete?")) saveItems(items.filter(i => i.id !== item.id)) }}
                      className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {item.description || "No description provided for this project."}
                </p>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-gray-600 uppercase tracking-tighter">Status: Active</span>
                  <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  )
}