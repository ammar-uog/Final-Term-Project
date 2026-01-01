import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">Welcome to Our Platform</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience excellence with our comprehensive suite of services designed to transform your business and
                achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Performance",
                description: "Lightning-fast load times and smooth user experience across all devices",
              },
              {
                title: "Secure",
                description: "Enterprise-grade security to protect your data and privacy",
              },
              {
                title: "24/7 Support",
                description: "Our dedicated team is here to help you succeed",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-background border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto bg-primary rounded-xl p-12 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join thousands of satisfied customers and transform your business today.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors"
          >
            Sign Up Now
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
