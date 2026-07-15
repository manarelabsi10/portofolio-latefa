import { useState } from 'react';
import { QAProject, TestScenario, BugReport } from '../types';
import { X, CheckCircle, AlertTriangle, Play, FileText, Bug, Award, BookOpen, Info } from 'lucide-react';

interface ProjectModalProps {
  project: QAProject;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'test-cases' | 'bug-reports' | 'lessons'>('overview');
  const [expandedTestCase, setExpandedTestCase] = useState<string | null>(null);
  const [expandedBugReport, setExpandedBugReport] = useState<string | null>(null);

  const toggleTestCase = (id: string) => {
    setExpandedTestCase(expandedTestCase === id ? null : id);
  };

  const toggleBugReport = (id: string) => {
    setExpandedBugReport(expandedBugReport === id ? null : id);
  };

  const getSeverityBadge = (sev: BugReport['severity']) => {
    switch (sev) {
      case 'Critical':
        return <span className="px-2.5 py-1 bg-red-50 text-red-700 border border-red-100 font-mono text-xs rounded-full font-bold">Critical</span>;
      case 'High':
        return <span className="px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-100 font-mono text-xs rounded-full font-bold">High</span>;
      case 'Medium':
        return <span className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-100 font-mono text-xs rounded-full font-bold">Medium</span>;
      default:
        return <span className="px-2.5 py-1 bg-slate-50 text-slate-700 border border-slate-100 font-mono text-xs rounded-full font-bold">Low</span>;
    }
  };

  const getPriorityBadge = (prio: BugReport['priority']) => {
    switch (prio) {
      case 'High':
        return <span className="px-2 py-0.5 bg-red-50 text-red-700 border border-red-100 font-mono text-[11px] rounded-sm font-semibold">P1 - High</span>;
      case 'Medium':
        return <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-100 font-mono text-[11px] rounded-sm font-semibold">P2 - Medium</span>;
      default:
        return <span className="px-2 py-0.5 bg-slate-50 text-slate-600 border border-slate-200 font-mono text-[11px] rounded-sm font-semibold">P3 - Low</span>;
    }
  };

