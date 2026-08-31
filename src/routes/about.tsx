import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  Compass, 
  Layers, 
  SendHorizontal, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare,
  FileText
} from 'lucide-react'
import { 
  engineerInfo, 
  engineeringSkills, 
  experienceTimeline, 
  educationData 
} from '@/data/engineeringData'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="py-12 space-y-16 sm:space-y-24">
      
      {/* Header Banner */}
      <section className="bg-[#0B192C] text-white py-16 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-blueprint-dark-grid opacity-25 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <User className="w-4 h-4 text-amber-400" />
            <span>السيرة الذاتية والخبرة المهنية</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            نبذة عن المهندس يوسف صالح قايد
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            مهندس معماري واستشاري هندسي يجمع بين الابتكار التصميمي والخبرة العملية في مواقع البناء لأكثر من 10 سنوات.
          </p>
        </div>
      </section>

      {/* Main Biography Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Avatar / Identity Box */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-amber-400/80 shadow-2xl bg-slate-900 p-1">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#0B192C] via-[#1E3E62] to-[#07101C] flex flex-col items-center justify-center text-white p-6 relative">
                <div className="w-20 h-20 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 mb-3">
                  <Compass className="w-10 h-10" />
                </div>
                <span className="font-black text-lg text-amber-400">{engineerInfo.name}</span>
                <span className="text-xs text-slate-300 text-center mt-1">مهندس معماري واستشاري هندسي</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-sm font-bold text-slate-800">بكالوريوس هندسة معمارية 2024</div>
              <div className="text-xs text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                تقدير: جيد جداً (80.13%)
              </div>
            </div>
          </div>

          {/* Bio Text & Details */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                رؤية هندسية واضحة
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                الجمع بين الإبداع المعماري والفهم الميداني الدقيق للبناء
              </h2>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border-r-4 border-amber-500 text-slate-800 text-base leading-relaxed font-medium">
              "{engineerInfo.bioSummary}"
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              خلال أكثر من 10 سنوات من العمل الميداني المتواصل في إدارة مواقع البناء وتنفيذ الهياكل الخرسانية والتشطيبات المعمارية الدقيقة، تبلورت لدي قناعة راسخة بأن التصميم المعماري الناجح ليس مجرد خطوط جذابة على الشاشة، بل هو مخطط واقعي، قابل للتنفيذ بأعلى جودة، وموفر للميزانية ومحدد بدقة لتفادي أي أخطاء أو هدر في المواد.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>إتقان برامج Revit و AutoCAD و Lumion 3D</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>إعداد لوحات تنفيذية تفصيلية (Working Drawings)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>حصر كميات دقيق 100% وجداول مواصفات</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>خبرة تواصل وإدارة مشاريع عن بُعد</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Experience Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-2">
            <Briefcase className="w-3.5 h-3.5 text-amber-600" />
            <span>مسيرة العمل والخبرات</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            الخبرة المهنية والميدانية
          </h2>
        </div>

        <div className="space-y-6">
          {experienceTimeline.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    {exp.organization} • {exp.location}
                  </p>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-slate-900 text-amber-400 font-bold text-xs self-start sm:self-auto">
                  {exp.period}
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-800">أبرز الإنجازات:</div>
                <div className="space-y-1.5">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Academic Qualifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
            <span>المؤهلات العلمية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            التعليم والشهادات الهندسية
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {edu.institution} • {edu.year}
                  </p>
                </div>

                <div className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  {edu.grade}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Skills Proficiency */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-2">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>المهارات والبرمجيات</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            الكفاءة في البرامج والأدوات الهندسية
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {engineeringSkills.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-6"
            >
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                {cat.title}
              </h3>

              <div className="space-y-5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800">
                      <span>{skill.name}</span>
                      <span className="text-amber-600 font-mono">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <p className="text-[11px] text-slate-500">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Contact CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl border border-slate-700">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            دعنا نتعاون في تنفيذ وتصميم مشروعك القادم
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            يسعدني استقبال استفساراتكم ومناقشة تفاصيل المشاريع لتقديم الاستشارة الهندسية المخصصة.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/request-service"
              className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg transition-colors inline-flex items-center gap-2"
            >
              <SendHorizontal className="w-4 h-4" />
              <span>طلب خدمة هندسية</span>
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-600 transition-colors"
            >
              معلومات الاتصال
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
