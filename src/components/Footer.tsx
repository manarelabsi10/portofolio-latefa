import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Brand Name */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display font-bold text-lg text-slate-900">Latefa Mohamed</span>
            <span className="font-mono text-[10px] text-slate-500 tracking-wider uppercase font-semibold">
              Junior Software Testing Engineer
            </span>
          </div>

          {/* Core copyright */}
          <div className="text-center md:text-right font-sans text-xs text-slate-600 font-medium">
            <p>&copy; {currentYear} Latefa Mohamed. All Rights Reserved.</p>
          </div>

          {/* Social connections */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:latefamohamed011@gmail.com"
              className="p-2.5 bg-slate-50 hover:bg-blue-600 border border-slate-200 hover:border-blue-500 text-slate-600 hover:text-white rounded-xl transition-all cursor-pointer"
              title="Mail to Latefa"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/latefa"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-slate-50 hover:bg-blue-600 border border-slate-200 hover:border-blue-500 text-slate-600 hover:text-white rounded-xl transition-all cursor-pointer"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/latefamohamed-qa"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-slate-50 hover:bg-blue-600 border border-slate-200 hover:border-blue-500 text-slate-600 hover:text-white rounded-xl transition-all cursor-pointer"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
