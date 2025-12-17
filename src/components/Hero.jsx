import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative flex-1 flex flex-col justify-center items-center pt-20 w-full overflow-hidden min-h-screen">
            {/* Ambient Liquid Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                {/* Primary Green Blob */}
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/20 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-blob"></div>
                {/* Secondary Indigo Blob */}
                <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-indigo-900/40 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-blob animation-delay-2000"></div>
                {/* Tertiary Teal Blob */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-emerald-900/20 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-4000"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-[1280px] px-4 md:px-12 py-12 flex flex-col items-center">
                {/* Glass Card Container */}
                <div className="w-full max-w-5xl relative group animate-[fadeIn_1s_ease-out]">
                    {/* Outer Glow */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 via-blue-500/30 to-purple-600/30 rounded-[42px] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-500"></div>

                    {/* The Glass Surface */}
                    <div className="relative bg-white/70 dark:bg-glass-surface backdrop-blur-2xl border border-white/20 dark:border-glass-border rounded-[40px] p-8 md:p-20 text-center shadow-2xl overflow-hidden">
                        {/* Noise Texture Overlay */}
                        <div
                            className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none mix-blend-overlay"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeuYJgKpccRYklC5y17qy5iFbTmijbnv3IG7t9PShkXBZVrGVvlENtERXIKi3DFwoNjyWr4Hv-7PJlYdafOYixIuEuar45CSIpERLbA3Po_6S47KlIwXI7mw2JXmkHEETa5UApIbro7NEl3cmsNp9l9TuEC1Wly-4ZuZ9VoAK31YudMypotgy0dibvq9euzP4BjC-p8d2JOiYzmbHCKryiCKfnGIKIE4lpNnEVuYn8ElYT7RUnxcGUBxJck0MxY2HqDk02VcySeg')" }}
                        ></div>

                        {/* Lighting Reflection Effect (Top) */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

                        {/* Inner Content */}
                        <div className="relative z-20 flex flex-col items-center gap-8 md:gap-10">
                            {/* Status Pill */}
                            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md shadow-lg shadow-primary/5">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                </span>
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">welcome to my work</span>
                            </div>

                            {/* Main Typography */}
                            <div className="space-y-6 flex flex-col items-center">
                                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.03em] leading-[0.9] text-slate-900 dark:text-white drop-shadow-sm">
                                    Miauniverse
                                </h1>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-500 dark:via-emerald-200 to-primary bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                                    UI/UX Designer and Developer
                                </h2>
                            </div>

                            {/* Tagline */}
                            <p className="max-w-2xl text-base md:text-lg text-slate-600 dark:text-gray-300 leading-relaxed font-normal">
                                Let's talk about <span className="text-slate-900 dark:text-white font-medium">Design</span>. Specialist in building application and web designs. Making them more attractive, futuristic, and functional that feel alive.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-5 pt-6 w-full justify-center">
                                <a href="#project" className="group relative w-full sm:w-auto min-w-[180px] h-14 rounded-full bg-primary overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(56,224,123,0.3)]">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                                    <div className="relative flex items-center justify-center gap-2 text-[#111714] font-bold text-base px-8 h-full">
                                        <span>Explore Portfolio</span>
                                        <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">arrow_outward</span>
                                    </div>
                                </a>
                                <a href="#contact" className="group w-full sm:w-auto min-w-[180px] h-14 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold text-base transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 hover:border-black/20 dark:hover:border-white/30">
                                    <span>Contact Me</span>
                                    <span className="material-symbols-outlined text-[20px] group-hover:animate-pulse">mail</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating 3D Elements */}
                {/* Left Element */}
                <div className="absolute -left-8 lg:left-0 top-1/4 animate-float hidden lg:flex items-center justify-center size-24 rounded-3xl bg-glass-surface backdrop-blur-xl border border-glass-border shadow-2xl rotate-[-12deg]">
                    <span className="material-symbols-outlined text-[48px] text-primary/80">code_blocks</span>
                </div>
                {/* Right Element */}
                <div className="absolute -right-8 lg:right-0 bottom-1/4 animate-float hidden lg:flex items-center justify-center size-20 rounded-[2rem] bg-glass-surface backdrop-blur-xl border border-glass-border shadow-2xl rotate-[12deg] animation-delay-2000">
                    <span className="material-symbols-outlined text-[40px] text-blue-400/80">data_object</span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Scroll Down</span>
                <div className="flex flex-col -space-y-2">
                    <span className="material-symbols-outlined animate-bounce">keyboard_arrow_down</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
