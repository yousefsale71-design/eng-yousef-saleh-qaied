import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  Building2, 
  Compass, 
  Layers, 
  Sparkles, 
  Palette, 
  FileSpreadsheet, 
  ShieldCheck, 
  ArrowLeft, 
  SendHorizontal, 
  Phone, 
  CheckCircle2, 
  CheckCircle,
  Eye, 
  MessageSquare, 
  Clock, 
  Award, 
  ChevronDown, 
  MapPin, 
  Cpu, 
  Maximize2,
  ExternalLink
} from 'lucide-react'
import { 
  engineerInfo, 
  servicesData, 
  projectsData, 
  workflowSteps, 
  clientTestimonials, 
  faqs, 
  ProjectItem 
} from '@/data/engineeringData'
import { ProjectModal } from '@/components/ProjectModal'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const iconMap: Record<string, typeof Compass> = {
  Compass,
  Sparkles,
  Palette,
  FileSpreadsheet,
  ShieldCheck,
}

function HomePage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  // Featured 4 projects
  const featuredProjects = projectsData.slice(0, 4)

  return (
    <div className="space-y-20 sm:space-y-28">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-[#071322] text-white overflow-hidden py-16 sm:py-24">
        {/* Background Visual Render with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="تصميم معماري حديث"
            className="w-full h-full object-cover object-center opacity-25 scale-105 transform motion-safe:animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-[#071322]/85 to-[#071322]/70" />
          <div className="absolute inset-0 bg-blueprint-dark-grid opacity-30 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left/Main Column: Text & Hero Content */}
            <div className="lg:col-span-8 space-y-6 text-right">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>نقدم خدماتنا الهندسية عن بُعد في اليمن وخارجها</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.25]">
                <span className="block text-amber-400 font-extrabold text-2xl sm:text-3xl lg:text-4xl mb-2">
                  {engineerInfo.name}
                </span>
                {engineerInfo.title}
              </h1>

              {/* Slogan */}
              <p className="text-xl sm:text-2xl font-bold text-slate-200 border-r-4 border-amber-400 pr-4 leading-snug">
                "{engineerInfo.slogan}"
              </p>

              {/* Bio summary */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                أكثر من 10 سنوات خبرة بين التصميم المعماري والتنفيذ الميداني. نجمع بين التصميم الإبداعي والفهم العميق لتفاصيل البناء لإخراج مشاريع متكاملة وخالية من الأخطاء.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/request-service"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-black bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 shadow-xl shadow-amber-500/20 hover:shadow-amber-400/30 hover:-translate-y-1 transition-all"
                >
                  <SendHorizontal className="w-5 h-5" />
                  <span>اطلب خدمتك الآن</span>
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-600/80 hover:border-slate-500 transition-all"
                >
                  <Eye className="w-5 h-5 text-amber-400" />
                  <span>استعراض معرض الأعمال</span>
                </Link>

                <a
                  href={engineerInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-base font-bold bg-emerald-600/90 hover:bg-emerald-500 text-white shadow-lg transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>استشارة واتساب فورية</span>
                </a>
              </div>

              {/* Trust markers */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Revit & AutoCAD 2D/3D</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>رندر واقعي عالي الدقة Lumion</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>مخططات تنفيذية وحصر كميات</span>
                </div>
              </div>

            </div>

            {/* Right Column: Key Card / Visual Focus */}
            <div className="lg:col-span-4 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-sm space-y-5">
                
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-700">
                  <img
                    src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80"
                    alt="مشروع معماري"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-amber-400 border border-amber-500/30">
                    تصميم وإظهار ثلاثي الأبعاد
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>الخدمات الاستشارية والتصميمية</span>
                    <span className="text-emerald-400 font-bold">متاح لاستقبال المشاريع</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    لماذا تختار العمل معنا؟
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    نقدم لك تصاميم مدروسة هندسياً بدقة تامة تحمي مشروعك من التعديلات المكلفة أثناء البناء، مع متابعة مستمرة وتعديلات مرنة تلبي ذوقك وميزانيتك.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-amber-300 border border-slate-700 transition-colors"
                  >
                    <span>الاطلاع على السيرة المهنية والخبرات</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-6 sm:p-8">
          {engineerInfo.stats.map((st, idx) => (
            <div key={idx} className="text-center p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-amber-300 transition-colors">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B192C] tracking-tight mb-1">
                <span className="text-amber-500">{st.value}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-700">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>تخصصاتنا الهندسية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            خدمات هندسية ومعمارية متكاملة
          </h2>
          <p className="text-base text-slate-600">
            حلول شاملة تغطي كل مراحل المشروع المعماري من الفكرة المبدئية والتصميم ثلاثي الأبعاد إلى المخططات التنفيذية وحصر الكميات.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Compass
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
              >
                {service.badge && (
                  <div className="absolute top-5 left-5 bg-amber-500 text-slate-950 font-black text-[11px] px-2.5 py-0.5 rounded-full shadow-sm">
                    {service.badge}
                  </div>
                )}

                <div>
                  <div className="w-14 h-14 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Tools tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to="/services"
                    className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1 transition-colors"
                  >
                    <span>تفاصيل الخدمة والمخرجات</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/request-service"
                    className="text-xs font-bold text-amber-700 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    طلب الخدمة
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-[#0B192C] text-white hover:bg-slate-800 transition-colors shadow-lg"
          >
            <span>عرض تفاصيل جميع الخدمات والأسعار</span>
            <ArrowLeft className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SHOWCASE */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark-grid opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>نماذج من أعمالنا السابقة</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                معرض المشاريع والتصاميم الهندسية
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                مشاريع معمارية وسكنية وتجارية ورندر واقعي ثلاثي الأبعاد تم تنفيذها وتصميمها بأعلى معايير الجودة.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg transition-colors self-start md:self-auto"
            >
              <span>مشاهدة كافة المشاريع ({projectsData.length})</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-[#0F1E36] rounded-2xl overflow-hidden border border-slate-700/80 shadow-xl cursor-pointer hover:border-amber-400 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold bg-amber-500 text-slate-950 shadow-md">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-md text-xs text-slate-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>{project.area}</span>
                    </div>
                    
                    <span className="text-amber-400 font-bold flex items-center gap-1 group-hover:underline">
                      <span>عرض التفاصيل والصور</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY WORK WITH US / ADVANTAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>القيمة الهندسية المضافة</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-snug">
              لماذا يثق بنا العملاء لتصميم وإشراف مشاريعهم؟
            </h2>
            
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              نجمع بين الفن المعماري الأكاديمي والخبرة العملية الميدانية الممتدة لأكثر من عقد من الزمان. نضمن لك مخططات هندسية خالية من المشاكل التنفيذية وحصر كميات دقيق يوفر عليك تكاليف إضافية غير محسوبة.
            </p>

            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-2">
              <div className="font-bold text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600" />
                <span>ميزة التنفيذ الميداني</span>
              </div>
              <p className="text-xs leading-relaxed text-amber-900">
                المهندس الذي يفهم موقع البناء يصمم لك مساقط ذكية يسهل على المقاولين تنفيذها بدقة، مع حماية المبنى من أخطاء الميول، العوازل، والإنشاء.
              </p>
            </div>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-bold text-sm transition-colors"
              >
                <span>تعرف أكثر على السيرة الذاتية</span>
                <ArrowLeft className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {engineerInfo.advantages.map((adv, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. ENGINEERING WORKFLOW (5 STEPS) */}
      <section className="bg-slate-100 py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold">
              <span>آلية العمل الاحترافية</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              خطوات إنجاز مشروعك الهندسي عن بُعد
            </h2>
            <p className="text-sm text-slate-600">
              منهجية واضحة تضمن لك راحة البال والاطلاع المستمر على كل مرحلة من التصميم وحتى التسليم.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {workflowSteps.map((ws, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-amber-500 font-mono">{ws.step}</span>
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {ws.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>تسليم ومراجعة مرحلية</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl font-black text-slate-900">
            ماذا يقول عملاؤنا؟
          </h2>
          <p className="text-sm text-slate-600">
            آراء الملاك والمستثمرين الذين تشرفنا بالعمل على مشاريعهم الهندسية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-400">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-sm text-slate-900">{t.author}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl font-black text-slate-900">
            الأسئلة الشائعة
          </h2>
          <p className="text-sm text-slate-600">
            إجابات وافية على أهم الاستفسارات حول الخدمات الهندسية عن بُعد.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-right font-bold text-sm sm:text-base text-slate-900 hover:text-amber-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 mr-2 ${
                      isOpen ? 'rotate-180 text-amber-500' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* 9. BOTTOM CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#071322] via-[#0B192C] to-[#1E3E62] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-700">
          <div className="absolute inset-0 bg-blueprint-dark-grid opacity-25 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              ابدأ مشروعك الهندسي اليوم
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              جاهز لتحويل فكرة مشروعك إلى واقع معماري متكامل؟
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
              تواصل معنا الآن للحصول على استشارة هندسية أولية وعرض سعر مخصص لمشروعك السكني أو التجاري.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/request-service"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-base bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-xl shadow-amber-500/20 transition-all"
              >
                <SendHorizontal className="w-5 h-5" />
                <span>تقديم طلب خدمة</span>
              </Link>

              <a
                href={engineerInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>محادثة واتساب مباشرة</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-base bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>اتصل بنا</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  )
}
