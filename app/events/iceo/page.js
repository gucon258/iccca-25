import React from "react";
import Image from "next/image";
import { Calendar, MapPin, Mail, Award, Users, Target, Zap, Trophy, Lock } from "lucide-react";

const ICEOEventPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 pt-20 font-sans">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-white via-purple-50 to-blue-50 relative overflow-hidden">
                {/* Abstract Shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
                    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-0 -right-32 w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-32 left-20 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-purple-100 px-4 py-2 rounded-full shadow-sm">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                                </span>
                                <span className="text-sm font-semibold text-purple-900 tracking-wide uppercase">Innovative Corporate Executive Outlook</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                                I'CEO
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 mt-2 font-bold animate-gradient-x">
                                    Think. Lead. Decide.
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-light">
                                A high-stakes corporate simulation where <span className="font-semibold text-gray-900">visionary thinking</span> meets <span className="font-semibold text-gray-900">rapid execution</span>. Are you ready to lead through disruption?
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-3 text-gray-700 bg-white/60 backdrop-blur-md px-6 py-4 rounded-2xl shadow-sm border border-white/50 hover:border-purple-200 transition-colors">
                                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Date</p>
                                        <p className="font-bold text-gray-900">Nov 28, 2025</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700 bg-white/60 backdrop-blur-md px-6 py-4 rounded-2xl shadow-sm border border-white/50 hover:border-purple-200 transition-colors">
                                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Venue</p>
                                        <p className="font-bold text-gray-900">Galgotias Univ.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                <button
                                    disabled
                                    className="group flex items-center justify-center gap-3 bg-gray-100 text-gray-400 px-8 py-4 rounded-xl font-bold cursor-not-allowed border border-gray-200 transition-all"
                                >
                                    <Lock className="w-5 h-5 group-hover:text-gray-500 transition-colors" />
                                    <span>Registration Closed</span>
                                </button>
                                <a
                                    href="mailto:ieeegusb@galgotiasuniversity.edu"
                                    className="flex items-center justify-center gap-3 text-gray-700 px-8 py-4 rounded-xl font-bold border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>Contact Organizers</span>
                                </a>
                            </div>
                        </div>

                        <div className="relative group perspective-1000 lg:h-[600px] flex items-center justify-center">
                            <div className="relative w-full max-w-md mx-auto transform transition-all duration-700 group-hover:rotate-y-12 group-hover:rotate-x-6">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                                    <Image
                                        src="/events/iceo/flyer.png"
                                        alt="I'CEO Event Flyer"
                                        width={600}
                                        height={800}
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-xl z-20 animate-float hidden md:block border border-gray-100">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-3 rounded-xl border border-yellow-100">
                                            <Trophy className="w-8 h-8 text-yellow-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Prize Pool</p>
                                            <p className="text-2xl font-black text-gray-900">₹10,000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Prize Pool Section - Dark Theme */}
            <div className="bg-[#0F172A] text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8">
                        <Award className="w-4 h-4" />
                        <span>Rewards & Recognition</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
                        Compete for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Grand Prize</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-end">
                        {/* 2nd Prize */}
                        <div className="order-2 md:order-1 group relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl transform transition-transform duration-300 group-hover:translate-y-2"></div>
                            <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-gray-600 transition-all duration-300">
                                <div className="w-16 h-16 mx-auto bg-gray-700/50 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                                    <span className="text-3xl font-bold text-gray-300">2</span>
                                </div>
                                <div className="text-4xl font-bold text-white mb-2">₹3,000</div>
                                <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Runner Up</div>
                            </div>
                        </div>

                        {/* 1st Prize */}
                        <div className="order-1 md:order-2 group relative z-10">
                            <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-indigo-700 rounded-3xl transform transition-transform duration-300 group-hover:translate-y-2 shadow-2xl shadow-purple-900/50"></div>
                            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-xl shadow-lg shadow-orange-500/20">
                                        <Trophy className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="mt-4 text-6xl font-black text-white mb-2 tracking-tight">₹5,000</div>
                                <div className="text-sm font-bold text-purple-200 uppercase tracking-widest mb-6">Champion</div>
                                <div className="inline-block bg-purple-500/20 border border-purple-500/30 rounded-lg px-4 py-2 text-xs font-medium text-purple-200">
                                    + Stage Felicitation at UP CON
                                </div>
                            </div>
                        </div>

                        {/* 3rd Prize */}
                        <div className="order-3 group relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl transform transition-transform duration-300 group-hover:translate-y-2"></div>
                            <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-gray-600 transition-all duration-300">
                                <div className="w-16 h-16 mx-auto bg-gray-700/50 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                                    <span className="text-3xl font-bold text-orange-700/70">3</span>
                                </div>
                                <div className="text-4xl font-bold text-white mb-2">₹2,000</div>
                                <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Second Runner Up</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left Column - About */}
                    <div className="lg:col-span-7 space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
                                About The Event
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                I'CEO is not just a competition; it's a simulation of the C-Suite experience. Designed to challenge participants to think, lead, and decide like corporate executives facing sudden real-world disruptions. The event merges <span className="text-blue-600 font-semibold">technology</span>, <span className="text-purple-600 font-semibold">leadership</span>, and <span className="text-pink-600 font-semibold">strategic imagination</span>.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { text: "Immersive Simulation", color: "bg-blue-50 text-blue-700 border-blue-100" },
                                    { text: "Strategic Reasoning", color: "bg-purple-50 text-purple-700 border-purple-100" },
                                    { text: "Real-time Decisions", color: "bg-pink-50 text-pink-700 border-pink-100" },
                                    { text: "Corporate Challenges", color: "bg-indigo-50 text-indigo-700 border-indigo-100" }
                                ].map((item, i) => (
                                    <div key={i} className={`flex items-center gap-3 px-5 py-4 rounded-xl border ${item.color} transition-transform hover:scale-[1.02]`}>
                                        <div className="w-2 h-2 bg-current rounded-full opacity-60" />
                                        <span className="font-semibold">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <span className="w-12 h-1 bg-purple-600 rounded-full"></span>
                                Learning Objectives
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Strategic Thinking", desc: "Analytical capabilities", icon: Target },
                                    { title: "Decision Making", desc: "Executive-level skills", icon: Users },
                                    { title: "Creativity", desc: "Under time constraints", icon: Zap },
                                    { title: "Innovation", desc: "Fearless execution", icon: Award }
                                ].map((obj, i) => (
                                    <div key={i} className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-100 transition-all">
                                        <div className="mb-4 inline-flex p-3 bg-gray-50 rounded-xl text-gray-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                            <obj.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{obj.title}</h3>
                                        <p className="text-sm text-gray-500">{obj.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Concept Card */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-32">
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group">
                                {/* Background Patterns */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                                            <Zap className="w-8 h-8 text-yellow-400" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold">Event Concept</h2>
                                            <p className="text-gray-400 text-sm">How it works</p>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-3">The Challenge</h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                Teams receive a surprise corporate/technology disruption scenario and must brainstorm their response within <span className="text-white font-bold">5 minutes</span>.
                                            </p>
                                        </div>

                                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                            <h3 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-3">Sample Scenario</h3>
                                            <p className="text-white italic font-medium text-lg leading-snug">
                                                "NVIDIA ceases to exist overnight - how does the global AI ecosystem react?"
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                                            <span className="px-4 py-2 bg-white/10 rounded-lg font-semibold text-sm border border-white/5">Team of 2</span>
                                            <span className="px-4 py-2 bg-white/10 rounded-lg font-semibold text-sm border border-white/5">5 min Plan</span>
                                            <span className="px-4 py-2 bg-white/10 rounded-lg font-semibold text-sm border border-white/5">3 min Pitch</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Organizers Section - Minimalist */}
            <div className="bg-white border-t border-gray-100 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold text-purple-600 uppercase tracking-widest">Credits</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">Organized By</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Primary Host</h3>
                            <p className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">IEEE Galgotias University Student Branch</p>
                        </div>
                        <div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">In Association With</h3>
                            <ul className="space-y-2">
                                <li className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">IEEE Uttar Pradesh Section</li>
                                <li className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">IEEE WIE UP Section</li>
                                <li className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">WIE Galgotias University Affinity Group</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ICEOEventPage;
