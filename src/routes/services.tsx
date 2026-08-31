import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  Compass, 
  Sparkles, 
  Palette, 
  FileSpreadsheet, 
  ShieldCheck, 
  CheckCircle2, 
  SendHorizontal, 
  MessageSquare, 
  Layers, 
  Cpu, 
  ArrowLeft,
  FileCheck,
  Check
} from 'lucide-react'
import { servicesData, engineerInfo } from '@/data/engineeringData'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

const iconMap: Record<string, typeof Compass> = {
  Compass,
  Sparkles,
  Palette,
  FileSpreadsheet,
  ShieldCheck,
}

function ServicesPage() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(servicesData[0].id)

  const activeService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0]
  const ActiveIcon = iconMap[activeService.iconName] || Compass

  return (
    <div className="py-12 space-y-16 sm:space-y-24">
      
      {/* Header Banner */}
      <section className="bg-[#0B192C] text-white py-16 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-blueprint-dark-grid opacity-25 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>خدمات هندسية متكاملة عن بُعد</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            خدماتنا الهندسية والاستشارية
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            نقدم باقة شاملة من الخدمات المعمارية والتنفيذية بأسلوب رقمي احترافي، من الفكرة الأولية والمخططات إلى الرندر ثلاثي الأبعاد والمطابقة الميدانية.
          </p>
        </div>
      </section>

      {/* Interactive Service Detail Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 pb-4 border-b border-slate-200">
          {servicesData.map((s) => {
            const Icon = iconMap[s.iconName] || Compass
            const isSelected = s.id === selectedServiceId
            return (
              <button
                key={s.id}
                onClick={() => setSelectedServiceId(s.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#0B192C] text-amber-400 shadow-lg scale-105 border border-amber-500/40'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                <span>{s.title}</span>
              </button>
            )
          })}
        </div>

        {/* Active Service Deep Dive Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-md">
                  <ActiveIcon className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {activeService.title}
                  </h2>
                  {activeService.badge && (
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                      {activeService.badge}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {activeService.fullDesc}
              </p>

              {/* Tools & Technologies */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  البرامج والتقنيات المستخدمة:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeService.tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-2 pt-2">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  أهم الميزات والمنافع:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeService.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <Link
                  to="/request-service"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-md transition-colors"
                >
                  <SendHorizontal className="w-4 h-4" />
                  <span>طلب هذه الخدمة الآن</span>
                </Link>

                <a
                  href={`https://wa.me/967782842655?text=${encodeURIComponent(`مرحباً م. يوسف، أود الاستفسار عن خدمة: ${activeService.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>استشارة فورية عبر واتساب</span>
                </a>
              </div>

            </div>

            {/* Right Column: Deliverables Checklist */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-r border-slate-800">
              
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-amber-400">
                  <FileCheck className="w-5 h-5" />
                  <h3 className="text-lg font-bold text-white">
                    المخرجات المسلمة للعميل (Deliverables)
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  تحصل عند طلب هذه الخدمة على حزمة ملفات رقمية معتمدة ومتوافقة مع كود البناء:
                </p>

                <ul className="space-y-3.5 text-xs sm:text-sm">
                  {activeService.deliverables.map((d, index) => (
                    <li key={index} className="flex items-start gap-3 bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/70">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200 leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                <div className="text-amber-400 font-bold">صيغ الملفات المسلمة:</div>
                <div>PDF جاهز للطباعة عالية الدقة + DWG أوتوكاد + ملفات Revit/Lumion + Excel لحصر الكميات.</div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* All Services Grid Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            نظرة شاملة على جميع الخدمات الهندسية
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            يمكنك طلب خدمة واحدة منفردة أو باقة متكاملة من التصميم وحتى التنفيذ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Compass
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedServiceId(service.id)
                      window.scrollTo({ top: 400, behavior: 'smooth' })
                    }}
                    className="text-xs font-bold text-slate-900 hover:text-amber-600"
                  >
                    عرض التفاصيل
                  </button>

                  <Link
                    to="/request-service"
                    className="text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg"
                  >
                    طلب الخدمة
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0B192C] to-[#1E3E62] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl border border-slate-700">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            هل تحتاج إلى استشارة هندسية خاصة لمشروعك؟
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            تواصل معنا مباشرة عبر نموذج طلب الخدمة أو محادثة الواتساب لنقوم بدراسة فكرة مشروعك وتقديم العرض المناسب.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/request-service"
              className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg transition-colors"
            >
              تقديم طلب خدمة الآن
            </Link>
            <a
              href={engineerInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors"
            >
              واتساب مباشر (+967 782842655)
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
