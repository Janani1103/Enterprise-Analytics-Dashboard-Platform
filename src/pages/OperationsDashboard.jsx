import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, Cell, ReferenceLine
} from 'recharts';
import { Package, Truck, Activity, AlertCircle } from 'lucide-react';
import StatCard from '../components/common/StatCard';

const inventoryData = [
    { category: 'Electronics', stock: 120, min: 50 },
    { category: 'Accessories', stock: 450, min: 100 },
    { category: 'Office', stock: 35, min: 40 },
    { category: 'Logistics', stock: 85, min: 30 },
];

const shippingStatus = [
    { id: '#SHP-001', destination: 'New York, US', status: 'In Transit', priority: 'High' },
    { id: '#SHP-002', destination: 'London, UK', status: 'Delivered', priority: 'Medium' },
    { id: '#SHP-003', destination: 'Tokyo, JP', status: 'Pending', priority: 'High' },
    { id: '#SHP-004', destination: 'Berlin, DE', status: 'In Transit', priority: 'Low' },
];

const OperationsDashboard = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">Operations Control</h1>
                <p className="text-slate-400 mt-1">Track inventory, shipping, and supply chain efficiency</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Stock Level"
                    value="84%"
                    trend="up"
                    trendValue="+2.1%"
                    icon={<Package />}
                    color="bg-sky-500"
                />
                <StatCard
                    title="Active Shipments"
                    value="42"
                    trend="up"
                    trendValue="+5"
                    icon={<Truck />}
                    color="bg-indigo-500"
                />
                <StatCard
                    title="Efficiency"
                    value="92.4%"
                    trend="up"
                    trendValue="+0.8%"
                    icon={<Activity />}
                    color="bg-emerald-500"
                />
                <StatCard
                    title="Operational Alerts"
                    value="3"
                    trend="down"
                    trendValue="-2"
                    icon={<AlertCircle />}
                    color="bg-rose-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl">
                    <h3 className="text-xl font-bold text-white mb-6">Inventory Status</h3>
                    <div className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={inventoryData} layout="vertical">
                                <XAxis type="number" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis dataKey="category" type="category" stroke="#64748b" fontSize={12} width={100} tickLine={false} axisLine={false} />
                                <Tooltip cursor={{ fill: '#334155', opacity: 0.1 }} contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }} />
                                <Bar dataKey="stock" radius={[0, 4, 4, 0]}>
                                    {inventoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.stock < entry.min ? '#f43f5e' : '#38bdf8'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl overflow-hidden">
                    <h3 className="text-xl font-bold text-white mb-6">Recent Shipments</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-700/50">
                                    <th className="pb-4 text-xs font-semibold text-slate-500 uppercase">ID</th>
                                    <th className="pb-4 text-xs font-semibold text-slate-500 uppercase">Status</th>
                                    <th className="pb-4 text-xs font-semibold text-slate-500 uppercase text-right">Priority</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700/30">
                                {shippingStatus.map((ship, idx) => (
                                    <tr key={idx} className="group">
                                        <td className="py-4 text-sm font-medium text-slate-300 group-hover:text-sky-400 transition-colors">
                                            {ship.id}
                                            <p className="text-[10px] text-slate-500 font-normal mt-0.5">{ship.destination}</p>
                                        </td>
                                        <td className="py-4">
                                            <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase ${ship.status === 'Delivered' ? 'bg-emerald-500/10 text-emerald-400' :
                                                    ship.status === 'In Transit' ? 'bg-sky-500/10 text-sky-400' :
                                                        'bg-amber-500/10 text-amber-400'
                                                }`}>
                                                {ship.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-right">
                                            <span className={`text-xs ${ship.priority === 'High' ? 'text-rose-400' : 'text-slate-400'
                                                }`}>
                                                {ship.priority}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button className="w-full mt-6 py-2.5 border border-slate-700 hover:bg-slate-700/50 text-slate-400 hover:text-white text-sm font-medium rounded-xl transition-all">
                        View All Shipments
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OperationsDashboard;
