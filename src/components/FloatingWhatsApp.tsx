import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { engineerInfo } from '@/data/engineeringData'

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      {/* Quick message tooltip on hover / load */}
      <div 
        className={`hidden sm:flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-2xl shadow-xl border border-slate-200 text-xs font-bold transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-90 translate-x-1'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>تواصل مباشرة عبر واتساب مع المهندس</span>
      </div>

      <a
        href={engineerInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 bg-gradient-to-tr from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-white rounded-full flex items-center justify-center shadow-2xl animate-whatsapp-pulse transition-transform hover:scale-110 active:scale-95 group"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="sr-only">تواصل عبر واتساب</span>
      </a>
    </div>
  )
}
