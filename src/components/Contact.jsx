import React from 'react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSend = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        const mailtoLink = `mailto:contact@liquidglass.design?subject=${encodeURIComponent(subject || 'Project Inquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="relative flex w-full flex-col items-center justify-center py-20 px-4 md:px-8 bg-background-light dark:bg-background-dark">
            {/* Background Effects */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-20 z-[1] mix-blend-overlay" style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuC7AZl9N4FQSeJPKDbH6R_VgHj_FW_2uvp3e35WZesE7dUbn26jc2eUfXBZFUSEfd0r5dO53JFbxcrQgf9WqMZ7PVDMbEuO2wmfqCgb3FE82YC9U3sDDV9kln6-ybDHaS2ntdLOEDqIkStVbWELIkG6Fi0awttNNpzjM0MQ1T-_O4ckt44OhOPfH27ImgowssFpqB4Wbk7AvudqTY3YqlEA01Ormr07rLAdvLDW-5ieDrnXo2g4hqntTiEsNzCiJ96dREg125vlkg)" }}></div>
                <div className="absolute bg-primary w-[500px] h-[500px] top-[-10%] left-[-5%] rounded-full blur-[80px] opacity-20 animate-pulse"></div>
                <div className="absolute bg-[#1a4435] w-[600px] h-[600px] bottom-[-10%] right-[-10%] rounded-full blur-[80px] opacity-40"></div>
            </div>

            <div className="relative z-10 w-full max-w-[1100px] flex flex-col items-center">
                {/* Page Heading Section */}
                <div className="text-center mb-10 md:mb-16 max-w-2xl px-4">
                    <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Contact</p>
                    <h1 className="text-slate-900 dark:text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] mb-4 drop-shadow-lg">
                        Get in Touch
                    </h1>
                    <p className="text-[#9eb7a8] text-lg md:text-xl font-normal leading-relaxed">
                        Have a vision for the future? Let's build it together. Reach out for collaborations or just to say hello.
                    </p>
                </div>

                {/* Glass Card Container */}
                <div className="glass-panel w-full rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[600px] bg-[#122017]/80">
                    {/* Left Column: Contact Info & Socials */}
                    <div className="w-full md:w-5/12 bg-white/5 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
                        {/* Gradient overlay for the side panel */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0 border border-white/10">
                                        <span className="material-symbols-outlined text-xl">alternate_email</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="dark:text-white/60 text-slate-500 text-sm font-medium">Email</span>
                                        <a className="dark:text-white text-slate-800 text-base hover:text-primary transition-colors" href="mailto:contact@liquidglass.design">miauwprog@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0 border border-white/10">
                                        <span className="material-symbols-outlined text-xl">location_on</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="dark:text-white/60 text-slate-500 text-sm font-medium">Location</span>
                                        <span className="dark:text-white text-slate-800 text-base">Kuningan, West Java</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12 md:mt-0">
                            <p className="dark:text-white/40 text-slate-400 text-sm font-medium mb-4">CONNECT WITH ME</p>
                            <div className="flex gap-3">
                                {[
                                    {
                                        name: 'Instagram',
                                        icon: <path d="M16 8.037a7.965 7.965 0 0 0-3.328-1.921c-.482-.132-.977-.216-1.479-.267C10.74 5.816 10.22 5.78 12 5.78c1.78 0 2.3.036 2.807.069.495.051.99.135 1.479.267.893.242 1.638.795 2.162 1.546.524.748.814 1.652.814 2.613 0 1.776-.036 2.296-.069 2.801-.051.493-.135.986-.267 1.474a4.426 4.426 0 0 1-1.545 2.152c-.748.522-1.652.811-2.613.811-1.78 0-2.3-.036-2.807-.069-.495-.051-.99-.135-1.479-.267a4.428 4.428 0 0 1-2.162-1.546c-.524-.748-.814-1.652-.814-2.613 0-1.776.036-2.296.069-2.801.033-.505.07-.887.126-1.196.168-.946.745-1.748 1.545-2.152zm-4.025.109c-.318.847-.492 1.765-.492 2.766 0 4.191 3.407 7.599 7.608 7.599 1.002 0 1.923-.173 2.771-.49a8.035 8.035 0 0 0 1.956-4.524c.056-.583.087-1.18.087-1.792 0-3.468-.96-6.687-2.632-9.392A11.933 11.933 0 0 0 12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c.504 0 1.003-.031 1.495-.09.309-.038.614-.085.914-.143a7.996 7.996 0 0 1-2.384-3.63zM12 7.828c-2.301 0-4.172 1.866-4.172 4.172S9.699 16.172 12 16.172s4.172-1.871 4.172-4.172S14.301 7.828 12 7.828zm0 6.649c-1.365 0-2.477-1.111-2.477-2.477S10.635 9.523 12 9.523s2.477 1.111 2.477 2.477-1.111 2.477-2.477 2.477zm5.284-4.226a1.058 1.058 0 1 1 0-2.115 1.058 1.058 0 0 1 0 2.115z" />,
                                        url: 'https://instagram.com/miauwprog'
                                    },
                                    {
                                        name: 'LinkedIn',
                                        icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
                                        url: 'https://linkedin.com'
                                    },
                                    {
                                        name: 'TikTok',
                                        icon: <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />,
                                        url: 'https://tiktok.com'
                                    }
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all hover:bg-primary hover:scale-110 hover:border-primary hover:shadow-[0_0_15px_rgba(56,224,123,0.4)]"
                                    >
                                        <svg className="w-5 h-5 fill-slate-700 dark:fill-white group-hover:fill-background-dark transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            {social.icon}
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="w-full md:w-7/12 p-8 md:p-12 relative">
                        <form className="flex flex-col gap-5 h-full justify-center" onSubmit={handleSend}>
                            {/* Row 1: Name & Email */}
                            <div className="flex flex-col sm:flex-row gap-5">
                                <label className="flex flex-col flex-1 min-w-40">
                                    <p className="dark:text-white/80 text-slate-700 text-sm font-medium leading-normal pb-2 ml-2">Name</p>
                                    <div className="relative group">
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full dark:text-white text-slate-900 focus:outline-0 focus:ring-0 border border-white/10 bg-black/20 focus:border-primary/50 focus:bg-black/40 h-14 dark:placeholder:text-white/20 placeholder:text-slate-400 p-[15px] px-6 text-base font-normal leading-normal transition-all duration-300"
                                            placeholder="Your Name"
                                            required
                                        />
                                        <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/30 pointer-events-none transition-colors duration-300"></div>
                                    </div>
                                </label>
                                <label className="flex flex-col flex-1 min-w-40">
                                    <p className="dark:text-white/80 text-slate-700 text-sm font-medium leading-normal pb-2 ml-2">Email</p>
                                    <div className="relative group">
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full dark:text-white text-slate-900 focus:outline-0 focus:ring-0 border border-white/10 bg-black/20 focus:border-primary/50 focus:bg-black/40 h-14 dark:placeholder:text-white/20 placeholder:text-slate-400 p-[15px] px-6 text-base font-normal leading-normal transition-all duration-300"
                                            placeholder="Your Email Address"
                                            type="email"
                                            required
                                        />
                                        <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/30 pointer-events-none transition-colors duration-300"></div>
                                    </div>
                                </label>
                            </div>

                            {/* Row 2: Subject */}
                            <label className="flex flex-col w-full">
                                <p className="dark:text-white/80 text-slate-700 text-sm font-medium leading-normal pb-2 ml-2">Subject</p>
                                <div className="relative group">
                                    <input
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full dark:text-white text-slate-900 focus:outline-0 focus:ring-0 border border-white/10 bg-black/20 focus:border-primary/50 focus:bg-black/40 h-14 dark:placeholder:text-white/20 placeholder:text-slate-400 p-[15px] px-6 text-base font-normal leading-normal transition-all duration-300"
                                        placeholder="Project Subject"
                                        required
                                    />
                                    <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/30 pointer-events-none transition-colors duration-300"></div>
                                </div>
                            </label>

                            {/* Row 3: Message */}
                            <label className="flex flex-col w-full flex-grow">
                                <p className="dark:text-white/80 text-slate-700 text-sm font-medium leading-normal pb-2 ml-2">Message</p>
                                <div className="relative group flex-grow">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-2xl dark:text-white text-slate-900 focus:outline-0 focus:ring-0 border border-white/10 bg-black/20 focus:border-primary/50 focus:bg-black/40 min-h-[160px] dark:placeholder:text-white/20 placeholder:text-slate-400 p-[20px] text-base font-normal leading-normal transition-all duration-300"
                                        placeholder="Tell me about your idea..."
                                        required
                                    ></textarea>
                                    <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 pointer-events-none transition-colors duration-300"></div>
                                </div>
                            </label>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button type="submit" className="relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary text-[#111714] text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(56,224,123,0.4)] active:scale-[0.99] group">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Send Message
                                        <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </span>
                                    {/* Shine effect on hover */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
