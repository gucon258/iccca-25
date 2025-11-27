'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Component } from "lucide-react";
import { categories } from "@/utils/slideArray";
import { chairs } from "@/utils/slideArray";

export default function ConferenceDetails() {
  const [openCategory, setOpenCategory] = useState(null);
  const [openChair, setOpenChair] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const toggleChair = (index) => {
    setOpenChair(openChair === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-2 md:p-8 bg-white md:px-16"
    >
      <h1 className="relative w-fit tracking-tight text-balance py-2 font-bold !leading-tight text-gray-900 text-2xl md:text-6xl lg:text-7xl">
        Conference Topics &
        <span
          className="px-2 inline-block"
          style={{
            background: "linear-gradient(to right, #BE2727, #F96604)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Key Highlights
        </span>
      </h1>

      <div className="rounded-lg">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-white rounded-lg shadow-md md:p-4">
            <h2 className="text-xl lg:text-2xl font-bold text-[#BE2727] mb-4">Conference Topics</h2>
            <div className="space-y-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {[
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
                ].map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-800 font-semibold italic">
                  "The conference welcomes high-quality submissions in these areas and related domains; contributions are not limited to the topics listed above."
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✔</span>
                <div>
                  <strong>Focus Areas:</strong> Advanced computing, information security, AI, and emerging trends in communication technologies.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✔</span>
                <div>
                  <strong>Global Participation:</strong> International researchers, practitioners, and experts sharing cutting-edge research.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✔</span>
                <div>
                  <strong>Expert Sessions:</strong> Keynote addresses and technical talks from industry leaders and academic pioneers.
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conference Location</h2>
              <iframe
                title="Galgotias University Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.7338524564702!2d77.53646888722264!3d28.3668950337376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc7365a740e65%3A0xd0d60a62e55ab171!2sGalgotias%20University!5e0!3m2!1sen!2sin!4v1742921443772!5m2!1sen!2sin"
                width="100%"
                height="400"
                className="rounded-lg shadow-md"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>


    </motion.div>
  );
}