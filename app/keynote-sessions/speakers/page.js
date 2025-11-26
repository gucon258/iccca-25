import React from "react";
import { cards } from "@/utils/slideArray";

const speakers = [
    "Ayman EL-Refaie- Ph.D., FIEEE, FIET, FNAI",
    "Dr. Hironori Washizaki",
    "Dr. Sri Niwas Singh",
    "Dr Bijaya Ketan Panigrahi",
    "Dr. Mohammad Rihan",
    "Prof. Asheesh Kumar",
    "Dr. J. Ramkumar",
    "Dr. Rajeev Kumar Singh",
    "Dr. Supavadee Aramvith",
    "Dr. Vinod Kumar",
    "Dr. Vinay Kumar",
    "Dr. Brij B. Gupta",
    "Dr. Harivardhagini Subhadra",
    "Dr. Varun Kakar"
];


export default function KeynoteSpeakers() {
    return (
        <div className="py-6">
            <h2 className="text-center text-3xl font-bold">Keynote Speakers</h2>
            <p className="text-center text-gray-600 mb-6">
                2025 7th International Conference on Computing, Communication and Automation
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {speakers.map((speakerName, index) => {
                    const speakerDetails = cards.find((card) => card.name === speakerName);
                    if (!speakerDetails) return null;
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-red-500"
                        >
                            <img
                                className="w-32 h-32 mx-auto rounded-full border-4 border-orange-400 "
                                src={speakerDetails.imgSrc || "/reshot-icon-user-ZXFJAEQURK.svg"}
                                alt={speakerDetails.name}
                            />
                            <h3 className="text-xl font-semibold text-red-600 mt-4">
                                {speakerDetails.name}
                            </h3>
                            <p className="text-gray-700 mt-2 font-medium">{speakerDetails.position}</p>
                            <p className="text-gray-500 text-sm">{speakerDetails.organization}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
