"use client"
import React from "react";

const Schedule = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/schedules/Technical_Session_Online.pdf"
        className="w-full h-full border-0"
        title="Online Technical Session Schedule"
        style={{ minHeight: "100vh" }}
      />
    </div>
  );
};

export default Schedule;
