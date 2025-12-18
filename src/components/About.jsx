import React from 'react';

const About = () => {
    return (
        <section id="about" className="relative flex items-center justify-center py-12 px-4 md:px-10 z-10 w-full">
            {/* Ambient Liquid Background for this section */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                {/* Positioned distinct from Hero to vary the look */}
                <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[80px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-[1100px] w-full flex flex-col md:flex-row gap-12 items-center">
                {/* Left Column: Visual */}
                <div className="w-full md:w-5/12 flex justify-center md:justify-end relative group">
                    {/* Abstract Glass Frame Elements */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-xl scale-110 opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 backdrop-blur-md rounded-full border border-white/10 z-20 flex items-center justify-center animate-bounce duration-[3000ms]">
                        <span className="material-symbols-outlined text-primary text-3xl">code</span>
                    </div>
                    {/* Main Image Container */}
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/5 relative">
                            <img
                                className="w-full h-full object-cover filter brightness-90 contrast-110 hover:scale-105 transition-transform duration-500"
                                alt="Professional headshot"
                                src="./images/WhatsApp Image 2025-12-17 at 13.32.07.jpeg"
                            />
                            {/* Glint effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="w-full md:w-7/12 flex flex-col gap-6">
                    {/* Glass Content Card */}
                    <div className="glass-panel p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group/card bg-white/60 dark:bg-transparent">
                        {/* Subtle Glow inside card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="h-px w-8 bg-primary"></span>
                                    <span className="text-primary font-semibold text-sm tracking-widest uppercase">Hi, i'm</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                                    Maulana Sujarwadi <br />
                                    <span className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-slate-900/10 to-slate-900/50 dark:from-white dark:to-white/50">Informatics Engineering Student</span>
                                </h1>
                            </div>

                            <div className="text-slate-600 dark:text-[#9eb7a8] text-lg leading-relaxed font-light">
                                <p className="mb-4">
                                    I'm a Creative Developer & UI/UX Designer based in <span className="text-slate-900 dark:text-white font-medium" data-location="San Francisco">Kuningan, West Java.</span> I specialist in building application and web designs.
                                </p>
                                <p>
                                    With a background in both design and engineering, I bridge the gap between aesthetics and functionality. My goal is to create a profound experience of creativity and innovation that continues to evolve.
                                </p>
                            </div>

                            {/* Skills Chips */}
                            <div className="flex flex-wrap gap-3 pt-2">
                                {[
                                    { icon: 'palette', text: 'UI Design' },
                                    { icon: 'code', text: 'JavaScript' },
                                    { icon: 'view_in_ar', text: 'Figma' },
                                    { icon: 'lightbulb', text: 'Strategy' }
                                ].map((skill) => (
                                    <div key={skill.text} className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/5 px-4 hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default">
                                        <span className="material-symbols-outlined text-primary text-[18px]">{skill.icon}</span>
                                        <p className="text-slate-700 dark:text-white text-sm font-medium">{skill.text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href="#experience" className="flex items-center justify-center rounded-full h-12 px-8 bg-primary text-background-dark text-sm font-bold hover:bg-[#2bc766] transition-all hover:scale-105 shadow-[0_0_20px_rgba(56,224,123,0.3)]">
                                    My Journey
                                </a>
                                <a href="#project" className="flex items-center justify-center rounded-full h-12 px-8 bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white text-sm font-bold transition-all duration-300 hover:bg-primary hover:text-background-dark hover:border-primary hover:shadow-[0_0_20px_rgba(56,224,123,0.3)] active:scale-95 active:bg-[#2bc766]">
                                    View My Work
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
