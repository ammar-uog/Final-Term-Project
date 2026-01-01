"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Plus, Edit2, Trash2, LogOut } from "lucide-react"

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

  // Check authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (!isAuthenticated) {
      router.push("/login")
      return
    }
    const name = localStorage.getItem("userName") || "User"
    setUserName(name)

    // Load items from localStorage
    const savedItems = localStorage.getItem("dashboardItems")
    if (savedItems) {
      setItems(JSON.parse(savedItems))
    }
  }, [router])

  // Save items to localStorage
  const saveItems = (updatedItems: Item[]) => {
    setItems(updatedItems)
    localStorage.setItem("dashboardItems", JSON.stringify(updatedItems))
  }

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title.trim()) {
      alert("Please enter a title")
      return
    }

    if (editingId) {
      // Update existing item
      const updatedItems = items.map((item) =>
        item.id === editingId ? { ...item, title: formData.title, description: formData.description } : item,
      )
      saveItems(updatedItems)
      setEditingId(null)
    } else {
      // Add new item
      const newItem: Item = {
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        date: new Date().toLocaleDateString(),
      }
      saveItems([...items, newItem])
    }

    setFormData({ title: "", description: "" })
    setShowForm(false)
  }

  const handleEdit = (item: Item) => {
    setFormData({ title: item.title, description: item.description })
    setEditingId(item.id)
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      saveItems(items.filter((item) => item.id !== id))
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userName")
    router.push("/login")
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-lg transition-colors font-medium"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-12">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome, {userName}!</h2>
          <p className="text-muted-foreground">Manage your items below. Create, edit, and delete items as needed.</p>
        </div>

        {/* Add Item Form */}
        <div className="mb-8">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add New Item
            </button>
          ) : (
            <form onSubmit={handleAddItem} className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">{editingId ? "Edit Item" : "Create New Item"}</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-foreground font-medium mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter item title"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-foreground font-medium mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                    placeholder="Enter item description"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    {editingId ? "Update Item" : "Add Item"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false)
                      setEditingId(null)
                      setFormData({ title: "", description: "" })
                    }}
                    className="px-6 py-2 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Items List */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Your Items</h3>

          {items.length === 0 ? (
            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <p className="text-muted-foreground text-lg mb-4">No items yet. Create your first item to get started!</p>
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Create First Item
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-muted-foreground line-clamp-3">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
