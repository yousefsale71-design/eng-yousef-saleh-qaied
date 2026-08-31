import { Link } from '@tanstack/react-router'
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ChevronLeft, 
  Compass, 
  SendHorizontal,
  CheckCircle2
} from 'lucide-react'
import { engineerInfo, servicesData } from '@/data/engineeringData'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#07101C] text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-blueprint-dark-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Column 1: Identity & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20">
                <Compass className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">{engineerInfo.name}</h3>
                <p className="text-xs text-amber-400 font-medium">{engineerInfo.title}</p>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              أكثر من 10 سنوات خبرة بين التصميم المعماري والتنفيذ الميداني. نقدم حلولاً واستشارات هندسية متكاملة عن بُعد في اليمن ومختلف الدول.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>بكالوريوس هندسة معمارية 2024 (جيد جداً 80.13%)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>دقة تنفيذية تامة ومطابقة لكود البناء</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-5 pb-2 border-b border-slate-800 inline-block">
              روابط الموقع
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-amber-400" />
                  <span>الصفحة الرئيسية</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-amber-400" />
                  <span>الخدمات الهندسية</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-amber-400" />
                  <span>معرض الأعمال والمشاريع</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-amber-400" />
                  <span>نبذة عني والسيرة الذاتية</span>
                </Link>
              </li>
              <li>
                <Link to="/request-service" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-bold text-amber-300">
                  <ChevronLeft className="w-3.5 h-3.5 text-amber-400" />
                  <span>طلب خدمة هندسية أونلاين</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-amber-400" />
                  <span>اتصل بنا ومعلومات التواصل</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-base font-bold text-white mb-5 pb-2 border-b border-slate-800 inline-block">
              الخدمات الهندسية
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link 
                    to="/services" 
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-slate-500" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white mb-5 pb-2 border-b border-slate-800 inline-block">
              معلومات الاتصال المباشر
            </h4>
            
            <div className="space-y-3 text-sm">
              <a 
                href={`tel:${engineerInfo.phone}`}
                className="flex items-start gap-3 text-slate-300 hover:text-amber-400 transition-colors"
                dir="ltr"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0 text-amber-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">الهاتف والاتصال المباشر:</div>
                  <div className="font-semibold text-slate-200">{engineerInfo.phoneDisplay}</div>
                </div>
              </a>

              <a 
                href={`mailto:${engineerInfo.email}`}
                className="flex items-start gap-3 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0 text-amber-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">البريد الإلكتروني:</div>
                  <div className="font-semibold text-slate-200 break-all">{engineerInfo.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0 text-amber-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">المقر الرئيسي:</div>
                  <div className="font-semibold text-slate-200">{engineerInfo.location}</div>
                </div>
              </div>

              <a 
                href={engineerInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors mt-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>محادثة واتساب فورية</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            جميع الحقوق محفوظة © {currentYear} | {engineerInfo.name} – {engineerInfo.title}
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>خدمات هندسية عن بُعد</span>
            <span>•</span>
            <span>تصميم معماري وتراخيص</span>
            <span>•</span>
            <span>حصر كميات وإشراف</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
