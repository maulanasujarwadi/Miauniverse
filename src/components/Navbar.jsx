import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Force dark mode on component mount
    useEffect(() => {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }, []);

    const navLinks = ['Home', 'About', 'Skill', 'Experience', 'Project', 'Contact'];

    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-glass-border bg-[#122017]/80 backdrop-blur-md">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Area */}
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 transition-colors group-hover:bg-primary/20">
                            <span className="material-symbols-outlined text-2xl">pets</span>
                        </div>
                        <h2 className="text-white text-lg font-bold tracking-tight group-hover:text-primary transition-colors">Miauwzzz</h2>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex flex-1 justify-center gap-8">
                        {navLinks.map((item) => (
                            <a
                                key={item}
                                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors py-2 group/link"
                                href={`#${item.toLowerCase()}`}
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Right Side: Resume & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <button className="hidden md:flex items-center justify-center h-10 px-6 bg-primary hover:bg-primary/90 text-[#111714] text-sm font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,224,123,0.4)] hover:scale-105">
                            Resume
                        </button>

                        {/* Mobile Menu Icon */}
                        <button
                            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-[#122017] border-b border-glass-border p-6 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            className="text-white hover:text-primary font-medium py-2"
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="w-full h-10 bg-primary text-[#111714] font-bold rounded-lg mt-2">
                        Resume
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
