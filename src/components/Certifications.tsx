import { certificationsData } from '../data';
import { Award, CheckCircle, Loader2, Calendar } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-widest">
            Professional Qualifications
          </span>
          <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Certifications <span className="font-sans font-bold">&</span> Training
          </h2>
          <div className="mt-2 h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-3.5 font-sans text-base text-slate-500 leading-relaxed">
            Professional training and certifications that support my continuous learning journey in Software Testing and Quality Assurance.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-4.5 sm:p-5 flex items-start gap-4 hover:border-slate-300 hover:bg-white hover:shadow-xs transition-all duration-300 shadow-2xs"
            >
              {/* Icon Frame */}
              <div className={`p-2.5 rounded-xl shrink-0 ${
                cert.status === 'Completed'
                  ? 'bg-green-50 text-green-700 border border-green-100'
                  : 'bg-blue-50 text-blue-700 border border-blue-100'
              }`}>
                {cert.status === 'Completed' ? (
                  <CheckCircle className="w-5.5 h-5.5" />
                ) : (
                  <Loader2 className="w-5.5 h-5.5 animate-spin" />
                )}
              </div>

              {/* Text content */}
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded-md font-mono text-[10px] uppercase font-extrabold tracking-wider ${
                    cert.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {cert.status}
                  </span>
                  {cert.date && (
                    <span className="inline-flex items-center gap-1 text-slate-500 font-mono text-xs font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{cert.date}</span>
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug">
                  {cert.title}
                </h3>
                
                <p className="font-sans text-slate-600 text-sm">
                  {cert.issuer}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Future Scope Note (Humble and realistic) */}
        <div className="mt-10 p-5 bg-slate-50 border border-slate-200 rounded-2xl max-w-xl mx-auto text-center shadow-2xs">
          <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
            I continuously improve my testing skills through practical projects, online learning, and hands-on practice with modern QA tools and automation fundamentals.
          </p>
        </div>

      </div>
    </section>
  );
}
