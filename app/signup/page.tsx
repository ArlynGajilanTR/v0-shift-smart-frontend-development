"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    bureau: "",
    role: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate account creation
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="18" fontFamily="Knowledge2017" fontSize="20" fontWeight="700" fill="#FF6600">
                REUTERS
              </text>
            </svg>
          </Link>
        </div>
      </header>

      {/* Signup Form */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Create your account</CardTitle>
            <CardDescription>Set up your ShiftSmart account with your Reuters credentials</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Smith"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Reuters Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@reuters.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bureau">Bureau</Label>
                <Select value={formData.bureau} onValueChange={(value) => setFormData({ ...formData, bureau: value })}>
                  <SelectTrigger id="bureau">
                    <SelectValue placeholder="Select your bureau" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="milan">Milan</SelectItem>
                    <SelectItem value="rome">Rome</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lead">Lead Editor</SelectItem>
                    <SelectItem value="senior">Senior Editor</SelectItem>
                    <SelectItem value="junior">Junior Editor</SelectItem>
                    <SelectItem value="support">Support Staff</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link href="/login" className="text-primary hover:underline font-medium">
                Log in
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
