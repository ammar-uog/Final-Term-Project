import React from "react";
import { Link } from "react-router-dom";
import {
  BotIcon,
  ClipboardIcon,
  ZapIcon,
  ClockIcon,
} from "../components/Icons";

const FeatureCard = ({ icon, title, children }) => (
  <div className="card p-6">
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-700 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const HomePage = () => {
  return (
    <>
      {/* ... (paste the entire content of the HomePage component here) ... */}
      {/* Hero Section */}
      <div className="relative text-white text-center py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 bg-[#7B61FF] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="w-80 h-80 bg-[#00FFFF] rounded-full blur-3xl opacity-20 animate-pulse-slow -mt-40 ml-20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-shadow-glow">
            Intelligent Meeting Scheduling,{" "}
            <span className="text-[#00FFFF]">Automated.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
            IntelliMeet leverages cutting-edge AI to automate the entire meeting
            lifecycle. From scheduling and summaries to smart rescheduling,
            reclaim your productivity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services" className="btn-primary">
              Explore Features
            </Link>
            <button className="btn-secondary">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Why Choose IntelliMeet?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Stop wasting time on coordination. Start collaborating.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ClockIcon className="h-6 w-6 text-[#00FFFF]" />}
              title="Save Time"
            >
              Eliminate the back-and-forth of scheduling. Our AI finds the
              perfect time for everyone in seconds.
            </FeatureCard>
            <FeatureCard
              icon={<ZapIcon className="h-6 w-6 text-[#00FFFF]" />}
              title="Boost Productivity"
            >
              Focus on what matters. With automated summaries and action items,
              you'll never miss a detail.
            </FeatureCard>
            <FeatureCard
              icon={<BotIcon className="h-6 w-6 text-[#00FFFF]" />}
              title="Work Smarter"
            >
              Our system learns your preferences, understands context, and makes
              intelligent suggestions.
            </FeatureCard>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 sm:py-24 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-12">
            Effortless Scheduling in 3 Steps
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-1 text-center">
              <div className="text-5xl font-bold text-[#7B61FF] mb-2">1</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Connect Calendar
              </h3>
              <p className="text-gray-400">
                Sync your Google or Outlook calendar in one click.
              </p>
            </div>
            <div className="text-2xl text-slate-600 hidden md:block">→</div>
            <div className="flex-1 text-center">
              <div className="text-5xl font-bold text-[#7B61FF] mb-2">2</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Define Meeting
              </h3>
              <p className="text-gray-400">
                Describe your meeting needs in natural language.
              </p>
            </div>
            <div className="text-2xl text-slate-600 hidden md:block">→</div>
            <div className="flex-1 text-center">
              <div className="text-5xl font-bold text-[#7B61FF] mb-2">3</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                AI Takes Over
              </h3>
              <p className="text-gray-400">
                IntelliMeet coordinates, sends invites, and confirms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-20 px-4">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
          Ready to Revolutionize Your Scheduling?
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Join the future of work today.
        </p>
        <button className="btn-primary bg-gradient-to-r from-[#7B61FF] to-[#00FFFF] text-slate-900 hover:from-[#6a52e0] hover:to-[#00CCCC]">
          Sign Up for Free
        </button>
      </div>
    </>
  );
};

export default HomePage;
