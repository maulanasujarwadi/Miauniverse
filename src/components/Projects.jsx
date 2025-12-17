import React, { useState } from 'react';

const projectsData = [
    {
        id: 1,
        title: "Redesign Coffe Shop",
        category: "UI/UX",
        description: "Redesign a coffee shop app using Figma",
        image: "/images/project/coffe.png",
        tag: "UI/UX"
    },
    {
        id: 2,
        title: "PDD Sanjai",
        category: "Art",
        description: "Editor for Sanjai Team, during the student exchange program.",
        image: "/images/project/IMG_3167.JPG",
        tag: "Art"
    },
    {
        id: 3,
        title: "Web Application Travel Book",
        category: "Development",
        description: " I was completed a web-based application project. The application is equipped with a user authentication feature, in the application there are several pages consisting of SignIn / SignUp, Home, Category, Details, Booking Details, Checkout, Payment, Schedule, and Trip Details pages.",
        image: "/images/project/Web Application Travel Book.png",
        tag: "App"
    },
    {
        id: 4,
        title: "Practice Web Portfolio Using Wordpess",
        category: "UI/UX",
        description: "I have created a portfolio web page design to fill a seminar event on campus. The application I use to build a web consists of Figma, Wordpress and a site to host the web page.",
        image: "/images/project/Practice Web Portfolio Using Wordpess.png",
        tag: "UI/UX",
        colSpan: true
    },
    {
        id: 5,
        title: "GoNA",
        category: "UI/UX",
        description: "Created a prototype of a travel application for a business competition held by LPDP RI with the concept of technology.",
        image: "/images/project/gona.png",
        tag: "App"
    },
    {
        id: 6,
        title: "Poster",
        category: "Art",
        description: "poster design in a competition held by UINSSC",
        image: "/images/project/IMG_3165.JPG",
        tag: "Art"
    },
    {
        id: 7,
        title: "Zalfana Store",
        category: "Development",
        description: "Creating a web page for an online store using Wordpress and designed using Figma.",
        image: "/images/project/zalfana.png",
        tag: "Web"
    },
    {
        id: 8,
        title: "VR Concept",
        category: "UI/UX",
        description: "Has created vr concept and animation effects in Figma.",
        image: "/images/project/vr.png",
        tag: "Virtual Reality"
    },
    {
        id: 9,
        title: "Web Plants UI",
        category: "UI/UX",
        description: "Simple display of a houseplant web store.",
        image: "/images/project/IMG_3166.JPG",
        tag: "UI/UX"
    },
    {
        id: 10,
        title: "Art in the Lens",
        category: "Art",
        description: "Capturing every activity through a lens.",
        image: "/images/project/IMG_3169.JPG",
        tag: "Art"
    }
];

const Projects = () => {
    const [filter, setFilter] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = ["All", "UI/UX", "Development", "Art"];

    const filteredProjects = filter === "All"
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    const visibleProjects = filteredProjects.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6); // Load more projects
    };

    // Reset visible count when filter changes
    React.useEffect(() => {
        setVisibleCount(6);
    }, [filter]);

    return (
        <section id="project" className="relative flex-grow flex flex-col items-center pt-24 pb-12 px-4 md:px-8 w-full">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute bg-primary/20 w-[600px] h-[600px] top-[-10%] left-[-10%] rounded-full blur-[80px] animate-pulse"></div>
                <div className="absolute bg-blue-500/10 w-[500px] h-[500px] bottom-[-10%] right-[-5%] rounded-full blur-[80px]"></div>
            </div>

            <div className="w-full max-w-[1280px] flex flex-col gap-10">
                {/* Page Heading & Filters */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="flex flex-col gap-2 max-w-2xl">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                            Selected Works
                        </h1>
                        <p className="text-[#9eb7a8] text-lg md:text-xl font-light leading-relaxed max-w-lg">
                            Exploring the intersection of fluid design, technology, and immersive experiences.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="glass-panel p-1.5 rounded-full flex gap-1 overflow-x-auto max-w-full no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`flex h-10 shrink-0 items-center justify-center px-6 rounded-full transition-all duration-300 ${filter === cat
                                    ? 'bg-primary text-background-dark shadow-[0_0_15px_rgba(56,224,123,0.4)]'
                                    : 'hover:bg-white/10 text-white/70 hover:text-white'
                                    }`}
                            >
                                <span className={`text-sm ${filter === cat ? 'font-bold' : 'font-medium'}`}>{cat}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {visibleProjects.map((project) => (
                        <article
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className={`group relative flex flex-col h-full rounded-2xl overflow-hidden glass-panel glass-card-hover transition-all duration-500 ease-out cursor-pointer ${project.colSpan ? 'md:col-span-2' : ''}`}
                        >
                            <div className={`relative w-full ${project.colSpan ? 'aspect-[2/1]' : 'aspect-[4/3]'} overflow-hidden`}>
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url("${project.image}")` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-80"></div>
                                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                    <span className="text-xs font-medium text-primary">{project.tag}</span>
                                </div>
                            </div>

                            <div className="flex flex-col grow p-6 gap-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                    <span className="material-symbols-outlined text-white/30 group-hover:text-primary group-hover:rotate-45 transition-all duration-300">arrow_outward</span>
                                </div>
                                <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Load More Action */}
                {visibleCount < filteredProjects.length && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={handleLoadMore}
                            className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full glass-panel hover:bg-white/5 transition-all duration-300 bg-white/50 dark:bg-transparent"
                        >
                            <span className="text-sm font-bold tracking-wide text-slate-900 dark:text-white group-hover:text-primary transition-colors">Load More Projects</span>
                            <span className="material-symbols-outlined text-sm text-slate-900 dark:text-white group-hover:translate-y-1 transition-transform">expand_more</span>
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        </button>
                    </div>
                )}
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
                        onClick={() => setSelectedProject(null)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#122017] border border-white/10 rounded-3xl shadow-2xl animate-scaleIn no-scrollbar">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-white/10 text-white transition-colors border border-white/5"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>

                        <div className="flex flex-col md:flex-row">
                            {/* Image Section */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px] relative">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#122017] via-transparent to-transparent md:bg-gradient-to-r"></div>
                            </div>

                            {/* Details Section */}
                            <div className="w-full md:w-1/2 p-8 flex flex-col gap-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                                            {selectedProject.tag}
                                        </span>
                                        <span className="text-white/40 text-sm font-medium uppercase tracking-wider">
                                            {selectedProject.category}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-white/90">About Project</h3>
                                    <p className="text-white/60 leading-relaxed text-base">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-6 flex gap-4">
                                    <button className="flex-1 py-3 rounded-full bg-primary hover:bg-[#2bc766] text-[#122017] font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(56,224,123,0.2)]">
                                        View Live Demo
                                    </button>
                                    <button className="flex-1 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm transition-all hover:scale-105 active:scale-95">
                                        Source Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
