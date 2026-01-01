import React from 'react';
import { BotIcon, ClipboardIcon, ZapIcon, CalendarIcon } from '../components/Icons.jsx';

const ServicesPage = () => {
    const services = [
        {
            icon: <BotIcon className="h-8 w-8 text-[#00FFFF]" />,
            title: "AI Scheduler Module",
            description: "Our AI finds the optimal meeting times across all participants, considering availability, time zones, and preferences automatically."
        },
        {
            icon: <ClipboardIcon className="h-8 w-8 text-[#00FFFF]" />,
            title: "AI Summarizer",
            description: "Get concise, intelligent summaries of your meetings. Our LLM-powered engine extracts key points, decisions, and action items."
        },
        {
            icon: <ZapIcon className="h-8 w-8 text-[#00FFFF]" />,
            title: "Smart Rescheduler",
            description: "Conflicts happen. IntelliMeet detects scheduling conflicts and proactively suggests the best alternative slots for everyone."
        },
        {
            icon: <CalendarIcon className="h-8 w-8 text-[#00FFFF]" />,
            title: "Seamless Calendar Integration",
            description: "Two-way sync with Google Calendar and Microsoft Outlook ensures your schedule is always up-to-date, everywhere."
        }
    ];

    return (
        <div className="py-16 sm:py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">The Future of Meeting Management</h2>
                    <p className="text-lg text-gray-400">Powerful AI features designed to save you time.</p>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    {services.map((service, index) => (
                        <div key={index} className="card p-6">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-700 mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
