import { useState, useEffect } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { 
  Building2, 
  Menu, 
  X, 
  Phone, 
  Layers, 
  Home, 
  Briefcase, 
  User, 
  Mail, 
  SendHorizontal, 
  Compass
} from 'lucide-react'
import { engineerInfo } from '@/data/engineeringData'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [currentPath])

  const navLinks = [
    { name: 'الرئيسية', path: '/', icon: Home },
    { name: 'الخدمات', path: '/services', icon: Layers },
    { name: 'معرض الأعمال', path: '/projects', icon: Briefcase },
    { name: 'نبذة عني', path: '/about', icon: User },
    { name: 'اتصل بنا', path: '/contact', icon: Mail },
  ]

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true
    if (path !== '/' && currentPath.startsWith(path)) return true
    return false
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B192C]/95 backdrop-blur-md shadow-xl py-3 border-b border-slate-800' 
          : 'bg-[#0B192C] py-4 border-b border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                {engineerInfo.name}
              </span>
              <span className="text-xs text-amber-400/90 font-medium tracking-wide">
                {engineerInfo.title}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path)
              const Icon = link.icon
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    active
                      ? 'bg-amber-400/15 text-amber-400 shadow-sm border border-amber-400/30'
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Actions: Request Service CTA & Phone */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${engineerInfo.phone}`}
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/60"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{engineerInfo.phoneDisplay}</span>
            </a>

            <Link
              to="/request-service"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-600/30 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <SendHorizontal className="w-4 h-4" />
              <span>طلب خدمة</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/request-service"
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-slate-950 shadow-sm"
            >
              طلب خدمة
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="القائمة الرئيسية"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0B192C]/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path)
              const Icon = link.icon
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    active
                      ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30'
                      : 'text-slate-200 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${active ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                </Link>
              )
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <Link
              to="/request-service"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
            >
              <SendHorizontal className="w-5 h-5" />
              <span>تقديم طلب خدمة هندسية</span>
            </Link>

            <a
              href={`tel:${engineerInfo.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold bg-slate-800 text-slate-200 text-sm border border-slate-700"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{engineerInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
