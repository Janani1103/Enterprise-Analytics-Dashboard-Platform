import React from 'react';
import { Search, Bell, User, Calendar } from 'lucide-react';

const Topbar = () => {
    return (
        <div className="h-20 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 px-8 flex items-center justify-between">
            <div className="flex items-center gap-4 bg-slate-800/40 border border-slate-700/50 px-4 py-2 rounded-2xl w-96 group focus-within:border-sky-500/50 transition-all">
                <Search size={18} className="text-slate-500 group-focus-within:text-sky-400" />
                <input
                    type="text"
                    placeholder="Search analytics, reports..."
                    className="bg-transparent border-none outline-none text-sm text-slate-200 placeholder:text-slate-500 w-full"
                />
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-slate-400 bg-slate-800/40 px-3 py-1.5 rounded-xl border border-slate-700/50">
                    <Calendar size={16} />
                    <span className="text-xs font-medium">Feb 05, 2026</span>
                </div>

                <button className="relative p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#0f172a]"></span>
                </button>

                <div className="flex items-center gap-3 pl-6 border-l border-slate-800">
                    <div className="text-right">
                        <p className="text-sm font-semibold text-slate-200 leading-none">Janani Nethma</p>
                        <p className="text-xs text-slate-500 mt-1">Administrator</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[2px]">
                        <div className="w-full h-full rounded-lg bg-slate-900 flex items-center justify-center overflow-hidden">
                            <User className="text-sky-400" size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
