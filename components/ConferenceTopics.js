"use client";

import React from "react";
import { motion } from "framer-motion";

const topics = [
    "Industry 5.0 and 6.0 applications that integrate human-centric design, intelligent automation, and sustainability.",
    "AI and ML techniques applied to power electronics, smart grids, and advanced power supply systems.",
    "Emerging solutions for data centre power systems, telecom infrastructure, and autonomous platforms.",
    "Artificial intelligence and soft computing innovations across power, energy, communication, and security systems.",
    "AI-driven sustainable analytics and intelligent frameworks for next-generation industrial ecosystems.",
    "EdgeAI approaches for secure mobility, action recognition, and behavioral understanding.",
    "Human-centric intelligent systems including NLP, trustworthy interfaces, and blockchain-supported applications.",
    "AI-powered cloud resource allocation, optimization, and intelligent service management.",
    "Breakthroughs in innovative and disruptive technologies shaping future digital landscapes.",
    "Advances in information security, cybersecurity, and digital defense strategies.",
    "Generative AI models and their influence on future architectures and intelligent systems.",
    "Progress in artificial intelligence, soft computing, and engineering systems across disciplines.",
    "Smart and sustainable systems enhanced by advanced machine learning techniques.",
    "Trustworthy AI applications for social good in healthcare, agriculture, education, and smart cities.",
    "AI-driven cybersecurity for intelligent transportation and connected mobility.",
    "AI-enhanced sensors, drones, and autonomous systems with a focus on edge intelligence and generative autonomy.",
    "Convergence of AI, blockchain, and 6G technologies for secure next-generation networks.",
    "Adaptive cybersecurity solutions powered by generative AI and machine learning."
];

const ConferenceTopics = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl font-bold text-[#024CAD] mb-4">
                        Conference Topics and Key Highlights
                    </h2>
                    <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#024CAD]"
                        >
                            <p className="text-gray-700 font-medium">{topic}</p>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center bg-blue-50 p-6 rounded-xl border border-blue-100"
                >
                    <p className="text-lg text-gray-800 font-semibold italic">
                        "The conference welcomes high-quality submissions in these areas and related domains; contributions are not limited to the topics listed above."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ConferenceTopics;
