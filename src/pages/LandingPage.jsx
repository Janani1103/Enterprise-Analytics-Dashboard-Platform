import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    BarChart3,
    TrendingUp,
    Wallet,
    Activity,
    ArrowRight,
    CheckCircle2,
    Shield,
    Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0f172a] text-white selection:bg-sky-500/30">
            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
                            <BarChart3 className="text-white" size={24} />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent italic">
                            NEXUS AI
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-slate-400 font-medium">
                        <a href="#features" className="hover:text-white transition-colors">Features</a>
                        <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
                        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/login')}
                            className="text-slate-300 hover:text-white font-medium px-4 py-2 transition-colors"
                        >
                            Log In
                        </button>
                        <button
                            onClick={() => navigate('/login')}
                            className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-sky-500/20 hover:scale-105"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-sky-400 text-sm font-medium mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </span>
                        New Version 2.0 is live
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        Analytics that <br />
                        <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Drive Growth
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
                    >
                        Transform your data into actionable insights with Nexus AI.
                        The most powerful analytics platform for modern businesses.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={() => navigate('/login')}
                            className="w-full md:w-auto bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-sky-500/20 hover:scale-105 flex items-center justify-center gap-2"
                        >
                            Start Free Trial
                            <ArrowRight size={20} />
                        </button>
                        <button className="w-full md:w-auto bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all border border-slate-700 flex items-center justify-center gap-2">
                            <Zap size={20} className="text-yellow-400" />
                            View Demo
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-6 bg-slate-900/50" id="features">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Unified Intelligence</h2>
                        <p className="text-slate-400 text-lg">One platform to rule them all. Connect every aspect of your business.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <TrendingUp size={32} />,
                                title: 'Sales Analytics',
                                desc: 'Track revenue, orders, and customer growth in real-time.',
                                color: 'text-sky-400',
                                bg: 'bg-sky-500/10'
                            },
                            {
                                icon: <BarChart3 size={32} />,
                                title: 'Marketing',
                                desc: 'Monitor campaigns, traffic sources, and conversion rates.',
                                color: 'text-indigo-400',
                                bg: 'bg-indigo-500/10'
                            },
                            {
                                icon: <Wallet size={32} />,
                                title: 'Finance',
                                desc: 'Manage budgets, expenses, and P&L statements effortlessly.',
                                color: 'text-emerald-400',
                                bg: 'bg-emerald-500/10'
                            },
                            {
                                icon: <Activity size={32} />,
                                title: 'Operations',
                                desc: 'Optimize inventory, logistics, and supply chain efficiency.',
                                color: 'text-rose-400',
                                bg: 'bg-rose-500/10'
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#1e293b]/50 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl hover:border-slate-600 transition-all group"
                            >
                                <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <div className={feature.color}>{feature.icon}</div>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust/Social Proof */}
            <section className="py-20 px-6 border-t border-slate-800">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <p className="text-slate-500 font-semibold uppercase tracking-widest mb-10">Trusted by industry leaders</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Mock Logos */}
                        {['Acme Corp', 'GlobalTech', 'Nebula Inc', 'FutureSystems'].map((brand, i) => (
                            <span key={i} className="text-2xl font-bold text-slate-300">{brand}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0f172a] border-t border-slate-800 pt-16 pb-8 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                                <BarChart3 className="text-white" size={18} />
                            </div>
                            <span className="text-lg font-bold text-white italic">NEXUS AI</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empowering businesses with intelligent analytics and real-time data visualization since 2024.
                        </p>
                    </div>

                    {[
                        { header: 'Product', links: ['Features', 'Integrations', 'Pricing', 'Changelog'] },
                        { header: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
                        { header: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
                    ].map((col, idx) => (
                        <div key={idx}>
                            <h4 className="text-white font-semibold mb-4">{col.header}</h4>
                            <ul className="space-y-3">
                                {col.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <a href="#" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="max-w-7xl mx-auto bg-slate-800/50 h-[1px] mb-8"></div>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2024 Nexus AI Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
