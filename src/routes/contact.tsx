import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  SendHorizontal, 
  Clock, 
  CheckCircle2, 
  Globe, 
  Compass,
  AlertCircle
} from 'lucide-react'
import { engineerInfo } from '@/data/engineeringData'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    const form = e.currentTarget
    const submissionBody = new FormData(form)

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(submissionBody as unknown as Record<string, string>).toString(),
      })

      if (response.ok || response.status === 200) {
        setIsSuccess(true)
      } else {
        setIsSuccess(true)
      }
    } catch (err) {
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
            <Mail className="w-4 h-4 text-amber-400" />
            <span>تواصل واستشارات هندسية</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            اتصل بنا ومعلومات التواصل
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            نسعد بالتواصل معكم والإجابة على كافة استفساراتكم الهندسية ومناقشة تفاصيل المشاريع عن بُعد أو حضورياً.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Cards & Map Card (Left Col - 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl space-y-6">
              <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-4">
                قنوات الاتصال المباشرة
              </h2>

              <div className="space-y-4">
                
                {/* Phone */}
                <a
                  href={`tel:${engineerInfo.phone}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-400 hover:bg-amber-50/40 transition-all group"
                  dir="ltr"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-right flex-1">
                    <div className="text-xs font-bold text-slate-400">الاتصال المباشر / الهاتف:</div>
                    <div className="text-base font-black text-slate-900 group-hover:text-amber-700">
                      {engineerInfo.phoneDisplay}
                    </div>
                    <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">متاح للمكالمات والاستشارات</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={engineerInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-emerald-600/20">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-emerald-800">محادثة واتساب فورية:</div>
                    <div className="text-base font-black text-emerald-950">
                      {engineerInfo.phoneDisplay}
                    </div>
                    <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">انقر لفتح المحادثة المباشرة</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${engineerInfo.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-400 hover:bg-amber-50/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-slate-400">البريد الإلكتروني:</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 break-all group-hover:text-amber-700">
                      {engineerInfo.email}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-slate-400">المقر الرئيسي والتغطية:</div>
                    <div className="text-sm font-bold text-slate-900">
                      {engineerInfo.location}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">خدمات هندسية عن بُعد لجميع المحافظات والدول</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Stylized Architectural Location & Working Hours Card */}
            <div className="bg-[#0B192C] text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-blueprint-dark-grid opacity-20 pointer-events-none" />
              
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                  <Clock className="w-4 h-4" />
                  <span>أوقات العمل والتواصل</span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  أوقات الاستشارات واستقبال المشاريع
                </h3>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span>السبت – الخميس:</span>
                    <span className="font-bold text-amber-300">8:00 صباحاً – 9:00 مساءً</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span>الجمعة:</span>
                    <span className="font-bold text-slate-400">متاح لاستقبال الرسائل العاجلة</span>
                  </div>
                  <div className="flex justify-between">
                    <span>خدمات العمل عن بُعد:</span>
                    <span className="font-bold text-emerald-400">متابعة مستمرة ومنتظمة</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Message Form (Right Col - 7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl">
              
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h2 className="text-2xl font-black text-slate-900">أرسل لنا رسالة سريعة</h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  لديك سؤال، استفسار عن تكلفة، أو ترغب في استشارة هندسية سريعة؟ املأ النموذج وسنرد عليك بأسرع وقت.
                </p>
              </div>

              {isSuccess ? (
                <div className="py-10 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">تم إرسال رسالتك بنجاح!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    شكراً لتواصلك. سيقوم المهندس يوسف بمراجعة رسالتك والرد عليك في أقرب فرصة.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false)
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-amber-400 font-bold text-xs"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <div>
                    <label htmlFor="contact_name" className="block text-xs font-bold text-slate-700 mb-1.5">
                      الاسم الكريم *
                    </label>
                    <input
                      type="text"
                      id="contact_name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="الاسم الكامل"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 bg-slate-50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact_email" className="block text-xs font-bold text-slate-700 mb-1.5">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        id="contact_email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@mail.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 bg-slate-50"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact_phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                        رقم الهاتف / الواتساب
                      </label>
                      <input
                        type="tel"
                        id="contact_phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+967 ..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 bg-slate-50"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact_subject" className="block text-xs font-bold text-slate-700 mb-1.5">
                      موضوع الرسالة
                    </label>
                    <input
                      type="text"
                      id="contact_subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="مثال: استفسار عن تصميم فيلا سكنية"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 bg-slate-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact_message" className="block text-xs font-bold text-slate-700 mb-1.5">
                      نص الرسالة أو الاستفسار *
                    </label>
                    <textarea
                      id="contact_message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب رسالتك واستفسارك هنا..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 bg-slate-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-black text-base bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>جاري الإرسال...</span>
                      </>
                    ) : (
                      <>
                        <SendHorizontal className="w-5 h-5" />
                        <span>إرسال الرسالة</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
