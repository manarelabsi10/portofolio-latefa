import { CheckCircle2, Award, ShieldAlert, Heart } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <ShieldAlert className="w-5 h-5 text-blue-500" />,
      title: 'Attention to Detail',
      desc: 'I enjoy exploring software behavior, finding potential issues, and understanding how small details can impact user experience.'
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
      title: 'Quality Mindset',
      desc: 'I believe quality is an essential part of software development and plays a key role in creating reliable products.'
    },
    {
      icon: <Award className="w-5 h-5 text-amber-500" />,
      title: 'Continuous Learning',
      desc: 'Always improving my testing knowledge and exploring new tools, methodologies, and best practices.'
    },
    {
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      title: 'Problem Solving',
      desc: 'Using analytical thinking to understand problems, investigate issues, and find effective solutions.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="mt-2 h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-3.5 font-sans text-base text-slate-500 leading-relaxed">
            Junior QA Engineer with a Computer Science & Artificial Intelligence background, passionate about software quality and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-display font-semibold text-2xl text-slate-900">
              My Journey as a QA Engineer
            </h3>
            <p className="font-sans text-slate-600 leading-relaxed text-base">
              My journey in technology started at Benha University, where I studied Computer Science and Artificial Intelligence. Throughout my academic journey, I developed a strong interest in building reliable and user-focused software solutions.
            </p>
            <p className="font-sans text-slate-600 leading-relaxed text-base">
              During my graduation project, I worked on developing a Virtual Reality system for children with cerebral palsy. This experience helped me understand the importance of usability, accessibility, and delivering high-quality software experiences.
            </p>
            <p className="font-sans text-slate-600 leading-relaxed text-base">
              After graduation, I continued developing my skills in Software Quality Assurance by completing a Software Testing Diploma and practicing testing through self-study projects. This journey helped me build a strong foundation in analyzing software behavior, identifying issues, and understanding the role of quality assurance in creating successful products.
            </p>
            <p className="font-sans text-slate-600 leading-relaxed text-base">
              I am passionate about continuous learning and growing as a QA Engineer while contributing to teams that value quality, collaboration, and user satisfaction. I am currently pursuing a Pre-Master's degree to further strengthen my academic foundation and expand my knowledge in Computer Science and Artificial Intelligence.
            </p>
          </div>

          {/* Core Values / Highlights Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="p-4.5 bg-white border border-slate-200 rounded-2xl flex gap-4 hover:border-slate-300 hover:shadow-sm transition-all duration-200"
              >
                <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg h-fit shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-semibold text-slate-900 text-base">
                    {item.title}
                  </h4>
                  <p className="font-sans text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
