'use client';

import React, { useState } from "react";

const ConferenceSchedule = () => {
  const [activeTab, setActiveTab] = useState("inauguration");

  // Inauguration Ceremony - Saturday, 29th November, 2025
  const inaugurationSchedule = [
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
    { no: 12, event: "Address by Guest of Honour: Dr. Harivardhagini Subhadra, WIE Member, IEEE", time: "10:30 AM" },
    { no: 13, event: "Keynote Address by Guest of Honour: Prof. Ayman EL-Refaie, IAS President 2025-2026", time: "10:35 AM" },
    { no: 14, event: "Keynote Address by Guest of Honour: Prof. Hironori Washizaki, IEEE Computer Society 2025 President", time: "10:50 AM" },
    { no: 15, event: "MOU Ceremony: Galgotias University & ICCRI, Asia University, Taiwan", time: "11:05 AM" },
    { no: 16, event: "Address by Guest of Honour: Prof. Brij B. Gupta, Director, ICCRI, Asia University, Taiwan", time: "11:10 AM" },
    { no: 17, event: "Presidential Address by Dr. K. M. Babu, Hon'ble Vice Chancellor", time: "11:20 AM" },
    { no: 18, event: "Token of Honour to Dignitaries (Memento Presentation)", time: "11:25 AM" },
    { no: 19, event: "Vote of Thanks: Prof.(Dr.) Harish Kumar GR, Dean, SCSE, Galgotias University, India", time: "11:35 AM" },
    { no: 20, event: "National Anthem", time: "11:40 AM" },
    { no: 21, event: "Photo Session", time: "11:41 AM" },
    { no: 22, event: "High Tea", time: "11:50 AM" },
    { no: 23, event: "Campus Tour & Technical Sessions Visit", time: "12:30 PM" }
  ];

  // Keynote Schedule
  const keynoteSchedule = [
    { isHeader: true, title: "Day 2: (Saturday, 29th November, 2025)" },
    { no: 1, event: "Keynote Address: Prof. Ayman EL-Refaie, IAS President 2025-2026", time: "10:35 AM" },
    { no: 2, event: "Keynote Address: Prof. Hironori Washizaki, IEEE Computer Society 2025 President", time: "10:50 AM" },
    { no: 3, event: "Keynote Address: Dr. Harivardhagini Subhadra, WIE Member, IEEE", time: "12:35 PM" },
    { no: 4, event: "Lunch", time: "01:00 PM", highlight: true },
    { no: 5, event: "Keynote Address: Prof. Brij B. Gupta, Director, ICCRI, Asia University, Taiwan", time: "02:30 PM" },
    { no: 6, event: "Keynote Address: Dr. Rajeev Kumar Singh, IIT BHU (Secretary, IEEE Uttar Pradesh Section)", time: "02:55 PM" },
    { no: 7, event: "Keynote Address: Dr. J. Ramkumar, Dean (Planning) - IIT Kanpur/ IEEE Fellow", time: "03:10 PM" },
    { no: 8, event: "High Tea", time: "03:25 PM", highlight: true },
    { isHeader: true, title: "Day 3: (Sunday, 30th November, 2025)" },
    { no: 1, event: "Keynote Address: Dr. Supavadee Aramvith, Chulalongkorn University", time: "01:00 PM" }
  ];

  // Valedictory Ceremony - Sunday, 30th November, 2025
  const valedictorySchedule = [
    { no: 1, event: "Welcoming Dignitaries onto the Dais", time: "03:00 PM" },
    { no: 2, event: "Felicitation with Bouquets & Shawls", time: "03:05 PM" },
    { no: 3, event: "Address by: Dr. Avadhesh Kumar, PVC, Galgotias University, India", time: "03:15 PM" },
    { no: 4, event: "Address by Chief Guest: Dr. Sri Niwas Singh, Director, ABV-IIITM Gwalior / IEEE Fellow", time: "03:20 PM" },
    { no: 5, event: "Address by Guest of Honour: Dr. Bijaya Ketan Panigrahi, Professor, IIT Delhi/ IEEE Fellow", time: "03:25 PM" },
    { no: 6, event: "Address by Guest of Honour: Dr. Vinod Kumar, Director, Promotion Directorate (IN-SPACe)", time: "03:25 PM" },
    { no: 7, event: "Address by Guest of Honour: Dr. Vinay Kumar, Scientist-F, SIRO, DSIR, India", time: "03:35 PM" },
    { no: 8, event: "Address by Guest of Honour: Dr. Prabhakar Tiwari, MMMUT, Gorakhpur, India", time: "03:40 PM" },
    { no: 9, event: "Address by Guest of Honour: Mr. Varun Kakar, Joint Secreatary, IEEE UP Section", time: "03:45 PM" },
    { no: 10, event: "Presidential Address by Dr. K. M. Babu, Hon'ble Vice Chancellor", time: "03:50 PM" },
    { no: 11, event: "Token of Honour to Dignitaries (Memento Presentation)", time: "03:55 PM" },
    { no: 12, event: "Report Reading: Dr. Aanjey Mani Tripathi, Conference Chair", time: "04:00 PM" },
    { no: 13, event: "Certificate Distribution", time: "04:05 PM" },
    { no: 14, event: "Vote of Thanks: Dr. Vineeta Khemchandani, Dean, SCAT, Galgotias University, India", time: "04:20 PM" },
    { no: 15, event: "National Anthem", time: "04:25 PM" },
    { no: 16, event: "High Tea", time: "04:26 PM", highlight: true }
  ];

  const renderSchedule = () => {
    let scheduleData;
    let title;
    let date;

    if (activeTab === "inauguration") {
      scheduleData = inaugurationSchedule;
      title = "Inauguration Ceremony";
      date = "Saturday, 29th November, 2025";
    } else if (activeTab === "keynote") {
      scheduleData = keynoteSchedule;
      title = "Keynote Schedule";
      date = ""; // Date is handled within the table for this tab
    } else {
      scheduleData = valedictorySchedule;
      title = "Valedictory Ceremony";
      date = "Sunday, 30th November, 2025";
    }

    return (
      <>
        <div className="text-center">
          <h3 className="text-lg font-bold text-blue-700 underline mt-3">{title}</h3>
          {date && <p className="text-md font-semibold text-gray-600">{date}</p>}
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
              {scheduleData.map((item, index) => {
                if (item.isHeader) {
                  return (
                    <tr key={index} className="bg-blue-100">
                      <td colSpan="3" className="border border-gray-300 px-4 py-2 text-center font-bold text-lg text-blue-800">
                        {item.title}
                      </td>
                    </tr>
                  );
                }
                return (
                  <tr key={index} className={`${item.highlight ? "bg-yellow-100 font-semibold" : index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.no}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.event}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center whitespace-nowrap">{item.time}</td>
                  </tr>
                );
              })}
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

      <div className="flex flex-wrap justify-center mb-6 gap-4">
        <button
          onClick={() => setActiveTab("inauguration")}
          className={`px-4 py-2 rounded-md transition-colors duration-200 ${activeTab === "inauguration" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-800"}`}
        >
          Inauguration Ceremony
        </button>
        <button
          onClick={() => setActiveTab("keynote")}
          className={`px-4 py-2 rounded-md transition-colors duration-200 ${activeTab === "keynote" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-800"}`}
        >
          Keynote Schedule
        </button>
        <button
          onClick={() => setActiveTab("valedictory")}
          className={`px-4 py-2 rounded-md transition-colors duration-200 ${activeTab === "valedictory" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-800"}`}
        >
          Valedictory Ceremony
        </button>
      </div>

      {renderSchedule()}
    </div>
  );
};

export default ConferenceSchedule;
