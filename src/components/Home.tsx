import { FileText } from 'lucide-react';

const profileAvatar = '/2da2ff40-6da8-4bd7-aaed-1adfd85aba57.png';

interface HomeProps {
  onOpenResume: () => void;
}

export default function Home({ onOpenResume }: HomeProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-slate-50 pt-24 pb-16 overflow-hidden"
    >

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar / Profile Column (Responsive ordering: 1 on mobile, 2 on desktop) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Soft elegant shadow outline */}
              <div className="absolute -inset-2 bg-blue-100/50 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-300"></div>
              
              {/* Avatar Frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-200">
                <img
                  src={profileAvatar}
                  alt="Latefa Mohamed - Software Testing Engineer"
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Quick status badge (Simple and human, no pseudo-system-telemetry larping) */}
              <div className="absolute bottom-2 right-6 bg-white border border-slate-200 text-emerald-700 font-sans text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Available for Opportunities</span>
              </div>
            </div>
          </div>

          {/* Intro / Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-2">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
                Latefa Mohamed
              </h1>
              <div>
                <p className="font-display font-semibold text-xl sm:text-2xl text-blue-600 tracking-wide">
                  Software Testing Engineer
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 font-sans text-sm text-slate-500 mt-2">
                  <span className="font-medium text-slate-600">B.Sc. in Computer Science & AI</span>
                </div>
              </div>
            </div>

            {/* Realistic Professional Summary (Unexaggerated) */}
            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Software Testing Engineer with a Bachelor's degree in Computer Science and Artificial Intelligence, currently pursuing a Pre-Master's degree, and holding a Software Testing Diploma. I have hands-on experience through self-study projects in Manual Testing, API Testing, and Web UI Automation Testing. Passionate about software quality and user experience, I specialize in designing test cases, analyzing requirements, reporting defects, and applying effective testing practices to improve software reliability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-sans font-semibold shadow-md shadow-blue-100 hover:shadow-lg transition-all cursor-pointer group"
              >
                <FileText className="w-4 h-4" />
                <span>View CV</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
