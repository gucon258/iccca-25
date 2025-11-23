import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Calendar, MapPin, Users, Trophy, Target, Clock, QrCode } from "lucide-react";

const WiePage = () => {
  return (
    <MaxWidthWrapper className="py-20">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Women In Engineering Events
        </h1>
        <div className="w-24 h-1 bg-accent mb-8 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Event Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#DE4060] via-[#A73E9C] to-[#438ACC] p-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">WIE-HACKEARTH 2025</h2>
            <p className="text-lg md:text-xl opacity-90 font-medium">
              Hybrid International Hackathon for Sustainable and Smart Tech Solutions for Women
            </p>
            <div className="mt-4 inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold border border-white/30">
              Mode: In-Person
            </div>
          </div>

          {/* Event Flyer */}
          <div className="w-full relative h-[500px] md:h-[800px] bg-gray-50 border-b border-gray-100">
            <Image
              src="/wie-event.jpg"
              alt="WIE-HACKEARTH 2025 Flyer"
              fill
              className="object-contain"
              priority
              quality={100}
              unoptimized
            />
          </div>

          <div className="p-8">
            {/* Key Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl">
                <Calendar className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Date</h3>
                  <p className="text-gray-600">November 28-29, 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Venue</h3>
                  <p className="text-gray-600">Galgotias University, Greater Noida</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                <Clock className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Registration Deadline</h3>
                  <p className="text-gray-600">November 23, 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                <Users className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Eligibility</h3>
                  <p className="text-gray-600 text-sm">
                    UG & PG Students (Male & Female)
                    <br />
                    Team of 2-3 Members (1 female mandatory)
                  </p>
                </div>
              </div>
            </div>

            {/* Themes Section */}
            <div className="mb-8 text-left">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-[#DE4060]" />
                <h3 className="text-xl font-bold text-gray-900">Themes</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Smart Health & Well-being for Women",
                  "Sustainable Living & Green Technologies",
                  "Safety & Security Tech",
                  "Women in Education & Digital Literacy",
                  "Women Entrepreneurship & Financial Empowerment"
                ].map((theme, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                    <span className="w-2 h-2 bg-[#A73E9C] rounded-full shrink-0"></span>
                    {theme}
                  </div>
                ))}
              </div>
            </div>

            {/* Prizes Section */}
            <div className="mb-8 text-left">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-6 h-6 text-[#DE4060]" />
                <h3 className="text-xl font-bold text-gray-900">Prizes</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl text-center">
                  <div className="text-yellow-600 font-bold text-xl">7k</div>
                  <div className="text-xs text-yellow-800 font-medium uppercase tracking-wide">1st Prize</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center">
                  <div className="text-gray-600 font-bold text-xl">5k</div>
                  <div className="text-xs text-gray-800 font-medium uppercase tracking-wide">2nd Prize</div>
                </div>
                <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl text-center">
                  <div className="text-orange-600 font-bold text-xl">3k</div>
                  <div className="text-xs text-orange-800 font-medium uppercase tracking-wide">3rd Prize</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-center col-span-2 md:col-span-2 flex justify-around items-center">
                  <div>
                    <div className="text-blue-600 font-bold text-xl">2k</div>
                    <div className="text-xs text-blue-800 font-medium uppercase tracking-wide">Consolation</div>
                  </div>
                  <div className="h-8 w-px bg-blue-200"></div>
                  <div>
                    <div className="text-blue-600 font-bold text-xl">2k</div>
                    <div className="text-xs text-blue-800 font-medium uppercase tracking-wide">Consolation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Info */}
            <div className="text-center pt-6 border-t border-gray-100">
              <div className="inline-flex flex-col items-center justify-center gap-3 bg-gray-50 p-6 rounded-2xl border border-gray-100 w-full md:w-auto">
                <div className="flex items-center gap-2 text-xl font-bold text-gray-900">
                  <QrCode className="w-6 h-6 text-[#DE4060]" />
                  Scan QR Code to Register
                </div>
                <p className="text-gray-600 font-medium">
                  Please scan the QR code provided in the flyer above to register for the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default WiePage;