  const getStatusBadge = (status: BugReport['status']) => {
    switch (status) {
      case 'Open':
        return <span className="px-2 py-0.5 bg-red-50 text-red-700 border border-red-100 font-mono text-[11px] rounded-sm font-bold">Open</span>;
      case 'In Progress':
        return <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-100 font-mono text-[11px] rounded-sm font-bold">In Progress</span>;
      default:
        return <span className="px-2 py-0.5 bg-green-50 text-green-700 border border-green-100 font-mono text-[11px] rounded-sm font-bold">Closed</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/40 backdrop-blur-sm overflow-y-auto">
      
      {/* Modal Container */}
      <div 
        className="relative bg-white border border-slate-200 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-start justify-between p-4 sm:p-6 border-b border-slate-200 bg-slate-50/50 rounded-t-3xl">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider">
              <span>Practice Case Study</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              {project.title}
            </h3>
            <p className="font-sans text-sm text-slate-500">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50/20 px-4 overflow-x-auto whitespace-nowrap scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 font-sans text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>Overview & Scope</span>
          </button>
          <button
            onClick={() => setActiveTab('test-cases')}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 font-sans text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'test-cases'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Sample Test Cases</span>
            <span className="ml-1 px-1.5 py-0.5 bg-slate-100 text-slate-600 font-mono text-xs rounded-full font-bold">
              {project.testScenarios.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('bug-reports')}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 font-sans text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'bug-reports'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Bug className="w-4 h-4" />
            <span>Defect Logs (Bugs)</span>
            <span className="ml-1 px-1.5 py-0.5 bg-slate-100 text-slate-600 font-mono text-xs rounded-full font-bold">
              {project.bugReports.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('lessons')}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 font-sans text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'lessons'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Lessons Learned</span>
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* Project Brief */}
              <div className="space-y-2">
                <h4 className="font-display font-semibold text-lg text-slate-900">Project Overview</h4>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  {project.projectOverview}
                </p>
              </div>

              {/* Tools Used Banner */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider font-bold">Tools Engaged:</span>
                {project.toolsUsed.map((tool, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 font-mono text-xs rounded-md font-medium">
                    {tool}
                  </span>
                ))}
              </div>

              {/* Testing Scope */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                
                {/* Modules Tested */}
                <div className="space-y-3 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h4 className="font-display font-semibold text-slate-900 text-base">Modules in Scope</h4>
                  <ul className="space-y-2">
                    {project.modulesTested.map((mod, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features Covered */}
                <div className="space-y-3 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h4 className="font-display font-semibold text-slate-900 text-base">Features Verified</h4>
                  <ul className="space-y-2">
                    {project.featuresTested.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-1.5 shrink-0"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Test Plan & Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <h4 className="font-display font-semibold text-slate-900 text-base">Testing Approach</h4>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    {project.testingApproach}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-display font-semibold text-slate-900 text-base">Test Plan Summary</h4>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    {project.testPlanSummary}
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* TEST CASES TAB */}
          {activeTab === 'test-cases' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex gap-3 shadow-xs">
                <Info className="w-5 h-5 text-blue-600 shrink-0" />
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  These are simulated representations of exact, written test procedures. Click any test scenario to expand, view structural parameters, step matrices, and expected vs actual validation outcomes.
                </p>
              </div>

              <div className="space-y-3">
                {project.testScenarios.map((scenario) => {
                  const isExpanded = expandedTestCase === scenario.id;
                  return (
                    <div 
                      key={scenario.id} 
                      className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-150 shadow-xs"
                    >
                      {/* Scenario Title Toggle */}
                      <button
                        onClick={() => toggleTestCase(scenario.id)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50/50 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-blue-600 font-bold">{scenario.id}</span>
                          <span className="font-sans font-semibold text-slate-800 text-sm sm:text-base leading-snug">{scenario.title}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-bold border ${
                            scenario.status === 'Pass' 
                              ? 'bg-green-50 text-green-700 border-green-100' 
                              : 'bg-red-50 text-red-700 border-red-100'
                          }`}>
                            {scenario.status}
                          </span>
                        </div>
                      </button>

                      {/* Expanded Section */}
                      {isExpanded && (
                        <div className="p-5 border-t border-slate-150 bg-slate-50/50 space-y-4 text-xs sm:text-sm animate-in fade-in duration-100">
                          {scenario.preCondition && (
                            <div className="space-y-1">
                              <span className="block font-mono text-[11px] text-slate-400 uppercase font-bold">Preconditions:</span>
                              <p className="font-sans text-slate-600">{scenario.preCondition}</p>
                            </div>
                          )}

                          <div className="space-y-1.5">
                            <span className="block font-mono text-[11px] text-slate-400 uppercase font-bold">Execution Steps:</span>
                            <ol className="list-decimal pl-4 space-y-1 text-slate-600">
                              {scenario.steps.map((step, idx) => (
                                <li key={idx} className="font-sans">{step}</li>
                              ))}
                            </ol>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200/50">
                            <div className="space-y-1">
                              <span className="block font-mono text-[11px] text-slate-400 uppercase font-bold">Expected Result:</span>
                              <p className="font-sans text-green-700 bg-green-50 p-2 rounded-lg border border-green-100">{scenario.expectedResult}</p>
                            </div>
                            <div className="space-y-1">
                              <span className="block font-mono text-[11px] text-slate-400 uppercase font-bold">Actual Result:</span>
                              <p className={`font-sans p-2 rounded-lg border ${
                                scenario.status === 'Pass' 
                                  ? 'text-green-700 bg-green-50 border-green-100' 
                                  : 'text-rose-700 bg-rose-50 border-rose-100'
                              }`}>{scenario.actualResult}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* BUG REPORTS TAB */}
          {activeTab === 'bug-reports' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex gap-3 shadow-xs">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  Defect documentation showing real metrics on severity, priority, and steps to reproduce. In practice, these forms feed direct to tracking systems like Atlassian Jira or TestRail.
                </p>
              </div>

              <div className="space-y-4">
                {project.bugReports.map((bug) => {
                  const isExpanded = expandedBugReport === bug.id;
                  return (
                    <div 
                      key={bug.id} 
                      className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs"
                    >
                      {/* Bug Header Toggle */}
                      <button
                        onClick={() => toggleBugReport(bug.id)}
                        className="w-full p-4 flex flex-col sm:flex-row sm:items-center justify-between text-left hover:bg-slate-50/50 gap-3 cursor-pointer"
                      >
                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono text-xs text-red-600 font-bold">{bug.id}</span>
                            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 border border-slate-200 font-mono text-[10px] rounded-md uppercase tracking-wider font-semibold">{bug.defectType}</span>
                            {getSeverityBadge(bug.severity)}
                          </div>
                          <h4 className="font-sans font-semibold text-slate-800 text-sm sm:text-base leading-snug">{bug.title}</h4>
                        </div>
                        <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                          {getPriorityBadge(bug.priority)}
                          {getStatusBadge(bug.status)}
                        </div>
                      </button>

                      {/* Expanded Section */}
                      {isExpanded && (
                        <div className="p-5 border-t border-slate-150 bg-slate-50/50 space-y-4 text-xs sm:text-sm animate-in fade-in duration-100">
                          <div className="space-y-1">
                            <span className="block font-mono text-[11px] text-slate-400 uppercase font-bold">Defect Description:</span>
                            <p className="font-sans text-slate-600 leading-relaxed">{bug.description}</p>
                          </div>

                          <div className="space-y-1.5">
                            <span className="block font-mono text-[11px] text-slate-400 uppercase font-bold">Steps to Reproduce:</span>
                            <ol className="list-decimal pl-4 space-y-1 text-slate-600">
                              {bug.stepsToReproduce.map((step, idx) => (
                                <li key={idx} className="font-sans">{step}</li>
                              ))}
                            </ol>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200/50">
                            <div className="space-y-1">
                              <span className="block font-mono text-[11px] text-slate-400 uppercase font-bold">Expected System Output:</span>
                              <p className="font-sans text-green-700 bg-green-50 p-2 rounded-lg border border-green-100 leading-normal">{bug.expectedResult}</p>
                            </div>
                            <div className="space-y-1">
                              <span className="block font-mono text-[11px] text-slate-400 uppercase font-bold">Actual System Output:</span>
                              <p className="font-sans text-rose-700 bg-rose-50 p-2 rounded-lg border border-rose-100 leading-normal">{bug.actualResult}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* LESSONS TAB */}
          {activeTab === 'lessons' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              <div className="flex justify-center p-4 bg-green-50 border border-green-100 rounded-2xl gap-3 shadow-xs">
                <Award className="w-6 h-6 text-green-600 shrink-0" />
                <div className="space-y-1">
                  <h4 className="font-sans font-semibold text-slate-900 text-sm">QA Professional Maturity</h4>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    Uncovering bugs is just one aspect of software quality. Real growth comes from reflecting on defect origins, improving test parameters, and establishing proactive testing standards.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.lessonsLearned.map((lesson, idx) => (
                  <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col gap-3 shadow-xs">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 border border-blue-100 font-mono text-xs font-bold">
                      0{idx + 1}
                    </div>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">
                      {lesson}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
