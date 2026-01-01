export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web applications built with modern technology stack for optimal performance and scalability.",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized"],
    },
    {
      title: "Consultation",
      description: "Expert guidance to help you make informed decisions and achieve your business objectives.",
      features: ["Strategy Planning", "Technical Advice", "Best Practices"],
    },
    {
      title: "Support & Maintenance",
      description: "24/7 support to ensure your systems run smoothly and efficiently.",
      features: ["24/7 Monitoring", "Quick Response", "Proactive Updates"],
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights to drive better business decisions.",
      features: ["Real-time Dashboards", "Custom Reports", "Predictive Analysis"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your unique business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-foreground">
                      <span className="text-primary mr-3">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
