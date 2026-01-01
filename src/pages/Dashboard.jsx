import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CalendarIcon,
    ClockIcon,
    DocumentTextIcon,
    UserGroupIcon,
    CogIcon,
    ArrowRightOnRectangleIcon,
    VideoCameraIcon,
    ChartBarIcon,
    SparklesIcon,
    CheckCircleIcon,
    XMarkIcon,
    PlusIcon,
    BellIcon
} from '@heroicons/react/24/outline';
import {
    CalendarDaysIcon,
    UserGroupIcon as UserGroupSolid
} from '@heroicons/react/24/solid';

const DashboardPage = () => {
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [isLoading, setIsLoading] = useState(true);
    const [timeOfDay, setTimeOfDay] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem('user');
        // if (!userData) {
        //     navigate('/login');
        //     return;
        // }
        // setUser(JSON.parse(userData));

        setTimeout(() => setIsLoading(false), 800);

        const hour = new Date().getHours();
        if (hour < 12) setTimeOfDay('Morning');
        else if (hour < 17) setTimeOfDay('Afternoon');
        else setTimeOfDay('Evening');
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    const stats = [
        {
            name: 'Scheduled Meetings',
            value: '7',
            change: '+2',
            changeType: 'positive',
            icon: CalendarDaysIcon,
            color: 'text-blue-500',
            bgColor: 'bg-blue-500/10',
            borderColor: 'border-blue-500/20'
        },
        {
            name: 'Meeting Minutes',
            value: '23',
            change: '+5',
            changeType: 'positive',
            icon: DocumentTextIcon,
            color: 'text-emerald-500',
            bgColor: 'bg-emerald-500/10',
            borderColor: 'border-emerald-500/20'
        },
        {
            name: 'Team Members',
            value: '12',
            change: '+1',
            changeType: 'positive',
            icon: UserGroupSolid,
            color: 'text-purple-500',
            bgColor: 'bg-purple-500/10',
            borderColor: 'border-purple-500/20'
        },
        {
            name: 'Time Saved',
            value: '8.5h',
            change: '+2.5h',
            changeType: 'positive',
            icon: ClockIcon,
            color: 'text-amber-500',
            bgColor: 'bg-amber-500/10',
            borderColor: 'border-amber-500/20'
        },
    ];

    const upcomingMeetings = [
        {
            id: 1,
            title: 'Product Launch Review',
            time: '10:00 AM',
            date: 'Today',
            participants: 8,
            duration: '45 min',
            type: 'video',
            priority: 'high'
        },
        {
            id: 2,
            title: 'Design Sprint Planning',
            time: '2:30 PM',
            date: 'Today',
            participants: 5,
            duration: '60 min',
            type: 'conference',
            priority: 'medium'
        },
        {
            id: 3,
            title: 'Client Q4 Review',
            time: '11:00 AM',
            date: 'Tomorrow',
            participants: 12,
            duration: '90 min',
            type: 'video',
            priority: 'high'
        },
    ];

    const recentMinutes = [
        {
            id: 1,
            title: 'Weekly Team Sync',
            date: '2 hours ago',
            duration: '45 min',
            participants: 8,
            status: 'processed',
            aiGenerated: true
        },
        {
            id: 2,
            title: 'Client Presentation Review',
            date: '1 day ago',
            duration: '60 min',
            participants: 6,
            status: 'reviewed',
            aiGenerated: true
        },
        {
            id: 3,
            title: 'Product Strategy Meeting',
            date: '2 days ago',
            duration: '90 min',
            participants: 10,
            status: 'published',
            aiGenerated: true
        },
    ];

    const quickActions = [
        {
            title: 'Schedule Meeting',
            description: 'AI-powered scheduling with optimal time detection',
            icon: CalendarIcon,
            color: 'bg-blue-500 hover:bg-blue-600',
            iconColor: 'text-blue-500',
            action: () => setActiveTab('schedule')
        },
        {
            title: 'Generate Minutes',
            description: 'Convert recordings to organized meeting notes',
            icon: DocumentTextIcon,
            color: 'bg-emerald-500 hover:bg-emerald-600',
            iconColor: 'text-emerald-500',
            action: () => setActiveTab('minutes')
        },
        {
            title: 'Calendar Sync',
            description: 'Connect Google Calendar & Outlook',
            icon: CogIcon,
            color: 'bg-purple-500 hover:bg-purple-600',
            iconColor: 'text-purple-500',
            action: () => setActiveTab('settings')
        }
    ];

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-3 border-[#7B61FF] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                    <p className="text-gray-400 text-sm">Loading your dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-900">
            {/* Sleek Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-14">
                        <div className="flex items-center space-x-8">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-[#7B61FF] rounded-lg flex items-center justify-center">
                                    <VideoCameraIcon className="h-4 w-4 text-white" />
                                </div>
                                <h1 className="text-xl font-bold text-white">IntelliMeet</h1>
                            </div>
                            <nav className="flex space-x-1">
                                {['Overview', 'Schedule', 'Minutes', 'Calendar', 'Analytics'].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => setActiveTab(item.toLowerCase())}
                                        className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${activeTab === item.toLowerCase()
                                                ? 'text-white bg-[#7B61FF] shadow-sm'
                                                : 'text-gray-400 hover:text-white hover:bg-slate-700'
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </nav>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button className="p-1.5 text-gray-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors">
                                <BellIcon className="h-4 w-4" />
                            </button>
                            <div className="flex items-center space-x-2">
                                <div className="text-right">
                                    <p className="text-xs font-medium text-white">{user?.name || 'User'}</p>
                                    <p className="text-xs text-gray-400">{user?.email || 'user@example.com'}</p>
                                </div>
                                <div className="w-8 h-8 bg-[#7B61FF] rounded-full flex items-center justify-center text-white font-medium text-xs">
                                    {user?.name?.charAt(0) || 'U'}
                                </div>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="p-1.5 text-gray-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                                title="Logout"
                            >
                                <ArrowRightOnRectangleIcon className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Awesome Welcome Section */}
                <div className="mb-6">
                    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-[#7B61FF] rounded-xl flex items-center justify-center">
                                    <SparklesIcon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-1">
                                        Good {timeOfDay}, <span className="text-[#7B61FF]">{user?.name?.split(' ')[0] || 'User'}</span>
                                    </h2>
                                    <p className="text-gray-400 text-sm">
                                        Your meetings are optimized and ready. <span className="text-emerald-400">3 new insights available.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="text-right">
                                    <p className="text-xs text-gray-400">Productivity Score</p>
                                    <p className="text-lg font-bold text-white">87%</p>
                                </div>
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
                                    <ChartBarIcon className="h-6 w-6 text-emerald-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Compact Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {stats.map((stat) => (
                        <div
                            key={stat.name}
                            className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-colors group"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-gray-400 mb-1">{stat.name}</p>
                                    <p className="text-xl font-bold text-white mb-0.5">{stat.value}</p>
                                    <p className={`text-xs font-medium ${stat.changeType === 'positive' ? 'text-emerald-400' : 'text-red-400'
                                        }`}>
                                        {stat.change}
                                    </p>
                                </div>
                                <div className={`p-2 rounded-lg ${stat.bgColor} border ${stat.borderColor}`}>
                                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-6">
                    {/* Upcoming Meetings */}
                    <div className="xl:col-span-2 bg-slate-800 rounded-xl border border-slate-700">
                        <div className="px-5 py-3 border-b border-slate-700 flex items-center justify-between">
                            <h3 className="text-sm font-semibold text-white flex items-center">
                                <ClockIcon className="h-4 w-4 text-blue-500 mr-2" />
                                Upcoming Meetings
                            </h3>
                            <button className="text-[#7B61FF] hover:text-[#00FFFF] text-xs font-medium flex items-center">
                                <PlusIcon className="h-3 w-3 mr-1" />
                                New
                            </button>
                        </div>
                        <div className="p-4">
                            {upcomingMeetings.map((meeting) => (
                                <div
                                    key={meeting.id}
                                    className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors mb-2 last:mb-0"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className={`w-2 h-8 rounded-full ${meeting.priority === 'high' ? 'bg-red-500' : 'bg-amber-500'
                                            }`}></div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">{meeting.title}</p>
                                            <p className="text-xs text-gray-400">
                                                {meeting.date} • {meeting.time} • {meeting.participants} people
                                            </p>
                                        </div>
                                    </div>
                                    <button className="px-3 py-1.5 bg-[#7B61FF] text-white rounded-md text-xs font-medium hover:bg-[#6a52e0] transition-colors">
                                        Join
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Meeting Minutes */}
                    <div className="bg-slate-800 rounded-xl border border-slate-700">
                        <div className="px-5 py-3 border-b border-slate-700">
                            <h3 className="text-sm font-semibold text-white flex items-center">
                                <DocumentTextIcon className="h-4 w-4 text-emerald-500 mr-2" />
                                Recent Minutes
                            </h3>
                        </div>
                        <div className="p-4">
                            {recentMinutes.map((minute) => (
                                <div
                                    key={minute.id}
                                    className="p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors mb-2 last:mb-0"
                                >
                                    <div className="flex items-start justify-between mb-1">
                                        <p className="text-sm font-semibold text-white">{minute.title}</p>
                                        {minute.aiGenerated && (
                                            <SparklesIcon className="h-3 w-3 text-amber-400 flex-shrink-0 mt-0.5" />
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-400 mb-2">
                                        {minute.participants} people • {minute.duration}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">{minute.date}</span>
                                        <div className="flex items-center space-x-2">
                                            <span className={`text-xs px-1.5 py-0.5 rounded ${minute.status === 'processed' ? 'bg-blue-500/20 text-blue-400' :
                                                    minute.status === 'reviewed' ? 'bg-amber-500/20 text-amber-400' :
                                                        'bg-emerald-500/20 text-emerald-400'
                                                }`}>
                                                {minute.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Clean Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {quickActions.map((action) => (
                        <button
                            key={action.title}
                            onClick={action.action}
                            className={`${action.color} text-white p-4 rounded-xl border border-slate-700 transition-all duration-200 hover:shadow-md text-left`}
                        >
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                    <action.icon className="h-4 w-4 text-white" />
                                </div>
                                <PlusIcon className="h-3 w-3 text-white/80" />
                            </div>
                            <h4 className="font-semibold text-sm mb-1">{action.title}</h4>
                            <p className="text-white/80 text-xs">{action.description}</p>
                        </button>
                    ))}
                </div>

                {/* Productivity Panel */}
                <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-semibold text-white flex items-center">
                            <ChartBarIcon className="h-4 w-4 text-[#00FFFF] mr-2" />
                            Weekly Performance
                        </h3>
                        <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">↑ 15% efficiency</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                            <p className="text-lg font-bold text-white">92%</p>
                            <p className="text-xs text-gray-400">Attendance</p>
                        </div>
                        <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                            <p className="text-lg font-bold text-white">18m</p>
                            <p className="text-xs text-gray-400">Time Saved</p>
                        </div>
                        <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                            <p className="text-lg font-bold text-white">24</p>
                            <p className="text-xs text-gray-400">Tasks</p>
                        </div>
                        <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                            <p className="text-lg font-bold text-white">4.8</p>
                            <p className="text-xs text-gray-400">Rating</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
