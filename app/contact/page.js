"use client";
import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const ContactPage = () => {
  return (
    <MaxWidthWrapper className="py-20">
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Contact Us
        </h1>
        <div className="w-24 h-1 bg-accent mb-8 rounded-full"></div>
        
        <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark mb-4">
            POCs
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-medium text-primary-dark">Prof.(Dr.) Avadhesh Kumar</h3>
              <p className="text-gray-600 mt-1">Galgotias University</p>
            </div>
            
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-medium text-primary-dark">Dr. Aanjey M. Tripathi</h3>
              <p className="text-gray-600 mt-1">Galgotias University</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-primary-dark mb-2">Email</h3>
            <a 
              href="mailto:iccca@galgotiasuniversity.edu.in" 
              className="text-blue-600 hover:underline"
            >
              iccca@galgotiasuniversity.edu.in
            </a>
          </div>
          
          <div className="w-full h-1 bg-gradient-to-r from-[#DE4060] via-[#A73E9C] to-[#438ACC] rounded-full"></div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactPage;