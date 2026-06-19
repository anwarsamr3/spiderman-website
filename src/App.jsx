import { useState } from 'react'
import { ArrowUpRight, Award, Crown, X } from 'lucide-react'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = ["Projects", "Studio", "Offerings", "Inquire"]
  
  const stats = [
    { value: "250+", label: "Brands Transformed" },
    { value: "95%", label: "Client Retention" },
    { value: "10+", label: "Years in the Game" }
  ]

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden text-white flex flex-col justify-between font-inter select-none">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Dark tint overlay to make text highly readable */}
      <div className="absolute inset-0 bg-black/45 z-10 pointer-events-none" />

      {/* Navbar */}
      <header className="relative z-20 flex items-center justify-between w-full px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
        {/* Brand */}
        <div className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
          VANGUARD
        </div>

        {/* Center Links (Desktop Only) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-white/80 hover:text-white tracking-widest uppercase transition-colors duration-300 font-medium"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right CTA (Desktop Only) */}
        <div className="hidden md:block">
          <a
            href="#inquire"
            className="border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase hover:bg-white/10 transition-all duration-300 flex items-center gap-1.5 font-medium"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          className="space-y-1.5 md:hidden cursor-pointer flex flex-col items-end"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <div className="w-6 h-0.5 bg-white transition-all" />
          <div className="w-6 h-0.5 bg-white transition-all" />
          <div className="w-4 h-0.5 bg-white transition-all" />
        </button>
      </header>

      {/* Hero Content */}
      <main className="relative z-20 flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 w-full max-w-4xl">
        
        {/* Tagline */}
        <div className="animate-fade-up flex items-center gap-2 mb-6 lg:mb-8">
          <Crown className="w-4 h-4 text-white/70" />
          <span className="text-white/70 text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold">
            World-Class Digital Collective
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="animate-fade-up-delay-1 flex flex-col leading-[0.92] tracking-tight font-podium text-white uppercase text-[clamp(2.8rem,8vw,7rem)]">
          <span>Design.</span>
          <span>Disrupt.</span>
          <span>Conquer.</span>
        </h1>

        {/* Subtext */}
        <p className="animate-fade-up-delay-2 text-white/70 text-sm sm:text-base leading-relaxed max-w-md mt-6 lg:mt-8 font-light">
          We build fierce brand identities <br className="hidden sm:inline" />
          that don't just turn heads — <strong className="text-white font-semibold">they lead.</strong>
        </p>

        {/* CTA Row */}
        <div className="animate-fade-up-delay-3 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          <button className="group bg-black hover:bg-neutral-900 px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-transparent font-semibold">
            <span>See Our Work</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          
          <div className="hidden sm:flex items-center gap-3">
            <Award className="w-8 h-8 text-white/50" />
            <div className="flex flex-col text-white/60 text-[10px] tracking-wider uppercase font-semibold leading-tight font-inter">
              <span>Top-Rated</span>
              <span>Brand Studio</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="animate-fade-up-delay-4 mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {stat.value}
              </span>
              <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1 font-medium font-inter">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </main>

      {/* Footer Area with Credit */}
      <footer className="relative z-20 flex items-center justify-between w-full px-6 sm:px-10 lg:px-16 pb-6 text-[10px] sm:text-xs text-white/40 tracking-wider">
        <span className="uppercase">© 2026 VANGUARD Collective.</span>
        <a
          href="https://github.com/spiderman"
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase hover:text-white transition-colors duration-300 flex items-center gap-1 font-semibold font-inter"
        >
          <span>Made by spiderman</span>
        </a>
      </footer>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-6 sm:p-10 transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Header row in mobile overlay */}
        <div className="flex items-center justify-between w-full">
          <div className="font-podium text-2xl font-bold uppercase tracking-wider text-white">
            VANGUARD
          </div>
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Centered nav links with staggered entrance */}
        <div className="flex flex-col items-center justify-center gap-6 flex-1">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                transition: 'all 0.5s ease-out',
                transitionDelay: `${i * 80 + 100}ms`,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: menuOpen ? 1 : 0
              }}
              className="text-white hover:text-white/60 transition-colors font-podium text-4xl sm:text-5xl uppercase tracking-widest"
            >
              {link}
            </a>
          ))}

          {/* Staggered CTA button inside Mobile Menu */}
          <a
            href="#inquire"
            onClick={() => setMenuOpen(false)}
            style={{
              transition: 'all 0.5s ease-out',
              transitionDelay: `${navLinks.length * 80 + 100}ms`,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: menuOpen ? 1 : 0
            }}
            className="mt-8 border border-white/30 hover:border-white/60 px-8 py-4 text-xs tracking-widest uppercase hover:bg-white/10 transition-all flex items-center gap-2 font-medium font-inter"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Empty placeholder at bottom of overlay for layout balance */}
        <div className="h-10" />
      </div>

    </div>
  )
}
