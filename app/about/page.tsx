export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-8">About Us</h1>

          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a team of passionate professionals dedicated to delivering exceptional solutions that drive real
              value for our clients. With years of experience in the industry, we've helped countless businesses achieve
              their goals and exceed their expectations.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower businesses through innovative technology and customer-centric solutions that create lasting
              impact and sustainable growth.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8">Our Values</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-4 font-bold">✓</span>
                <span>
                  <strong>Integrity:</strong> We operate with transparency and honesty in all our dealings
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-4 font-bold">✓</span>
                <span>
                  <strong>Innovation:</strong> We constantly push boundaries to deliver cutting-edge solutions
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-4 font-bold">✓</span>
                <span>
                  <strong>Excellence:</strong> We're committed to the highest standards of quality
                </span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-8">Our Team</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our diverse team brings together expertise from various fields, united by a common goal: your success. We
              believe in collaboration, continuous learning, and pushing the boundaries of what's possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
