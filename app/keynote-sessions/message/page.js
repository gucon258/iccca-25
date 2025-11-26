import React from "react";

export default function MessagePage() {
    return (
        <div className="min-h-screen py-10 px-4 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Message from Chairman AICTE</h1>

            <div className="flex flex-col items-center mb-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-red-600 shadow-lg mb-4">
                    <img
                        src="/ImportantPersons/tg.webp"
                        alt="Professor T. G. Sitharam"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Professor T. G. Sitharam</h2>
                <p className="text-lg text-gray-600 font-medium">Chairman, AICTE</p>
            </div>

            <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
                <img
                    src="/message.png"
                    alt="Message from Chairman AICTE"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
}
