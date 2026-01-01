import React from 'react';

const AboutPage = () => {
    return (
        <div className="py-16 sm:py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">About IntelliMeet</h2>
                    <p className="text-xl text-gray-300">
                        We are on a mission to eliminate the friction in modern collaboration.
                    </p>
                </div>
                <div className="card p-8 text-lg text-gray-400 space-y-6 text-left">
                    <p>
                        IntelliMeet was born from a simple observation: professionals spend too much time on the logistics of meetings and not enough on the substance. The endless back-and-forth emails to find a suitable time, the struggle to recall key decisions, and the hassle of rescheduling are significant drains on productivity and focus.
                    </p>
                    <p>
                        We decided to solve this problem by harnessing the power of Artificial Intelligence and Large Language Models (LLMs). Our system isn't just another scheduling tool; it's an intelligent assistant that understands context, learns user preferences, and proactively manages the entire meeting lifecycle.
                    </p>
                    <p>
                        By integrating deeply with the tools you already use, like Google Calendar and Outlook, we provide a seamless experience that works in the background, making your team more efficient. IntelliMeet is built for modern workplaces, startups, and enterprise teams that value their time and strive for peak efficiency.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
