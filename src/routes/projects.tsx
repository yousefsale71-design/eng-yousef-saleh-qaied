import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  Briefcase, 
  Search, 
  MapPin, 
  Maximize2, 
  Calendar, 
  ArrowLeft, 
  SendHorizontal, 
  Sparkles,
  Layers,
  Filter
} from 'lucide-react'
import { projectsData, ProjectItem, engineerInfo } from '@/data/engineeringData'
import { ProjectModal } from '@/components/ProjectModal'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  const categories = [
    { id: 'all', label: 'كافة المشاريع' },
    { id: 'architectural', label: 'تصميم معماري' },
    { id: 'interior', label: 'تصميم داخلي وديكور' },
    { id: 'rendering', label: 'إظهار ورندر Lumion' },
    { id: 'drawings', label: 'مخططات تنفيذية وحصر' },
    { id: 'commercial', label: 'مشاريع تجارية' },
  ]

  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  return (
    <div className="py-12 space-y-12 sm:space-y-16">
      
      {/* Header Banner */}
      <section className="bg-[#0B192C] text-white py-16 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-blueprint-dark-grid opacity-25 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Briefcase className="w-4 h-4 text-amber-400" />
            <span>سابقة الأعمال والخبرة الهندسية</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            معرض المشاريع والأعمال الهندسية
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            استعرض تشكيلة مختارة من مشاريع الفلل السكنية، المباني التجارية، التصاميم الداخلية، ورندرات Lumion فائقة الواقعية والمخططات التنفيذية.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          
          {/* Categories Filters */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#0B192C] text-amber-400 shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث باسم المشروع أو البرنامج..."
              className="w-full pl-4 pr-10 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 bg-slate-50"
            />
          </div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">لم يتم العثور على نتائج</h3>
            <p className="text-xs text-slate-500">
              جرب تغيير كلمة البحث أو اختيار تصنيف آخر من القائمة أعلاه.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all')
                setSearchQuery('')
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#0B192C] text-amber-400"
            >
              عرض كافة المشاريع
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-bold text-[11px] px-2.5 py-0.5 rounded-lg shadow-md">
                    {project.categoryLabel}
                  </div>

                  <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm text-slate-200 text-[11px] px-2.5 py-1 rounded-md flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tools Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-500" />
                      <span>{project.area}</span>
                    </div>

                    <span className="text-slate-900 font-bold flex items-center gap-1 group-hover:text-amber-600 transition-colors">
                      <span>عرض التفاصيل</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </section>

      {/* Bottom CTA for Project Request */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl border border-slate-700">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            هل ترغب في البدء بتصميم مشروعك الخاص؟
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            أرسل لنا بيانات ومخططات قطعتك أو رغبتك المعمارية وسنبدأ معك خطوة بخطوة حتى استلام المشروع كاملاً.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/request-service"
              className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg transition-colors inline-flex items-center gap-2"
            >
              <SendHorizontal className="w-4 h-4" />
              <span>تقديم طلب مشروع جديد</span>
            </Link>
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
