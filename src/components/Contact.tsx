import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  const contactChannels = [
    {
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      label: 'Email Address',
      value: 'latefamohamed011@gmail.com',
      href: 'mailto:latefamohamed011@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5 text-emerald-600" />,
      label: 'Phone Contact',
      value: '+20 102 363 1482',
      href: 'tel:+201023631482'
    },
    {
      icon: <Linkedin className="w-5 h-5 text-blue-600" />,
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/latefa',
      href: 'https://linkedin.com/in/latefa'
    },
    {
      icon: <Github className="w-5 h-5 text-slate-700" />,
      label: 'GitHub Repositories',
      value: 'github.com/latefamohamed-qa',
      href: 'https://github.com/latefamohamed-qa'
    },
    {
      icon: <MapPin className="w-5 h-5 text-rose-600" />,
      label: 'Location',
      value: 'Toukh, Qalyubia, Egypt',
      href: 'https://maps.google.com/?q=Toukh,Qalyubia,Egypt'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-100/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Contact Me
          </h2>
          <div className="mt-2 h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-3.5 font-sans text-base text-slate-600 leading-relaxed">
            Let's discuss how I can help streamline your Quality Assurance cycles, design thorough test scenarios, or join your front-end testing teams.
          </p>
        </div>

        {/* Centered Contact Info Block */}
        <div className="max-w-xl sm:max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-3 mb-6">
            <h3 className="font-display font-bold text-xl text-slate-900">Get in Touch</h3>
          </div>

          <div className="space-y-4 w-full">
            {contactChannels.map((channel, idx) => (
              <a
                key={idx}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-4 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xs rounded-2xl transition-all duration-200 group shadow-2xs w-full text-left"
              >
                <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-slate-200 transition-colors shrink-0">
                  {channel.icon}
                </div>
                <div className="space-y-0.5">
                  <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-wider font-bold">{channel.label}</span>
                  <span className="font-sans text-slate-700 group-hover:text-blue-600 font-medium transition-colors text-sm sm:text-base break-all">{channel.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
