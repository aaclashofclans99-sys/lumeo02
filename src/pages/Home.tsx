import { Sparkles, Rocket, ShoppingCart, Briefcase, Users, Code, Palette, Search, Target, Layers, Wrench } from 'lucide-react';
import Plasma from '../components/Plasma';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const clients = [
    { icon: Briefcase, title: 'Local Service Businesses', description: 'Plumbers, electricians, consultants' },
    { icon: Rocket, title: 'SaaS Startups', description: 'Cloud-based software companies' },
    { icon: Sparkles, title: 'AI Startups', description: 'Machine learning innovations' },
    { icon: ShoppingCart, title: 'E-Commerce Brands', description: 'Online retail businesses' },
    { icon: Users, title: 'Agencies & Freelancers', description: 'Creative professionals' },
  ];

  const services = [
    { icon: Palette, title: 'Web Design', description: 'Beautiful, modern interfaces' },
    { icon: Code, title: 'Web Development', description: 'Fast, responsive websites' },
    { icon: Search, title: 'SEO Optimization', description: 'Higher search rankings' },
    { icon: Target, title: 'GEO Targeting', description: 'Local market reach' },
    { icon: Layers, title: 'UI/UX Design', description: 'User-centered experiences' },
    { icon: Wrench, title: 'Website Maintenance', description: 'Ongoing support & updates' },
  ];

  const stats = [
    { number: '100+', label: 'Sites Built' },
    { number: '50+', label: 'Verified Reviews' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction Rate' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d1117]">
        <div className="absolute inset-0 z-0">
          <Plasma
            color="#7c3aed"
            speed={0.8}
            scale={1.2}
            noiseIntensity={1.2}
          />
        </div>

        <div className="absolute inset-0 z-1 bg-gradient-to-br from-[#0f172a]/70 via-[#0d1117]/60 to-[#1e1b4b]/70"></div>

        <div className="absolute inset-0 z-2 bg-radial-gradient opacity-30" style={{
          background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.1) 0%, transparent 70%)'
        }}></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium">
              Digital Excellence
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#f1f5f9] mb-6 leading-tight animate-slide-up"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              animationDelay: '0.2s'
            }}
          >
            Boast Your Business
            <span className="block bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent animate-glow-pulse">
              With Premium Websites
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#cbd5e1] mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Websites that convert visitors into customers. Built with precision, designed for scale, and optimized for growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => onNavigate('portfolio')}
              className="px-8 sm:px-10 py-4 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white font-semibold hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] hover:scale-105 transition-all duration-300 transform backdrop-blur-sm"
            >
              View Our Work
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 sm:px-10 py-4 rounded-xl border border-[#7c3aed]/30 bg-[#1e1b4b]/40 text-[#e9d5ff] font-semibold hover:bg-[#7c3aed]/10 hover:border-[#7c3aed]/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              Schedule Call
            </button>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-center opacity-70 animate-float" style={{ animationDelay: '0.5s' }}>
            <div>
              <div className="text-2xl font-bold text-[#7c3aed]">100+</div>
              <div className="text-sm text-[#94a3b8]">Sites Built</div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-[#7c3aed]/30 to-transparent"></div>
            <div>
              <div className="text-2xl font-bold text-[#7c3aed]">50+</div>
              <div className="text-sm text-[#94a3b8]">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-[#7c3aed]/30 to-transparent"></div>
            <div>
              <div className="text-2xl font-bold text-[#7c3aed]">5+</div>
              <div className="text-sm text-[#94a3b8]">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-[#f1f5f9] text-center mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Who We Work With
          </h2>
          <p className="text-[#94a3b8] text-center mb-12">
            We partner with businesses of all sizes across industries
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl">
              {clients.slice(0, 3).map((client, index) => (
                <div
                  key={index}
                  className="bg-[#1e293b] rounded-2xl p-6 hover:bg-[#1e3a8a] hover:scale-105 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                >
                  <client.icon className="text-[#2563eb] mb-4" size={32} />
                  <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">{client.title}</h3>
                  <p className="text-[#94a3b8] text-sm">{client.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {clients.slice(3).map((client, index) => (
                <div
                  key={index + 3}
                  className="bg-[#1e293b] rounded-2xl p-6 hover:bg-[#1e3a8a] hover:scale-105 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                >
                  <client.icon className="text-[#2563eb] mb-4" size={32} />
                  <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">{client.title}</h3>
                  <p className="text-[#94a3b8] text-sm">{client.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-[#f1f5f9] text-center mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            What We Do
          </h2>
          <p className="text-[#94a3b8] text-center mb-12">
            Full-service digital solutions tailored to your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1e293b] rounded-2xl p-6 hover:bg-[#1e3a8a] hover:scale-105 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
              >
                <service.icon className="text-[#2563eb] mb-4" size={32} />
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">{service.title}</h3>
                <p className="text-[#94a3b8] text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-[#f1f5f9] text-center mb-12"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Our Credentials
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-5xl font-bold bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {stat.number}
                </div>
                <div className="text-[#94a3b8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold text-[#f1f5f9] mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-[#94a3b8] text-lg mb-8">
            Let's discuss how we can help your business grow online
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-[#f1f5f9] font-medium text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] transition-all"
          >
            Book a Call
          </button>
        </div>
      </section>
    </div>
  );
}
