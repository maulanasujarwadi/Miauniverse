import React from 'react';

const experiences = [
    {
        id: 1,
        period: "Dec 2025 - Present",
        company: "DAC",
        role: "Operator Line Assembly",
        description: "Internship at DAC Cirebon, working as a line assembly operator in charge of Cortana, opening BitLocker, Windows activation, and laptop assembly.",
        tags: ["Windows", "Cortana", "BitLocker", "Assembling", "Activation"],
        icon: "design_services"
    },
    {
        id: 2,
        period: "Jun 2025 - Present",
        company: "STMIK IKMI",
        role: "Face Recognition Research",
        description: "Becoming an assistant in CNN-based facial recognition research. Creating facial recognition models using Python and the Computer Vision library.",
        tags: ["Python", "Computer Vision", "CNN", "Google Colab", "Jupyter Notebook"],
        icon: "design_services"
    },
    {
        id: 3,
        period: "Dec 2024 - Jan 2025",
        company: "Build With Angga",
        role: "UI/UX Developer and Learning Laravel 11",
        description: "Learning design fundamentals, creating applications based on case studies. Creating structured applications, from frontend to backend, using Figma and Laravel 11.",
        tags: ["Figma", "Laravel 11", "Whimsical"],
        icon: "code"
    },
    {
        id: 4,
        period: "Feb 2024 - Jun 2024",
        company: "Kampus Merdeka",
        role: "Student Exchange",
        description: "Student exchange at Universitas Negeri Padang. Participated in the design and documentation publication section. Deepened knowledge in the field of design.",
        tags: ["Photoshop", "CorelDRAW", "Canva"],
        icon: "brush"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="relative flex flex-col items-center justify-start py-20 px-4 md:px-8 w-full overflow-hidden min-h-screen">
            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="blob bg-primary rounded-full w-[500px] h-[500px] top-[-100px] left-[-100px] mix-blend-screen opacity-10"></div>
                <div className="blob bg-blue-500 rounded-full w-[400px] h-[400px] bottom-[10%] right-[-100px] mix-blend-screen opacity-10 animation-delay-2000"></div>
            </div>

            <div className="w-full max-w-4xl flex flex-col gap-12 z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center gap-2 mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold dark:text-white text-slate-900 tracking-tight drop-shadow-sm">
                        My Journey
                    </h1>
                    <div className="h-1 w-20 bg-primary rounded-full shadow-[0_0_10px_rgba(56,224,123,0.5)]"></div>
                    <p className="dark:text-white/60 text-slate-600 mt-4 max-w-lg text-lg">
                        Navigating through pixels and code. My recent activities can be seen below.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative pl-4 sm:pl-0">
                    {/* Central Line */}
                    <div className="absolute left-8 sm:left-1/2 top-4 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/30 to-transparent -translate-x-1/2 sm:translate-x-0"></div>

                    <div className="flex flex-col gap-12 sm:gap-16">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className={`group relative flex flex-col sm:grid sm:grid-cols-2 gap-8 items-center`}>

                                {/* Timeline logic: Even items left, Odd items right (or vice-versa depending on desired start) 
                                    Let's match the provided HTML: 
                                    Item 1: Left empty, Right Card
                                    Item 2: Left Card, Right Date
                                    Item 3: Left empty, Right Card
                                */}

                                {/* Left Content */}
                                <div className={`w-full ${index % 2 === 0 ? 'hidden sm:block text-right pr-12 order-1' : 'pl-16 sm:pl-0 sm:pr-12 order-3 sm:order-1'}`}>
                                    {index % 2 === 0 ? (
                                        <>
                                            <span className="text-primary font-bold text-xl block mb-1">{exp.period}</span>
                                            <span className="dark:text-white/50 text-slate-500 text-base font-medium">{exp.company}</span>
                                        </>
                                    ) : (
                                        <div className="glass-panel glass-card-hover rounded-2xl p-6 sm:p-8 transition-all duration-300 bg-[#122017]/50">
                                            <div className="sm:hidden mb-4">
                                                <span className="text-primary font-bold text-sm block">{exp.period}</span>
                                                <span className="dark:text-white/50 text-slate-500 text-sm font-medium">{exp.company}</span>
                                            </div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                    <span className="material-symbols-outlined">{exp.icon}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold dark:text-white text-slate-900">{exp.role}</h3>
                                            </div>
                                            <p className="dark:text-white/80 text-slate-600 text-base leading-relaxed mb-6">
                                                {exp.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary tracking-wide">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 order-2">
                                    <div className="w-4 h-4 rounded-full bg-background-dark border-2 border-primary shadow-[0_0_10px_rgba(56,224,123,0.8)] group-hover:scale-150 transition-transform duration-300"></div>
                                </div>

                                {/* Right Content */}
                                <div className={`w-full ${index % 2 === 0 ? 'pl-16 sm:pl-12 order-3' : 'hidden sm:block pl-12 order-3 text-left'}`}>
                                    {index % 2 !== 0 ? (
                                        <>
                                            <span className="text-primary font-bold text-xl block mb-1">{exp.period}</span>
                                            <span className="dark:text-white/50 text-slate-500 text-base font-medium">{exp.company}</span>
                                        </>
                                    ) : (
                                        <div className="glass-panel glass-card-hover rounded-2xl p-6 sm:p-8 transition-all duration-300 bg-[#122017]/50">
                                            <div className="sm:hidden mb-4">
                                                <span className="text-primary font-bold text-sm block">{exp.period}</span>
                                                <span className="dark:text-white/50 text-slate-500 text-sm font-medium">{exp.company}</span>
                                            </div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                    <span className="material-symbols-outlined">{exp.icon}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold dark:text-white text-slate-900">{exp.role}</h3>
                                            </div>
                                            <p className="dark:text-white/80 text-slate-600 text-base leading-relaxed mb-6">
                                                {exp.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary tracking-wide">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Gradient Fade on Line */}
                    <div className="absolute left-8 sm:left-1/2 bottom-0 w-0.5 h-20 bg-gradient-to-t from-background-dark to-transparent -translate-x-1/2 sm:translate-x-0"></div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
