import { Calendar, Briefcase, CheckCircle } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      year: '2025',
      title: 'Software Testing Practice & Self-Study Projects',
      company: 'Independent Portfolio Lab',
      location: '',
      type: 'Core Training & Practice',
      description: 'Applied software testing concepts through practical exercises, including test case creation, exploratory testing, defect reporting, and understanding QA workflows.',
      highlights: [
        'Reviewed application requirements and user flows to identify testing scenarios.',
        'Performed exploratory testing to identify functional and usability issues.',
        'Created test scenarios and test cases to validate different application features.',
        'Reported and documented defects with clear steps to reproduce issues.'
      ]
    },
    {
      year: '2025',
      title: 'Banking Application Manual Testing',
      company: 'Banking Simulator Project',
      location: 'Manual Testing Project - Guru99 Banking Simulator',
      type: 'Case Study Project',
      description: 'Performed manual testing on a simulated banking application, validating key user flows such as registration, login, transactions, and account operations.',
      highlights: [
        'Tested key banking workflows including account creation, login, balance inquiry, and money transfers.',
        'Identified and documented defects using structured bug reports.',
        'Created bug reports using Excel with steps, expected results, and actual results.',
        'Performed regression testing to verify fixes and ensure functionality stability.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            QA Experience <span className="font-sans font-bold">&</span> Practical Projects
          </h2>
          <div className="mt-2 h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-3.5 font-sans text-base text-slate-500 leading-relaxed">
            Hands-on QA practice through self-study projects and practical testing scenarios, applying real-world testing methodologies and quality assurance processes.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line (desktop-only, matches sidebar on mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-blue-600 z-10 shadow-md">
                    <Briefcase className="w-4 h-4 text-blue-600" />
                  </div>

                  {/* Left Column Spacer (or Content on Desktop) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-6">
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                      
                      {/* Meta information */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-50 text-blue-600 border border-blue-100 font-mono text-xs rounded-full font-medium">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.year}</span>
                        </span>
                        <span className="font-mono text-[11px] text-slate-400 font-medium">
                          {exp.type}
                        </span>
                      </div>

                      {/* Job Title & Company */}
                      <div className="space-y-1 mb-3.5">
                        <h3 className="font-display font-semibold text-base sm:text-lg text-slate-900 leading-snug">
                          {exp.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-blue-600 font-medium">
                          {exp.company}
                        </p>
                        {exp.location && (
                          <p className="font-sans text-[11px] text-slate-400 font-medium">
                            {exp.location}
                          </p>
                        )}
                      </div>

                      {/* Main Paragraph */}
                      <p className="font-sans text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights / Responsibilities */}
                      <div className="space-y-2.5">
                        <h4 className="font-sans font-semibold text-slate-700 text-[10px] sm:text-xs uppercase tracking-wider">
                          Key Responsibilities & Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((hl, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-500">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                  {/* Right Column Spacer (desktop-only placeholder) */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
