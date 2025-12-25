import React, { useState } from 'react';
import { 
  Github, Linkedin, Mail, FileText, 
  Shield, Lock, Server, Terminal, X, Send,
  CheckCircle, Briefcase, Award, ChevronRight, Check, Download
} from 'lucide-react';

// --- CONFIGURATION ---
// IMPORTANT: Ensure "Screenshot 2025-12-01 160213.png" is inside your 'public' folder.
const LOGO_URL = "/Screenshot 2025-12-01 160213.png"; 

export default function Portfolio() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  // --- SUMMARY ---
  const summary = "Senior IT Audit & Cybersecurity Professional with 15+ years of experience leading and executing end-to-end IT and cybersecurity audits across cloud, enterprise, and regulated environments. Expert in assessing IT general controls (ITGC), application security, data protection, and change management processes in alignment with SOX, NIST, ISO 27001, and PCI-DSS frameworks.";

  // --- SKILLS ---
  const skills = [
    "Regulatory Compliance", "Legal Risk Analysis", "ISO 27001 & NIST", 
    "Cloud Security (AWS/Azure/GCP)", "Incident Response & DFIR", 
    "Endpoint Protection", "SIEM (Splunk/QRadar/Sentinel)", "DevSecOps", 
    "Encryption & MFA", "Threat Modeling", "Vulnerability Management", 
    "Disaster Recovery"
  ];

  // --- RESUME LINKS ---
  // Ensure these exact filenames exist in your 'public/resumes' folder
  const resumes = [
    { title: "IT Audit & Cybersecurity Resume", file: "/resumes/audit.docx", desc: "Focus on ITGC, SOX, and Audit Leadership" },
    { title: "InfoSec & Security Analyst Resume", file: "/resumes/infosec.docx", desc: "Focus on Threat Modeling, Incident Response & Cloud Security" },
    { title: "Governance, Risk & Compliance Resume", file: "/resumes/compliance.docx", desc: "Focus on GRC, Policy Development & Privacy" }
  ];

  const experience = [
    {
      company: "Six Flags Ent.",
      role: "Senior IT Audit & Cybersecurity Consultant",
      period: "Mar 2023 - Present",
      location: "Toronto, Canada",
      achievements: [
        "Spearheaded a team of auditors to execute the annual internal audit plan, ensuring alignment with regulatory standards.",
        "Executed SOX and ITGC audits across financial and operational systems aligned with financial industry standards.",
        "Reduced incident response time by 45% through automation of alert triage using Python scripts.",
        "Partnered with engineering to integrate SAST/DAST tools into CI/CD pipelines."
      ]
    },
    {
      company: "York University",
      role: "Information Security Specialist",
      period: "Jan 2021 - Feb 2023",
      location: "Toronto, Canada",
      achievements: [
        "Created comprehensive Incident Response Playbooks and researched evolving threats within the lab environment.",
        "Designed and deployed security controls for cloud/on-prem environments, conducting penetration tests and vulnerability scans.",
        "Managed endpoint security tools (antivirus, EDR, DLP) achieving a 30% reduction in phishing incidents.",
        "Created an automated compliance monitoring system using Python, reducing manual efforts by 50%."
      ]
    },
    {
      company: "SP Digital",
      role: "Security Risk Analyst",
      period: "Oct 2019 - Dec 2020",
      location: "Ontario, Canada",
      achievements: [
        "Led enterprise-wide risk assessments aligning with NIST CSF and ISO 27001, reducing compliance gaps by 45%.",
        "Implemented Qualys-based vulnerability scanning, remediating 53+ critical vulnerabilities.",
        "Created Power BI dashboards for real-time security metrics tracking, enhancing executive reporting efficiency by 85%.",
        "Maintained risk registers for 60+ vendors, ensuring data protection requirements were met."
      ]
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Inquiry from ${formState.name}`;
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
    window.location.href = `mailto:michealodejayi590@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSent(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
      
      {/* --- HERO SECTION --- */}
      <header className="relative pt-24 pb-16 px-6 border-b border-white/10 bg-black animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* LOGO IMAGE */}
          <div className="mx-auto mb-8 relative group">
            <div className="absolute inset-0 bg-white/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
                src={LOGO_URL} 
                alt="Micheal Odejayi" 
                className="relative w-28 h-28 rounded-3xl mx-auto object-cover shadow-2xl border border-zinc-800 group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                    e.currentTarget.style.display = 'none'; 
                    document.getElementById('logo-fallback')!.style.display = 'flex';
                }}
            />
            <div id="logo-fallback" className="hidden relative w-28 h-28 bg-zinc-900 rounded-3xl mx-auto flex items-center justify-center text-white font-bold text-3xl border border-zinc-800">
                MO
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Micheal Odejayi
          </h1>
          <h2 className="text-xl md:text-2xl text-zinc-400 font-medium mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Senior IT Security Analyst & Enterprise Architect
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {summary}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => { setIsContactOpen(true); setIsSent(false); }}
              className="px-8 py-4 bg-white text-black hover:bg-zinc-200 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2"
            >
              <Mail size={20} /> Get in Touch
            </button>
            
            <button 
                onClick={() => setIsResumeOpen(true)}
                className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl font-bold transition-all border border-zinc-800 flex items-center gap-2"
            >
              <FileText size={20} /> View Resumes
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20 space-y-24 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        
        {/* --- SKILLS GRID --- */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-white/10 rounded-lg text-white"><Terminal size={24} /></div>
            <h3 className="text-2xl font-bold">Technical Arsenal</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-zinc-900/40 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 group">
                <CheckCircle size={16} className="text-zinc-600 group-hover:text-white transition-colors shrink-0" />
                <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- EXPERIENCE TIMELINE --- */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-white/10 rounded-lg text-white"><Briefcase size={24} /></div>
            <h3 className="text-2xl font-bold">Professional Experience</h3>
          </div>
          
          <div className="space-y-12 border-l border-zinc-800 ml-3 pl-8 relative">
            {experience.map((job, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 border-2 border-black group-hover:bg-white transition-colors duration-500"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h4 className="text-xl font-bold text-white group-hover:text-zinc-300 transition-colors">{job.company}</h4>
                  <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                    {job.period}
                  </span>
                </div>
                
                <p className="text-zinc-400 font-medium mb-4 flex items-center gap-2">
                  {job.role} <span className="text-zinc-700">•</span> <span className="text-zinc-500 text-sm">{job.location}</span>
                </p>

                <ul className="space-y-3">
                  {job.achievements.map((item, i) => (
                    <li key={i} className="flex gap-3 text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                      <ChevronRight size={16} className="text-zinc-700 shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* --- CERTIFICATIONS --- */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-white/10 rounded-lg text-white"><Award size={24} /></div>
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {[
               { name: "CISSP", desc: "Certified Information Systems Security Professional" },
               { name: "CISA", desc: "Certified Information Systems Auditor" },
               { name: "CompTIA Security+", desc: "Credential ID COMP0010226303330" },
               { name: "AWS Cloud Practitioner", desc: "Amazon Web Services" }
             ].map((cert, i) => (
               <div key={i} className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/20 flex items-center gap-4 hover:bg-zinc-900 hover:border-zinc-600 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white font-bold shrink-0">
                      <Shield size={24} />
                  </div>
                  <div>
                      <h5 className="text-white font-bold">{cert.name}</h5>
                      <p className="text-sm text-zinc-500">{cert.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-zinc-900 text-center text-zinc-600 text-sm bg-black">
        <div className="flex justify-center gap-8 mb-8">
           <a href="https://www.linkedin.com/in/micheal-odejayi-78393931b/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all"><Linkedin size={24} /></a>
           <a href="#" className="hover:text-white hover:scale-110 transition-all"><Github size={24} /></a>
           <a href="mailto:michealodejayi590@gmail.com" className="hover:text-white hover:scale-110 transition-all"><Mail size={24} /></a>
        </div>
        <p>© {new Date().getFullYear()} Micheal Odejayi.</p>
      </footer>

      {/* --- CONTACT MODAL --- */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md animate-fade-in" onClick={() => setIsContactOpen(false)}></div>
            <div className="relative w-full max-w-lg bg-black border border-zinc-800 rounded-2xl p-8 shadow-2xl animate-scale-in">
                <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"><X size={24} /></button>
                {isSent ? (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-white"><Check size={32} /></div>
                        <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                        <p className="text-zinc-400 leading-relaxed">Thank you so much for reaching out, I will be in touch soon. I read all emails.</p>
                        <button onClick={() => setIsContactOpen(false)} className="mt-8 px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-sm font-medium transition-colors">Close</button>
                    </div>
                ) : (
                    <>
                        <div className="mb-6"><h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3><p className="text-zinc-400">Interested in discussing a security audit, risk assessment, or architecture review?</p></div>
                        <form className="space-y-4" onSubmit={handleContactSubmit}>
                            <div className="space-y-2"><label className="text-sm font-medium text-zinc-300">Name</label><input name="name" required type="text" value={formState.name} onChange={handleInputChange} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:ring-1 focus:ring-white outline-none transition-all" placeholder="Jane Doe" /></div>
                            <div className="space-y-2"><label className="text-sm font-medium text-zinc-300">Email</label><input name="email" required type="email" value={formState.email} onChange={handleInputChange} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:ring-1 focus:ring-white outline-none transition-all" placeholder="jane@company.com" /></div>
                            <div className="space-y-2"><label className="text-sm font-medium text-zinc-300">Message</label><textarea name="message" required value={formState.message} onChange={handleInputChange} className="w-full h-32 bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:ring-1 focus:ring-white outline-none transition-all resize-none" placeholder="How can I help you?"></textarea></div>
                            <button className="w-full py-3.5 bg-white text-black hover:bg-zinc-200 font-bold rounded-lg flex items-center justify-center gap-2 transition-colors mt-2"><Send size={18} /> Send Message</button>
                        </form>
                    </>
                )}
            </div>
        </div>
      )}

      {/* --- RESUME SELECTION MODAL --- */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md animate-fade-in" onClick={() => setIsResumeOpen(false)}></div>
            <div className="relative w-full max-w-2xl bg-black border border-zinc-800 rounded-2xl p-8 shadow-2xl animate-scale-in">
                <button onClick={() => setIsResumeOpen(false)} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"><X size={24} /></button>
                <h3 className="text-2xl font-bold text-white mb-2">Select Resume</h3>
                <p className="text-zinc-400 mb-8">Download the specific resume profile that matches your needs.</p>
                
                <div className="grid gap-4">
                    {resumes.map((resume, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-white/30 transition-all group">
                            <div className="mb-4 sm:mb-0">
                                <h4 className="text-lg font-bold text-white group-hover:text-zinc-300 transition-colors">{resume.title}</h4>
                                <p className="text-sm text-zinc-500">{resume.desc}</p>
                            </div>
                            <a href={resume.file} download className="px-4 py-2 bg-white text-black hover:bg-zinc-200 text-sm font-bold rounded-lg flex items-center gap-2 transition-all whitespace-nowrap">
                                <Download size={16} /> Download
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      )}

    </div>
  );
}