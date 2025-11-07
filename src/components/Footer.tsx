import { Linkedin, Twitter, Github } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'privacy', label: 'Privacy' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-[#0d1117] border-t border-white/8 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity mb-3"
            >
              <img src="/logo.png" alt="LumeoDigital" className="h-12 w-12" />
              <span
                className="text-2xl font-bold bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                LumeoDigital
              </span>
            </button>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#f1f5f9] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-[#94a3b8] hover:text-[#2563eb] text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#f1f5f9] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-[#2563eb] hover:bg-[#1e3a8a] transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col items-center justify-center text-center">
          <p className="text-[#94a3b8] text-sm">
            © 2025 LumeoDigital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
