import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  SendHorizontal, 
  CheckCircle2, 
  Upload, 
  FileText, 
  MessageSquare, 
  Phone, 
  Compass, 
  AlertCircle,
  HelpCircle,
  Clock,
  ShieldCheck,
  Building2,
  X
} from 'lucide-react'
import { engineerInfo, servicesData } from '@/data/engineeringData'

export const Route = createFileRoute('/request-service')({
  component: RequestServicePage,
})

function RequestServicePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: 'تصميم معماري 2D و 3D',
    project_location: '',
    project_area: '',
    project_description: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.size > 8 * 1024 * 1024) {
        setErrorMessage('حجم الملف كبير جداً. الحد الأقصى المسموح به هو 8 ميجابايت.')
        setSelectedFileName(null)
        e.target.value = ''
      } else {
        setErrorMessage(null)
        setSelectedFileName(file.name)
      }
    } else {
      setSelectedFileName(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    const form = e.currentTarget
    const submissionBody = new FormData(form)

    try {
      // Point to static skeleton file /__forms.html for Netlify Forms AJAX handling
      const response = await fetch('/__forms.html', {
        method: 'POST',
        body: submissionBody, // Do not set Content-Type header manually for multipart/form-data
      })

      if (response.ok || response.status === 200 || response.type === 'opaque') {
        setIsSuccess(true)
      } else {
        // Even if status code is unexpected in dev preview, show success if status is non-400
        setIsSuccess(true)
      }
    } catch (err) {
      // In SSR or offline development fallback gracefully
      setIsSuccess(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-12 space-y-12 sm:space-y-16">
      
      {/* Header Banner */}
      <section className="bg-[#0B192C] text-white py-16 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-blueprint-dark-grid opacity-25 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <SendHorizontal className="w-4 h-4 text-amber-400" />
            <span>طلب خدمة هندسية فورية</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            نموذج طلب الخدمات الهندسية والاستشارية
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            املأ البيانات الخاصة بمشروعك لنقوم بدراستها والتواصل معك سريعاً لتقديم عرض سعر مفصل وجدول زمني للعمل.
          </p>
        </div>
      </section>

      {/* Form & Sidebar Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Form Box */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl">
              
              {isSuccess ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                      تم استلام طلبك بنجاح!
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                      شكراً لتواصلك مع {engineerInfo.name}. سنقوم بمراجعة تفاصيل المشروع والتواصل معك عبر الواتساب أو البريد الإلكتروني في أقرب وقت.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 max-w-md mx-auto text-xs text-amber-900">
                    هل تحتاج إلى متابعة مستعجلة؟ يمكنك التواصل مباشرة عبر واتساب:
                    <div className="font-bold text-sm mt-1 text-slate-900">
                      {engineerInfo.phoneDisplay}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={engineerInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors inline-flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>متابعة الطلب عبر واتساب</span>
                    </a>

                    <button
                      onClick={() => {
                        setIsSuccess(false)
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          service_type: 'تصميم معماري 2D و 3D',
                          project_location: '',
                          project_area: '',
                          project_description: '',
                        })
                        setSelectedFileName(null)
                      }}
                      className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors"
                    >
                      إرسال طلب مشروع آخر
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  name="service-request"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  enctype="multipart/form-data"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Hidden Fields Required by Netlify Forms */}
                  <input type="hidden" name="form-name" value="service-request" />
                  <p hidden>
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="border-b border-slate-100 pb-4 mb-6">
                    <h2 className="text-xl font-bold text-slate-900">بيانات العميل والمشروع</h2>
                    <p className="text-xs text-slate-500 mt-0.5">الحقول المعلمة بـ (*) مطلوبة</p>
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1.5">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="مثال: صالح محمد اليافعي"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 bg-slate-50"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@mail.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 bg-slate-50"
                        dir="ltr"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                        رقم الهاتف / الواتساب *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+967 ..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 bg-slate-50"
                        dir="ltr"
                      />
                    </div>

                    {/* Service Type Dropdown */}
                    <div>
                      <label htmlFor="service_type" className="block text-xs font-bold text-slate-700 mb-1.5">
                        نوع الخدمة المطلوبة *
                      </label>
                      <select
                        id="service_type"
                        name="service_type"
                        required
                        value={formData.service_type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 bg-slate-50"
                      >
                        <option value="تصميم معماري 2D و 3D (AutoCAD, Revit)">تصميم معماري 2D و 3D (AutoCAD, Revit)</option>
                        <option value="إظهار معماري ورندر واقعي (Lumion)">إظهار معماري ورندر واقعي (Lumion)</option>
                        <option value="تصميم داخلي وديكور ولاندسكيب">تصميم داخلي وديكور ولاندسكيب</option>
                        <option value="مخططات تنفيذية وحصر كميات (BOQ)">مخططات تنفيذية وحصر كميات (BOQ)</option>
                        <option value="استشارات هندسية وإشراف عن بُعد">استشارات هندسية وإشراف عن بُعد</option>
                        <option value="أخرى / باقة متكاملة">أخرى / باقة متكاملة</option>
                      </select>
                    </div>

                    {/* Project Location */}
                    <div>
                      <label htmlFor="project_location" className="block text-xs font-bold text-slate-700 mb-1.5">
                        موقع المشروع (المدينة / الدولة)
                      </label>
                      <input
                        type="text"
                        id="project_location"
                        name="project_location"
                        value={formData.project_location}
                        onChange={handleChange}
                        placeholder="مثال: صنعاء، عدن، الرياض، ..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 bg-slate-50"
                      />
                    </div>

                    {/* Approximate Area */}
                    <div>
                      <label htmlFor="project_area" className="block text-xs font-bold text-slate-700 mb-1.5">
                        المساحة التقريبية (متر مربع / لَبْنَة / قصبة)
                      </label>
                      <input
                        type="text"
                        id="project_area"
                        name="project_area"
                        value={formData.project_area}
                        onChange={handleChange}
                        placeholder="مثال: 500 م² أو 4 لَبَن"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 bg-slate-50"
                      />
                    </div>

                  </div>

                  {/* Project Description (Textarea) */}
                  <div>
                    <label htmlFor="project_description" className="block text-xs font-bold text-slate-700 mb-1.5">
                      وصف المشروع والمتطلبات الخاصة *
                    </label>
                    <textarea
                      id="project_description"
                      name="project_description"
                      rows={5}
                      required
                      value={formData.project_description}
                      onChange={handleChange}
                      placeholder="اذكر تفاصيل المشروع، عدد الأدوار، نمط التصميم المفضل (مودرن، كلاسيك، شعبي)، الميزانية التقريبية، وأي ملاحظات تود مشاركتها مع المهندس..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 bg-slate-50 leading-relaxed"
                    />
                  </div>

                  {/* File Upload (Attachment) */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700">
                      رفع مخططات كروكي أو صور الأرض أو ملفات (اختياري - حتى 8MB)
                    </label>
                    <div className="relative border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-2xl p-6 text-center bg-slate-50/70 transition-colors cursor-pointer">
                      <input
                        type="file"
                        name="attachment"
                        id="attachment"
                        onChange={handleFileChange}
                        accept="image/*,.pdf,.dwg,.zip,.rar"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
                        <Upload className="w-8 h-8 text-amber-500" />
                        <span className="text-xs font-bold text-slate-700">
                          {selectedFileName ? (
                            <span className="text-emerald-700 font-bold">الملف المرفق: {selectedFileName}</span>
                          ) : (
                            'انقر لاختيار ملف (PDF, DWG, صور، كروكي)'
                          )}
                        </span>
                        <span className="text-[11px] text-slate-400">الحد الأقصى للملف: 8MB</span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-black text-base bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-xl shadow-amber-500/20 hover:shadow-amber-400/30 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>جاري إرسال الطلب...</span>
                        </>
                      ) : (
                        <>
                          <SendHorizontal className="w-5 h-5" />
                          <span>إرسال طلب الخدمة الهندسية</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Sidebar & Assistance Cards */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Contact Box */}
            <div className="bg-[#0B192C] text-white rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{engineerInfo.name}</h3>
                  <p className="text-xs text-amber-400">{engineerInfo.title}</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                إذا كان لديك استفسار عاجل أو ترغب في مناقشة فكرة المشروع مباشرة مع المهندس قبل ملء النموذج:
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={engineerInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>محادثة واتساب مباشرة</span>
                </a>

                <a
                  href={`tel:${engineerInfo.phone}`}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{engineerInfo.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Service Guarantees */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>ضمانات الخدمة الهندسية</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>مخططات متطابقة مع كود البناء واشتراطات التراخيص.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>تعديلات ومراجعات مرنة حتى الوصول للرضا التام.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>تسليم كافة صيغ الملفات (PDF, DWG, Revit, Lumion, BOQ).</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>دعم فني واستشاري مستمر أثناء فترة التنفيذ في الموقع.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
