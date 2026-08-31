import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { 
  X, 
  MapPin, 
  Calendar, 
  Maximize2, 
  SendHorizontal, 
  Layers, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Wrench
} from 'lucide-react'
import { ProjectItem, engineerInfo } from '@/data/engineeringData'

interface ProjectModalProps {
  project: ProjectItem | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  if (!project) return null

  const images = project.gallery.length > 0 ? project.gallery : [project.image]

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#0F1E36] border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto text-slate-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Gallery / Image Slider */}
        <div className="relative aspect-video sm:aspect-[16/9] w-full bg-slate-950 overflow-hidden rounded-t-2xl">
          <img
            src={images[activeImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-transparent to-black/30 pointer-events-none" />

          {/* Gallery navigation buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all"
                aria-label="الصورة السابقة"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all"
                aria-label="الصورة التالية"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Thumbnails strip */}
              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 px-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-12 h-8 rounded-md overflow-hidden border-2 transition-all ${
                      idx === activeImageIndex 
                        ? 'border-amber-400 scale-110 shadow-lg' 
                        : 'border-white/40 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-lg text-xs font-bold bg-amber-500/90 text-slate-950 shadow-md">
              {project.categoryLabel}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header Title & Key Stats */}
          <div className="border-b border-slate-700/60 pb-5">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              {project.title}
            </h2>
            
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5 text-amber-400">
                <MapPin className="w-4 h-4" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <Calendar className="w-4 h-4" />
                <span>سنة الإنجاز: {project.year}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <Maximize2 className="w-4 h-4" />
                <span>المساحة: {project.area}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2">
              وصف المشروع ونطاق العمل
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Highlights & Features */}
          {project.highlights.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3">
                أبرز المميزات المعمارية والحلول الهندسية
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-2">
                <Wrench className="w-3.5 h-3.5 text-amber-400" />
                <span>البرامج والتقنيات الهندسية المستخدمة:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-2">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>المخرجات المسلمة للعميل:</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.deliverablesSummary}
              </p>
            </div>
          </div>

          {/* Actions: Request similar project or WhatsApp */}
          <div className="pt-4 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-400">
              هل ترغب في تصميم مشابه لمشروعك السكني أو التجاري؟
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                to="/request-service"
                onClick={onClose}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-colors"
              >
                <SendHorizontal className="w-4 h-4" />
                <span>طلب تصميم مماثل</span>
              </Link>
              <a
                href={`https://wa.me/967782842655?text=${encodeURIComponent(`مرحباً م. يوسف، استفسر عن تنفيذ مشروع هندسي مماثل لمشروع: ${project.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
              >
                واتساب
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
