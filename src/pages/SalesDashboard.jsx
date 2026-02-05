import React from 'react';
import {
    LineChart, Line, BarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, AreaChart, Area,
    Cell, PieChart, Pie
} from 'recharts';
import { motion } from 'framer-motion';
import { DollarSign, ShoppingBag, Users, ArrowUpRight } from 'lucide-react';
import StatCard from '../components/common/StatCard';

const data = [
    { name: 'Jan', revenue: 4000, sales: 2400 },
    { name: 'Feb', revenue: 3000, sales: 1398 },
    { name: 'Mar', revenue: 2000, sales: 9800 },
    { name: 'Apr', revenue: 2780, sales: 3908 },
    { name: 'May', revenue: 1890, sales: 4800 },
    { name: 'Jun', revenue: 2390, sales: 3800 },
    { name: 'Jul', revenue: 3490, sales: 4300 },
];

const topProducts = [
    { name: 'Wireless Headphones', sales: 450, color: '#38bdf8' },
    { name: 'Smart Watch', sales: 380, color: '#818cf8' },
    { name: 'Bluetooth Speaker', sales: 320, color: '#c084fc' },
    { name: 'Power Bank', sales: 210, color: '#fb7185' },
];

const SalesDashboard = () => {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">Sales Overview</h1>
                    <p className="text-slate-400 mt-1">Track your revenue and sales performance</p>
                </div>
                <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-sky-500/20 transition-all active:scale-95">
                    Download Report
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Revenue"
                    value="$124,563"
                    trend="up"
                    trendValue="+12.5%"
                    icon={<DollarSign />}
                    color="bg-sky-500"
                />
                <StatCard
                    title="Total Sales"
                    value="3,456"
                    trend="up"
                    trendValue="+8.2%"
                    icon={<ShoppingBag />}
                    color="bg-indigo-500"
                />
                <StatCard
                    title="New Customers"
                    value="842"
                    trend="down"
                    trendValue="-3.1%"
                    icon={<Users />}
                    color="bg-purple-500"
                />
                <StatCard
                    title="Avg. Order Value"
                    value="$342"
                    trend="up"
                    trendValue="+5.4%"
                    icon={<ArrowUpRight />}
                    color="bg-rose-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl">
                    <h3 className="text-xl font-bold text-white mb-6">Revenue Analysis</h3>
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    stroke="#64748b"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#64748b"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `$${value}`}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#1e293b',
                                        border: '1px solid #334155',
                                        borderRadius: '12px',
                                        color: '#f8fafc'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#38bdf8"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorRev)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Top Products */}
                <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl">
                    <h3 className="text-xl font-bold text-white mb-6">Top Products</h3>
                    <div className="space-y-6">
                        {topProducts.map((product, idx) => (
                            <div key={idx} className="flex flex-col gap-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-300 font-medium">{product.name}</span>
                                    <span className="text-slate-400">{product.sales} sales</span>
                                </div>
                                <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(product.sales / 500) * 100}%` }}
                                        transition={{ duration: 1, delay: 0.2 * idx }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: product.color }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 p-4 bg-sky-500/10 border border-sky-500/20 rounded-2xl">
                        <p className="text-sky-400 text-sm font-medium">Insights</p>
                        <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                            Wireless Headphones sales are up by 15% this week. Consider increasing stock for the upcoming weekend.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesDashboard;
