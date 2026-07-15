import { useState } from 'react';
import { projectsData } from '../data';
import { QAProject } from '../types';
import ProjectModal from './ProjectModal';
import { Bug, FileText, CheckCircle2, ArrowUpRight, ShieldAlert } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<QAProject | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'guru99-banking':
        return <ShieldAlert className="w-6 h-6 text-blue-500" />;
      case 'saucedemo-testing':
        return <CheckCircle2 className="w-6 h-6 text-emerald-500" />;
      default:
        return <Bug className="w-6 h-6 text-rose-500" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-widest">
            Hands-on Portfolios
          </span>
          <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            QA Practice Projects
          </h2>
          <div className="mt-2 h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 font-sans text-base text-slate-500">
            A selection of extensive testing audits executed on real and mock staging environments. These demonstrate my mastery of test case formulation, verification execution, and accurate defect logging.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon & Title Row */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 group-hover:border-slate-300 transition-colors">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="text-slate-400 group-hover:text-blue-600 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>

                {/* Typography Block */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-blue-600 font-semibold">
                    {project.subtitle}
                  </p>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed">
                    {project.briefDescription}
                  </p>
                </div>
              </div>

              {/* Badges and Callouts */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.toolsUsed.slice(0, 3).map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-500 font-mono text-[10px] rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.toolsUsed.length > 3 && (
                    <span className="px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-400 font-mono text-[10px] rounded-md">
                      +{project.toolsUsed.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-500 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200/50">
                  <span className="flex items-center gap-1.5 text-slate-600 font-semibold">
                    <FileText className="w-3.5 h-3.5 text-blue-500" />
                    <span>{project.testScenarios.length} Scenarios</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-600 font-semibold">
                    <Bug className="w-3.5 h-3.5 text-red-500" />
                    <span>{project.bugReports.length} Bugs</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal display portal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
