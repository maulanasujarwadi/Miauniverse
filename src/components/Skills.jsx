import React, { useState } from 'react';

const skillsData = [
    {
        name: 'React',
        category: 'Frontend',
        icon: 'code_blocks',
        description: 'Component architecture & hooks',
        mastery: '50%',
        color: 'primary'
    },
    {
        name: 'JavaScript',
        category: 'Frontend',
        icon: 'integration_instructions',
        description: 'Type-safe development',
        mastery: '50%',
        color: 'primary'
    },
    {
        name: 'Tailwind CSS',
        category: 'Frontend',
        icon: 'style',
        description: 'Rapid UI development',
        mastery: '45%',
        color: 'primary'
    },
    {
        name: 'Figma',
        category: 'Design',
        icon: 'design_services',
        description: 'Prototyping & Design Systems',
        mastery: '90%',
        color: 'indigo-400'
    },
    {
        name: 'Node.js',
        category: 'Backend',
        icon: 'deployed_code',
        description: 'Scalable server-side apps',
        mastery: '60%',
        color: 'orange-400'
    },
    {
        name: 'Python',
        category: 'Backend',
        icon: 'terminal',
        description: 'Data processing & Scripting',
        mastery: '75%',
        color: 'orange-400'
    },
    {
        name: 'Whimsical',
        category: 'Design',
        icon: 'animation',
        description: 'Framer Motion & GSAP',
        mastery: '90%',
        color: 'indigo-400'
    },
    {
        name: 'SQL',
        category: 'Backend',
        icon: 'database',
        description: 'PostgreSQL & Architecture',
        mastery: '45%',
        color: 'orange-400'
    },
    {
        name: 'Git',
        category: 'Tools',
        icon: 'account_tree',
        description: 'Version Control & CI/CD',
        mastery: '50%',
        color: 'teal-400'
    }
];

const Skills = () => {
    const [filter, setFilter] = useState('All Skills');

    const categories = ['All Skills', 'Frontend', 'UI/UX Design', 'Backend', 'Tools'];

    // Map UI/UX Design to Design for data filtering
    const getCategoryKey = (cat) => cat === 'UI/UX Design' ? 'Design' : cat;

    // Helper for category styles
    const getCategoryStyles = (category) => {
        switch (category) {
            case 'Frontend':
                return 'text-teal-400 border-primary/20 bg-primary/5';
            case 'Backend':
                return 'text-orange-400 border-orange-400/20 bg-orange-400/5';
            case 'Design':
                return 'text-indigo-400 border-indigo-400/20 bg-indigo-400/5';
            case 'Tools':
                return 'text-primary border-primary/20 bg-primary/5';
            default:
                return 'text-slate-500 dark:text-white/70 border-black/5 dark:border-white/10 bg-slate-100 dark:bg-white/5';
        }
    };

    const filteredSkills = filter === 'All Skills'
        ? skillsData
        : skillsData.filter(skill => skill.category === getCategoryKey(filter));

    return (
        <section id="skill" className="relative flex flex-col items-center justify-center py-20 px-6 md:px-20 lg:px-40 z-10 w-full overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '-5s' }}></div>
                <div className="absolute -bottom-[20%] left-[20%] w-[700px] h-[700px] bg-primary/5 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '-10s' }}></div>
            </div>

            <div className="mx-auto flex max-w-[1200px] flex-col gap-10 w-full z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 backdrop-blur-sm">
                        <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#38e07b]"></span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Expertise</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white drop-shadow-lg">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Proficiency</span>
                    </h1>
                    <p className="max-w-2xl text-lg text-slate-600 dark:text-white/60 font-body leading-relaxed">
                        Some of the tools and technologies I leverage to build immersive, high-performance digital experiences.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 ${filter === cat
                                ? 'bg-primary text-background-dark shadow-neon scale-105'
                                : 'border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 text-slate-700 dark:text-white backdrop-blur-sm hover:bg-white/20 dark:hover:bg-white/10 hover:border-primary/50 dark:hover:border-white/20 hover:text-primary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {filteredSkills.map((skill) => (
                        <div key={skill.name} className="group glass-card relative flex flex-col gap-5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-neon-hover bg-white/40 dark:bg-glass-surface">
                            <div className="flex items-start justify-between">
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/80 dark:from-white/10 to-transparent text-primary ring-1 ring-black/5 dark:ring-white/10 group-hover:text-white group-hover:bg-primary transition-colors`}>
                                    <span className="material-symbols-outlined text-[28px]">{skill.icon}</span>
                                </div>
                                <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${getCategoryStyles(skill.category)}`}>
                                    {skill.category}
                                </span>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1 group-hover:text-primary transition-colors">{skill.name}</h3>
                                <p className="text-sm text-slate-600 dark:text-white/50">{skill.description}</p>
                            </div>

                            <div className="mt-auto flex flex-col gap-2">
                                <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-white/80">
                                    <span>Mastery</span>
                                    <span>{skill.mastery}</span>
                                </div>
                                <div className="h-2 w-full overflow-hidden rounded-full bg-black/40">
                                    <div
                                        className="h-full rounded-full bg-primary shadow-[0_0_10px_#38e07b] transition-all duration-1000 group-hover:w-full"
                                        style={{ width: skill.mastery }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
