import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, AreaChart, Area, Legend
} from 'recharts';
import { CreditCard, TrendingUp, Landmark, ShieldAlert } from 'lucide-react';
import StatCard from '../components/common/StatCard';

const financeData = [
    { month: 'Jan', income: 45000, expense: 32000 },
    { month: 'Feb', income: 52000, expense: 38000 },
    { month: 'Mar', income: 48000, expense: 35000 },
    { month: 'Apr', income: 61000, expense: 42000 },
    { month: 'May', income: 55000, expense: 45000 },
    { month: 'Jun', income: 67000, expense: 48000 },
];

const departmentSpending = [
    { name: 'Marketing', spent: 12500, budget: 15000 },
    { name: 'Sales', spent: 8000, budget: 10000 },
    { name: 'R&D', spent: 22000, budget: 20000 },
    { name: 'HR', spent: 5000, budget: 6000 },
];

const FinanceDashboard = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">Financial Status</h1>
                <p className="text-slate-400 mt-1">Manage budgets, expenses, and profitability trends</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Net Profit"
                    value="$45,200"
                    trend="up"
                    trendValue="+18.4%"
                    icon={<TrendingUp />}
                    color="bg-emerald-500"
                />
                <StatCard
                    title="Cash Balance"
                    value="$128,400"
                    trend="up"
                    trendValue="+3.2%"
                    icon={<Landmark />}
                    color="bg-sky-500"
                />
                <StatCard
                    title="Total Expenses"
                    value="$32,850"
                    trend="down"
                    trendValue="-2.5%"
                    icon={<CreditCard />}
                    color="bg-indigo-500"
                />
                <StatCard
                    title="Risk Alerts"
                    value="2"
                    trend="up"
                    trendValue="Critical"
                    icon={<ShieldAlert />}
                    color="bg-rose-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl">
                    <h3 className="text-xl font-bold text-white mb-6">Profit & Loss Trends</h3>
                    <div className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={financeData}>
                                <defs>
                                    <linearGradient id="colorInc" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }} />
                                <Legend verticalAlign="top" align="right" />
                                <Area type="monotone" dataKey="income" stroke="#10b981" fillOpacity={1} fill="url(#colorInc)" />
                                <Area type="monotone" dataKey="expense" stroke="#f43f5e" fillOpacity={1} fill="url(#colorExp)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl">
                    <h3 className="text-xl font-bold text-white mb-6">Department Budgets</h3>
                    <div className="space-y-6">
                        {departmentSpending.map((dept, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-300">{dept.name}</span>
                                    <span className="text-slate-500">${dept.spent} / ${dept.budget}</span>
                                </div>
                                <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${dept.spent > dept.budget ? 'bg-rose-500' : 'bg-emerald-500'}`}
                                        style={{ width: `${Math.min((dept.spent / dept.budget) * 100, 100)}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinanceDashboard;
