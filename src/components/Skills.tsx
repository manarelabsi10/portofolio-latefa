import { skillsCategories } from '../data';
import { ClipboardList, Terminal, Database, Settings, Check } from 'lucide-react';

export default function Skills() {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Manual Testing Core':
        return <ClipboardList className="w-5 h-5 text-blue-500" />;
      case 'Automation & API':
        return <Terminal className="w-5 h-5 text-emerald-500" />;
      case 'Databases & Languages':
        return <Database className="w-5 h-5 text-amber-500" />;
      default:
        return <Settings className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Technical Skills
          </h2>
          <div className="mt-2 h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-3.5 font-sans text-base text-slate-500 leading-relaxed">
            A practical skill set covering manual testing, test case design, API testing, database basics, and automation testing fundamentals.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">
                  {getIcon(category.title)}
                </div>
                <h3 className="font-display font-semibold text-lg sm:text-xl text-slate-900">
                  {category.title.includes('&') ? (
                    <>
                      {category.title.split('&')[0]}
                      <span className="font-sans font-semibold">&</span>
                      {category.title.split('&')[1]}
                    </>
                  ) : (
                    category.title
                  )}
                </h3>
              </div>

              {/* Skills Tags Grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/20 text-slate-700 rounded-xl text-sm font-medium transition-all duration-150 group"
                  >
                    <Check className="w-3.5 h-3.5 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Philosophy callout */}
        <div className="mt-10 p-5 bg-white border border-slate-200 rounded-2xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-5 shadow-sm">
          <div className="p-3 bg-blue-50 rounded-full text-blue-600 hidden sm:block shrink-0 border border-blue-100">
            <ClipboardList className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-sans font-semibold text-slate-900">
              QA Testing Approach
            </h4>
            <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
              I follow structured testing practices based on SDLC and STLC principles, including requirement analysis, test case creation, defect reporting, and continuous improvement.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
