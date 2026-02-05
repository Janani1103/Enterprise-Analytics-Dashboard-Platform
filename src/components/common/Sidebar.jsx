import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  TrendingUp,
  Wallet,
  Settings,
  LogOut,
  Package,
  Activity
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: 'Sales', icon: <TrendingUp size={20} />, path: '/dashboard', end: true },
    { title: 'Marketing', icon: <BarChart3 size={20} />, path: '/dashboard/marketing' },
    { title: 'Finance', icon: <Wallet size={20} />, path: '/dashboard/finance' },
    { title: 'Operations', icon: <Activity size={20} />, path: '/dashboard/operations' },
    { title: 'Settings', icon: <Settings size={20} />, path: '/dashboard/settings' },
  ];

  return (
    <div className="h-screen w-64 bg-[#1e293b]/50 backdrop-blur-xl border-r border-slate-800 flex flex-col fixed left-0 top-0 z-50">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
            <LayoutDashboard className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent italic">
            NEXUS AI
          </span>
        </div>

        <nav className="space-y-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 ml-2">
            Main Menu
          </p>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                ${isActive
                  ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20 shadow-lg shadow-sky-500/5'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }
              `}
            >
              <span className="transition-transform duration-200 group-hover:scale-110">
                {item.icon}
              </span>
              <span className="font-medium">{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-slate-800/50">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:text-rose-400 hover:bg-rose-400/10 rounded-xl transition-all duration-200 group"
        >
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
