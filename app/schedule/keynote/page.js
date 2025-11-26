'use client';

import React, { useState } from "react";

const ConferenceSchedule = () => {
  const [activeDay, setActiveDay] = useState("day1");

  // Day 1 Schedule - Friday, 28th November, 2025 (Inauguration Ceremony)
  const day1Schedule = [
    { no: 1, event: "Invocation & Lamp Lighting Ceremony - Maa Saraswati Vandana", time: "09:30 AM" },
    { no: 2, event: "Inviting Dignitaries onto the Dais", time: "09:35 AM" },
    { no: 3, event: "Felicitation with Bouquets & Shawls", time: "09:40 AM" },
    { no: 4, event: "Welcome Address & Conference Overview: Dr. Avadhesh Kumar, PVC, Galgotias University, India", time: "09:50 AM" },
    { no: 5, event: "Address by: Dr. Dhruv Galgotia, CEO, Galgotias University, India", time: "09:55 AM" },
    { no: 6, event: "Address by Chief Guest: Dr. Mohammad Rihan, Director- NISE, Gurugram/ Chair Elect, IEEE UP Section", time: "10:00 AM" },
    { no: 7, event: "Address by Guest of Honour: Dr. Bijaya Ketan Panigrahi, Professor, IIT Delhi/ IEEE Fellow", time: "10:05 AM" },
    { no: 8, event: "Release of Proceedings / Souvenir", time: "10:10 AM" },
    { no: 9, event: "Address by Guest of Honour: Prof. Asheesh Kumar, MNNIT, Prayagraj, India", time: "10:15 AM" },
    { no: 10, event: "Address by Guest of Honour: Dr. Rajeev Kumar Singh, IIT BHU (Secretary, IEEE Uttar Pradesh Section)", time: "10:20 AM" },
    { no: 11, event: "Address by Guest of Honour: Sandeep Jain, Deputy Secretary(GOV of India) (Ministry of Education Department of Higher Education)", time: "10:25 AM" },
    { no: 12, event: "Address by Guest of Honour: Dr. Harivardhagini Subhadra, WIE Member, IEEE", time: "10:30 AM" }
  ];

  // Day 2 Schedule - Saturday, 29th November, 2025 (Keynote Schedule)
  const day2Schedule = [
    { no: 1, event: "Keynote Address: Prof. Ayman EL-Refaie, IAS President 2025-2026", time: "10:35 AM" },
    { no: 2, event: "Keynote Address: Prof. Hironori Washizaki, IEEE Computer Society 2025 President", time: "10:50 AM" },
    { no: 3, event: "Keynote Address: Dr. Harivardhagini Subhadra, WIE Member, IEEE", time: "12:35 PM" },
    { no: 4, event: "Lunch", time: "01:00 PM", highlight: true },
    { no: 5, event: "Keynote Address: Prof. Brij B. Gupta, Director, ICCRI, Asia University, Taiwan", time: "02:30 PM" },
    { no: 6, event: "Keynote Address: Dr. Rajeev Kumar Singh, IIT BHU (Secretary, IEEE Uttar Pradesh Section)", time: "02:55 PM" },
    { no: 7, event: "Keynote Address: Dr. J. Ramkumar, Dean (Planning) - IIT Kanpur/ IEEE Fellow", time: "03:10 PM" },
    { no: 8, event: "High Tea", time: "03:25 PM", highlight: true }
  ];

  // Day 3 Schedule - Sunday, 30th November, 2025 (Valedictory Ceremony)
  const day3Schedule = [
    { no: 1, event: "Keynote Address: Dr. Supavadee Aramvith, Chulalongkorn University", time: "01:00 PM" },
    { no: 2, event: "Welcoming Dignitaries onto the Dais", time: "03:00 PM" },
    { no: 3, event: "Felicitation with Bouquets & Shawls", time: "03:05 PM" },
    { no: 4, event: "Address by: Dr. Avadhesh Kumar, PVC, Galgotias University, India", time: "03:15 PM" },
    { no: 5, event: "Address by Chief Guest: Dr. Sri Niwas Singh, Director, ABV-IIITM Gwalior / IEEE Fellow", time: "03:20 PM" },
    { no: 6, event: "Address by Guest of Honour: Dr. Bijaya Ketan Panigrahi, Professor, IIT Delhi/ IEEE Fellow", time: "03:25 PM" },
    { no: 7, event: "Address by Guest of Honour: Dr. Vinod Kumar, Director, Promotion Directorate (IN-SPACe)", time: "03:25 PM" },
    { no: 8, event: "Address by Guest of Honour: Dr. Vinay Kumar, Scientist-F, SIRO, DSIR, India", time: "03:35 PM" },
    { no: 9, event: "Address by Guest of Honour: Dr. Prabhakar Tiwari, MMMUT, Gorakhpur, India", time: "03:40 PM" },
    { no: 10, event: "Address by Guest of Honour: Mr. Varun Kakar, Joint Secreatary, IEEE UP Section", time: "03:45 PM" },
    { no: 11, event: "Presidential Address by Dr. K. M. Babu, Hon'ble Vice Chancellor", time: "03:50 PM" },
    { no: 12, event: "Token of Honour to Dignitaries (Memento Presentation)", time: "03:55 PM" },
    { no: 13, event: "Report Reading: Dr. Aanjey Mani Tripathi, Conference Chair", time: "04:00 PM" },
    { no: 14, event: "Certificate Distribution", time: "04:05 PM" },
    { no: 15, event: "Vote of Thanks: Dr. Vineeta Khemchandani, Dean, SCAT, Galgotias University, India", time: "04:20 PM" },
    { no: 16, event: "National Anthem", time: "04:25 PM" },
    { no: 17, event: "High Tea", time: "04:26 PM", highlight: true }
  ];

  const renderSchedule = () => {
    let scheduleData;
    let dayTitle;
    let dayDate;

    if (activeDay === "day1") {
      scheduleData = day1Schedule;
      dayTitle = "Day-1 (Inauguration Ceremony)";
      dayDate = "Friday, 28th November, 2025";
    } else if (activeDay === "day2") {
      scheduleData = day2Schedule;
      dayTitle = "Day-2 (Keynote Schedule)";
      dayDate = "Saturday, 29th November, 2025";
    } else {
      scheduleData = day3Schedule;
      dayTitle = "Day-3 (Valedictory Ceremony)";
      dayDate = "Sunday, 30th November, 2025";
    }

    return (
      <>
        <div className="text-center">
          <h3 className="text-lg font-bold text-blue-700 underline mt-3">{dayTitle}</h3>
          <p className="text-md font-semibold text-gray-600">{dayDate}</p>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">S. No.</th>
                <th className="border border-gray-300 px-4 py-2">Program</th>
                <th className="border border-gray-300 px-4 py-2 whitespace-nowrap">Time</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((item, index) => (
                <tr key={index} className={`${item.highlight ? "bg-yellow-100 font-semibold" : index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.no}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.event}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center whitespace-nowrap">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">2025 7th International Conference on Computing, Communication and Automation (ICCCA)</h2>
        <h3 className="text-xl font-bold text-blue-600">GALGOTIAS UNIVERSITY</h3>
        <p className="text-md font-semibold text-gray-700 mt-2">IEEE Conf. Record No: #66364</p>
        <p className="text-md font-semibold text-red-600">Venue: Vivekanand Auditorium, C Block, Galgotias University</p>
        <p className="text-sm font-medium text-gray-500 mt-2 italic">All timings are in IST (GMT+5:30)</p>
      </div>

      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setActiveDay("day1")}
          className={`px-4 py-2 rounded-md ${activeDay === "day1" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          Day 1 (Nov 28)
        </button>
        <button
          onClick={() => setActiveDay("day2")}
          className={`px-4 py-2 rounded-md ${activeDay === "day2" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          Day 2 (Nov 29)
        </button>
        <button
          onClick={() => setActiveDay("day3")}
          className={`px-4 py-2 rounded-md ${activeDay === "day3" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          Day 3 (Nov 30)
        </button>
      </div>

      {renderSchedule()}
    </div>
  );
};

export default ConferenceSchedule;
