import React, { useState } from 'react';
import { User, Bell, Shield, Moon, Monitor, Smartphone, Camera, Save } from 'lucide-react';

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Profile', icon: <User size={18} /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
        { id: 'security', label: 'Security', icon: <Shield size={18} /> },
        { id: 'appearance', label: 'Appearance', icon: <Monitor size={18} /> },
    ];

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold text-white">Settings</h1>
                <p className="text-slate-400 mt-1">Manage your account preferences and configurations</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Navigation */}
                <div className="w-full lg:w-64 flex-shrink-0">
                    <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-2 overflow-hidden">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 space-y-6">
                    {/* Profile Section */}
                    {activeTab === 'profile' && (
                        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-xl font-bold text-white mb-6">Personal Information</h2>

                            <div className="flex items-center gap-6 mb-8">
                                <div className="relative group cursor-pointer">
                                    <div className="w-24 h-24 rounded-full bg-slate-700 overflow-hidden border-4 border-slate-600 group-hover:border-sky-500 transition-colors">
                                        <div className="w-full h-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center">
                                            <User size={32} className="text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Camera className="text-white" size={24} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Janani Nethma</h3>
                                    <p className="text-slate-400 text-sm">Administrator</p>
                                    <button className="text-sky-400 text-sm font-medium hover:text-sky-300 mt-2">Change Avatar</button>
                                </div>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">First Name</label>
                                        <input type="text" defaultValue="Janani" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:border-sky-500 focus:outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Last Name</label>
                                        <input type="text" defaultValue="Nethma" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:border-sky-500 focus:outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Email Address</label>
                                        <input type="email" defaultValue="janani@nexus.ai" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:border-sky-500 focus:outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Phone Number</label>
                                        <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:border-sky-500 focus:outline-none transition-colors" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Bio</label>
                                    <textarea rows="4" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:border-sky-500 focus:outline-none transition-colors" defaultValue="Senior Data Analyst with 5 years of experience in business intelligence and data visualization." />
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button type="button" className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-sky-500/20 transition-all flex items-center gap-2">
                                        <Save size={18} />
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Appearance Section */}
                    {activeTab === 'appearance' && (
                        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-xl font-bold text-white mb-6">Appearance Preferences</h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="text-sm font-medium text-slate-300 mb-4 block">Theme Mode</label>
                                    <div className="grid grid-cols-3 gap-4">
                                        <button className="flex flex-col items-center gap-3 p-4 rounded-2xl border-2 border-sky-500 bg-sky-500/10 transition-all">
                                            <div className="w-full aspect-video bg-slate-900 rounded-lg border border-slate-700"></div>
                                            <span className="text-sm font-medium text-white flex items-center gap-2"><Moon size={16} /> Dark</span>
                                        </button>
                                        <button className="flex flex-col items-center gap-3 p-4 rounded-2xl border-2 border-transparent bg-slate-800 hover:bg-slate-750 transition-all opacity-50 cursor-not-allowed">
                                            <div className="w-full aspect-video bg-white rounded-lg border border-slate-200"></div>
                                            <span className="text-sm font-medium text-slate-400 flex items-center gap-2"> Light</span>
                                        </button>
                                        <button className="flex flex-col items-center gap-3 p-4 rounded-2xl border-2 border-transparent bg-slate-800 hover:bg-slate-750 transition-all">
                                            <div className="w-full aspect-video bg-slate-900 rounded-lg border border-slate-700 flex items-center justify-center text-xs text-slate-500">Auto</div>
                                            <span className="text-sm font-medium text-slate-400 text-center">System</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Notifications Section */}
                    {activeTab === 'notifications' && (
                        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-xl font-bold text-white mb-6">Notification Preferences</h2>
                            <div className="space-y-6">
                                {[
                                    { title: 'Email Notifications', desc: 'Receive daily summaries and critical alerts via email', default: true },
                                    { title: 'Push Notifications', desc: 'Get real-time updates on your browser', default: true },
                                    { title: 'Marketing Emails', desc: 'Receive news, special offers, and product updates', default: false },
                                    { title: 'Security Alerts', desc: 'Get notified about suspicious login attempts', default: true },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                                        <div>
                                            <p className="font-medium text-white">{item.title}</p>
                                            <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" defaultChecked={item.default} className="sr-only peer" />
                                            <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-sky-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500"></div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Security Section */}
                    {activeTab === 'security' && (
                        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-xl font-bold text-white mb-6">Security Settings</h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                                    <div>
                                        <p className="font-medium text-white">Two-Factor Authentication</p>
                                        <p className="text-xs text-slate-400 mt-1">Add an extra layer of security to your account</p>
                                    </div>
                                    <button
                                        onClick={() => alert('2FA Setup Wizard would open here.')}
                                        className="text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors"
                                    >
                                        Enable
                                    </button>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                                    <div>
                                        <p className="font-medium text-white">Change Password</p>
                                        <p className="text-xs text-slate-400 mt-1">Last changed 3 months ago</p>
                                    </div>
                                    <button
                                        onClick={() => alert('Password Change Modal would open here.')}
                                        className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
                                    >
                                        Update
                                    </button>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                                    <div>
                                        <p className="font-medium text-white">Active Sessions</p>
                                        <p className="text-xs text-slate-400 mt-1">Manage devices where you're logged in</p>
                                    </div>
                                    <button className="text-slate-300 hover:text-white text-sm font-medium transition-colors">View All</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
