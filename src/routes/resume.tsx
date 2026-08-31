import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  GraduationCap, 
  Briefcase, 
  Layers, 
  CheckCircle2, 
  Compass, 
  Phone, 
  Mail, 
  MapPin, 
  Download
} from 'lucide-react'
import { 
  engineerInfo, 
  experienceTimeline, 
  educationData, 
  engineeringSkills 
} from '@/data/engineeringData'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})

function ResumePage() {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Resume Card Header */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-slate-100 pb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 mb-1">{engineerInfo.name}</h1>
            <p className="text-base text-amber-600 font-bold">{engineerInfo.title}</p>
            <p className="text-xs text-slate-500 mt-1">{engineerInfo.subtitle}</p>
          </div>

          <div className="space-y-1.5 text-xs text-slate-600 sm:text-left">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span dir="ltr">{engineerInfo.phoneDisplay}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>{engineerInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>{engineerInfo.locationShort}</span>
            </div>
          </div>
        </div>

        {/* Career Summary */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">الملخص المهني</h2>
          <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
            {engineerInfo.bioSummary}
          </p>
        </div>

        {/* Experience */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-amber-500" />
            <span>الخبرة المهنية والتنفيذ الميداني (+10 سنوات)</span>
          </h2>
          <div className="space-y-4">
            {experienceTimeline.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-white">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-slate-900 text-sm">{item.role}</h3>
                  <span className="text-xs font-bold text-amber-600">{item.period}</span>
                </div>
                <p className="text-xs text-slate-500 mb-2">{item.organization} - {item.location}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-amber-500" />
            <span>المؤهلات العلمية</span>
          </h2>
          <div className="space-y-3">
            {educationData.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-slate-900 text-sm">{edu.degree}</h3>
                  <span className="text-xs font-bold text-slate-500">{edu.year}</span>
                </div>
                <div className="text-xs font-bold text-emerald-600 my-1">{edu.grade}</div>
                <p className="text-xs text-slate-500">{edu.institution} - {edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Link to Request Service */}
        <div className="pt-6 border-t border-slate-100 text-center">
          <Link
            to="/request-service"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-colors"
          >
            <span>طلب خدمة هندسية من المهندس</span>
          </Link>
        </div>

      </div>

    </div>
  )
}
