import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ title, value, trend, trendValue, icon, color }) => {
    const isPositive = trend === 'up';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl card-hover"
        >
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${color} bg-opacity-10`}>
                    {React.cloneElement(icon, { className: `text-${color.split('-')[1]}-400` })}
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    {trendValue}
                </div>
            </div>

            <div>
                <p className="text-slate-400 text-sm font-medium">{title}</p>
                <h3 className="text-3xl font-bold text-white mt-1">{value}</h3>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-700/30">
                <p className="text-xs text-slate-500">
                    Compared to <span className="text-slate-400">last month</span>
                </p>
            </div>
        </motion.div>
    );
};

export default StatCard;
