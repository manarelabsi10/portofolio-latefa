import { educationData } from '../data';
import { GraduationCap, Award, Calendar, Bookmark } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Education <span className="font-sans font-bold">&</span> Academic Merits
          </h2>
          <div className="mt-2 h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-3.5 font-sans text-base text-slate-500 leading-relaxed">
            A strong academic foundation in Computer Science, Artificial Intelligence, and Software Testing principles.
          </p>
        </div>

        {/* Content Layout */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Pre-Master's Degree Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300 space-y-5 shadow-xs">
            
            {/* Header / School Row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-200">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100 shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 font-mono text-xs rounded-full font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Present</span>
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 leading-tight">
                    Pre-Master's Degree in Computer Science and Artificial Intelligence
                  </h3>
                  <p className="font-sans text-slate-700 font-semibold text-base">
                    Benha University
                  </p>
                  <p className="font-sans text-sm text-slate-500">
                    Benha, Egypt
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-2xl shrink-0 text-center self-center">
                <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-wider font-bold">Status</span>
                <span className="font-display font-extrabold text-slate-900 text-lg sm:text-xl">Present</span>
              </div>
            </div>

            {/* Academic Focus Segment */}
            <div className="space-y-2 pt-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <Bookmark className="w-5 h-5 text-blue-600 shrink-0" />
                <h4 className="font-display font-bold text-lg text-slate-900">
                  Academic Focus
                </h4>
              </div>
              <div className="pl-0 sm:pl-7">
                <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                  Currently pursuing a Pre-Master's degree to deepen my academic knowledge in Computer Science and Artificial Intelligence while continuing to advance my expertise in Software Quality Assurance.
                </p>
              </div>
            </div>

          </div>

          {/* Bachelor's Degree Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300 space-y-5 shadow-xs">
            
            {/* Header / School Row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-200">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100 shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 font-mono text-xs rounded-full font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{educationData.duration}</span>
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 leading-tight">
                    {educationData.degree}
                  </h3>
                  <p className="font-sans text-slate-700 font-semibold text-base">
                    {educationData.school}
                  </p>
                  <p className="font-sans text-sm text-slate-500">
                    {educationData.location}
                  </p>
                </div>
              </div>

              {/* GPA */}
              <div className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-2xl shrink-0 text-center self-center">
                <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-wider font-bold">Overall GPA</span>
                <span className="font-display font-extrabold text-slate-900 text-lg sm:text-xl">{educationData.gpa}</span>
              </div>
            </div>

            {/* Graduation Project Segment */}
            <div className="space-y-2 pt-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <Bookmark className="w-5 h-5 text-blue-600 shrink-0" />
                <h4 className="font-display font-bold text-lg text-slate-900">
                  Graduation Project
                </h4>
                <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-100 font-mono text-xs rounded-full font-bold">
                  Grade: {educationData.graduationProject.grade}
                </span>
              </div>
              <div className="pl-0 sm:pl-7 space-y-1.5">
                <p className="font-sans font-semibold text-slate-800 text-sm sm:text-base leading-snug">
                  {educationData.graduationProject.title}
                </p>
                <p className="font-sans text-slate-600 text-sm leading-relaxed">
                  {educationData.graduationProject.details}
                </p>
              </div>
            </div>

            {/* Awards & Academic Hackathons */}
            {educationData.awards && educationData.awards.length > 0 && (
              <div className="space-y-2 pt-3.5 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-600 shrink-0" />
                  <h4 className="font-display font-bold text-slate-900 text-base">
                    Academic Achievement
                  </h4>
                </div>
                <div className="pl-0 sm:pl-7 flex flex-wrap gap-2 pt-1">
                  {educationData.awards.map((award, idx) => (
                    <div 
                      key={idx} 
                      className="inline-flex items-center gap-2 px-3.5 py-2 bg-amber-50 border border-amber-100 text-amber-700 rounded-xl text-sm font-semibold shadow-2xs"
                    >
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
