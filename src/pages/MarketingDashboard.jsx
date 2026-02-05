import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, Cell, PieChart, Pie, Legend
} from 'recharts';
import { Target, Globe, Share2, MousePointer2 } from 'lucide-react';
import StatCard from '../components/common/StatCard';

const campaignData = [
    { name: 'Email', value: 4500, color: '#38bdf8' },
    { name: 'Social', value: 3200, color: '#818cf8' },
    { name: 'Search', value: 2800, color: '#c084fc' },
    { name: 'Direct', value: 1500, color: '#fb7185' },
];

const trafficData = [
    { name: 'Mon', organic: 2400, paid: 1400 },
    { name: 'Tue', organic: 1398, paid: 2210 },
    { name: 'Wed', organic: 9800, paid: 2290 },
    { name: 'Thu', organic: 3908, paid: 2000 },
    { name: 'Fri', organic: 4800, paid: 2181 },
    { name: 'Sat', organic: 3800, paid: 2500 },
    { name: 'Sun', organic: 4300, paid: 2100 },
];

const MarketingDashboard = () => {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">Marketing Insights</h1>
                    <p className="text-slate-400 mt-1">Monitor campaign performance and audience engagement</p>
                </div>
                <div className="flex gap-4">
                    <select className="bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-xl px-4 py-2 outline-none focus:border-sky-500 transition-all">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Campaign ROI"
                    value="4.2x"
                    trend="up"
                    trendValue="+0.5%"
                    icon={<Target />}
                    color="bg-sky-500"
                />
                <StatCard
                    title="Total Reach"
                    value="1.2M"
                    trend="up"
                    trendValue="+15.2%"
                    icon={<Globe />}
                    color="bg-indigo-500"
                />
                <StatCard
                    title="Engagement"
                    value="84.5K"
                    trend="up"
                    trendValue="+5.1%"
                    icon={<Share2 />}
                    color="bg-purple-500"
                />
                <StatCard
                    title="CTR"
                    value="3.8%"
                    trend="down"
                    trendValue="-0.4%"
                    icon={<MousePointer2 />}
                    color="bg-rose-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Traffic Source */}
                <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl">
                    <h3 className="text-xl font-bold text-white mb-6">Traffic Analysis</h3>
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={trafficData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }}
                                />
                                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                                <Bar dataKey="organic" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="paid" fill="#818cf8" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Campaign Breakdown */}
                <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl">
                    <h3 className="text-xl font-bold text-white mb-6">Campaign Performance</h3>
                    <div className="h-[350px] w-full flex items-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={campaignData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={120}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {campaignData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }}
                                />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketingDashboard;
