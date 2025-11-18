"use client";

import React from "react";

const OfflineSchedule = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/schedules/offline-schedule.pdf"
        className="w-full h-full border-0"
        title="Offline Technical Session Schedule"
        style={{ minHeight: "100vh" }}
      />
    </div>
  );
};

export default OfflineSchedule;
