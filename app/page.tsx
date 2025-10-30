import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Users, AlertCircle, Clock } from "lucide-react"

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="18" fontFamily="Knowledge2017" fontSize="20" fontWeight="700" fill="#FF6600">
                REUTERS
              </text>
            </svg>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="font-semibold hover:bg-gray-100 transition-colors">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="font-semibold hover:scale-105 transition-transform">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-4xl w-full">
          <h1 className="text-6xl font-bold text-foreground mb-6 text-balance tracking-tight">ShiftSmart</h1>
          <p className="text-xl text-muted-foreground mb-12 text-balance max-w-2xl font-medium leading-relaxed">
            Intelligent shift scheduling for Reuters Breaking News editorial team. Manage staff assignments across Milan
            and Rome with automated conflict detection.
          </p>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card p-8 rounded-lg border border-border text-left shadow-sm hover:shadow-md transition-all hover:scale-[1.02] border-l-4 border-l-primary">
              <Calendar className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Multi-View Scheduling</h3>
              <p className="text-muted-foreground font-medium">
                Plan shifts across week, month, quarter, or custom date ranges with intuitive calendar views.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border text-left shadow-sm hover:shadow-md transition-all hover:scale-[1.02] border-l-4 border-l-blue-500">
              <Users className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Role-Based Balancing</h3>
              <p className="text-muted-foreground font-medium">
                Ensure proper skill mix with automated validation of senior, junior, and lead editor coverage.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border text-left shadow-sm hover:shadow-md transition-all hover:scale-[1.02] border-l-4 border-l-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Smart Conflict Detection</h3>
              <p className="text-muted-foreground font-medium">
                Prevent double bookings, rest period violations, and skill gaps with real-time validation.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border text-left shadow-sm hover:shadow-md transition-all hover:scale-[1.02] border-l-4 border-l-green-500">
              <Clock className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Cross-Bureau Coordination</h3>
              <p className="text-muted-foreground font-medium">
                Seamlessly manage Breaking News team schedules across Milan and Rome bureaus.
              </p>
            </div>
          </div>

          <Link href="/signup">
            <Button size="lg" className="text-lg px-8 font-bold hover:scale-105 transition-transform">
              Get Started
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-white py-6 shadow-sm">
        <div className="container mx-auto px-6 text-sm text-muted-foreground">
          <p className="font-medium">ShiftSmart v1 - Internal Reuters Tool for Breaking News Team</p>
        </div>
      </footer>
    </div>
  )
}
