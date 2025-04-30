import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Page() {
  return (
    <MaxWidthWrapper className="py-20">
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Computer Society Events
        </h1>
        <div className="w-24 h-1 bg-accent mb-8 rounded-full"></div>

        <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark mb-4">
            Coming Soon
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-[#DE4060] via-[#A73E9C] to-[#438ACC] rounded-full"></div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
