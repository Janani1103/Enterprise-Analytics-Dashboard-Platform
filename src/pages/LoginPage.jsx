import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart3, Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';

const LoginPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigate('/dashboard');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative z-10"
            >
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-sky-500/20">
                        <BarChart3 className="text-white" size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                    <p className="text-slate-400">Sign in to access your analytics dashboard</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-sky-400 transition-colors" size={20} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                                placeholder="name@company.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center ml-1">
                            <label className="text-sm font-medium text-slate-300">Password</label>
                            <a href="#" className="text-xs text-sky-400 hover:text-sky-300 transition-colors">Forgot password?</a>
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-3.5 text-slate-500 group-focus-within:text-sky-400 transition-colors" size={20} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-sky-500/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                Sign In
                                <ArrowRight size={20} />
                            </>
                        )}
                    </button>
                </form>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-700/50"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-[#0f172a] px-2 text-slate-500">Or continue with</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 py-2.5 rounded-xl border border-slate-700 transition-all">
                        <Github size={18} />
                        GitHub
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 py-2.5 rounded-xl border border-slate-700 transition-all">
                        <Chrome size={18} />
                        Google
                    </button>
                </div>

                <p className="text-center text-slate-400 text-sm mt-8">
                    Don't have an account?
                    <button onClick={() => navigate('/signup')} className="text-sky-400 font-semibold hover:text-sky-300 ml-1 transition-colors">
                        Sign up
                    </button>
                </p>
            </motion.div>
        </div>
    );
};

export default LoginPage;
