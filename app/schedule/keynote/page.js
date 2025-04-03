import React from "react";

const ConferenceSchedule = () => {
  const schedule = [
    { no: 1, event: "Visit, Observation & Examination of Events conducted by Galgotias University IEEE Student Chapter and IAS Society", time: "9:30 A.M." },
    { no: 2, event: "Visit, Observation & Examination of Events conducted by Galgotias University IEEE Student Chapter and CS Society", time: "10:00 A.M." },
    { no: 3, event: "Visit, Observation & Examination of Events conducted by Galgotias University IEEE Student Chapter and WIE Affinity group", time: "10:25 A.M." },
    { no: "", event: "Reach Inauguration venue 10:50 A.M.", time: "", highlight: true },
    { no: 4, event: "Introduction", time: "11:00 A.M." },
    { no: 5, event: "Lamp lighting - Maa Saraswati Vandana", time: "11:05 A.M." },
    { no: 6, event: "Inviting Dignitaries onto the Dais", time: "11:10 A.M." },
    { no: 7, event: "Bouquet Presentation to Dignitaries", time: "11:15 A.M." },
    { no: 8, event: "Welcome Address by - Dr. Nitin Gaur, Registrar, GU", time: "11:20 A.M." },
    { no: 9, event: "Conference Theme by - Prof. (Dr.) Avadhesh Kumar, PVC, GU, Greater Noida, Conference Chair- ICCSAI 2025", time: "11:30 A.M." },
    { no: 10, event: "Address by - Dr. Mohammad Rihan, Chair Elect, IEEE UP Section, Director, NISE, Gurugram", time: "11:35 A.M." },
    { no: 11, event: "Address by - Prof. (Dr.) B. K. Panigrahi, (IEEE Fellow) Professor, EE Department, IIT Delhi, India", time: "11:45 A.M." },
    { no: 12, event: "Address by - Prof. (Dr.) Akshay Kumar Rathore (IEEE Fellow), Professor (Engineering) and Program Leader (Electrical Power Engineering), Singapore Institute of Technology, Singapore", time: "11:55 A.M." },
    { no: 13, event: "Address by - Prof. (Dr.) S.N. Singh, (IEEE Fellow) Director, IIITM Gwalior", time: "12:05 P.M." },
    { no: 14, event: "Release of Conference Souvenir", time: "12:15 P.M." },
    { no: 15, event: "Address by - Prof. (Dr.) Rajeev Srivastava, Director, IIIT Ranchi, India", time: "12:20 P.M." },
    { no: 16, event: "Address by - Prof. (Dr.) Harivardhagini Subhadra, 2025 IEEE WIE COMMITTEE", time: "12:30 P.M." },
    { no: 17, event: "Address by - Prof. (Dr.) J. Ramkumar, Dean (Planning), IIT Kanpur, India", time: "12:35 P.M." },
    { no: 18, event: "Presidential Address by- Prof. (Dr.) K. M. Babu, Vice Chancellor GU, Greater Noida", time: "12:40 P.M." },
    { no: 19, event: "Token of Honour to Dignitaries (Memento Presentation)", time: "12:45 P.M." },
    { no: 20, event: "Vote of Thanks", time: "12:50 P.M." },
    { no: "", event: "Lunch 01:05 P.M. - 01:35 P.M.", time: "", highlight: true },
    { no: 21, event: "Keynote Address by- Prof. (Dr.) Akshay Kumar Rathore, Professor (Engineering) and Program Leader (Electrical Power Engineering). (AI 317)", time: "01:40 P.M." },
    { no: 22, event: "Keynote Address by- Prof. (Dr.) Bijaya Ketan Panigrahi, Professor (Electrical Engineering), IIT Delhi. (AI 317)", time: "2:10 A.M." },
    { no: 23, event: "Keynote Address by - Prof. (Dr.) Anil Kumar Tripathi, Professor, CSE, IIT BHU (AI 317)", time: "02:40 A.M." },
    { no: 24, event: "Keynote Address & WIE Kit distribution by - Prof. (Dr.) Harivardhagini Subhadra, 2025 IEEE WIE COMMITTEE (AI-317)", time: "03:10 P.M." },
    { no: "", event: "Cultural Evening 6 P.M.", time: "", highlight: true }
  ];

  return (
    <div className="p-6 max-w-[90%] mx-auto bg-white shadow-lg rounded-lg">
        <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">2025 3rd International Conference on Communication, Security, and Artificial Intelligence</h2>
        <h3 className="text-lg font-bold text-blue-600">(ICCSAI - 2025)</h3>
        <p className="text-md font-semibold text-gray-700">Conference Record #64074</p>
        <p className="text-md font-semibold text-red-600">Venue: Galgotias University, Greater Noida, U.P., India</p>
        <h3 className="text-lg font-bold text-blue-700 underline mt-3">Inauguration Day</h3>
        <p className="text-md font-semibold text-gray-600">05 April 2025</p>
        <p className="text-sm font-medium text-gray-500 mt-1 italic">All timings are in IST (GMT+5:30)</p>
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">S. No.</th>
              <th className="border border-gray-300 px-4 py-2">Particulars</th>
              <th className="border border-gray-300 px-4 py-2 whitespace-nowrap">Time</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index} className={`${item.highlight ? "bg-yellow-300 font-bold" : index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
                <td className="border border-gray-300 px-4 py-2 text-center">{item.no}</td>
                <td className="border border-gray-300 px-4 py-2">{item.event}</td>
                <td className="border border-gray-300 px-4 py-2 text-center whitespace-nowrap">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConferenceSchedule;
