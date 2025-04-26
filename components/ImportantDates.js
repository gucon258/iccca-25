export default function ImportantDates() {
    return (
      <div className="p-6 border border-gray-300 rounded-lg shadow-md max-w-[90%] mx-auto my-10">
        <h2 className="text-red-600 text-xl font-bold border-b-2 border-gray-300 pb-2 mb-4">
          IMPORTANT DATES
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Call for Papers:</span>
            <span className="text-red-600 font-semibold">April 25, 2025</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Last date of Submission:</span>
            <span className="text-red-600 font-semibold">September 17, 2025</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Acceptance Notification:</span>
            <span className="text-red-600 font-semibold">October 07, 2025</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Final Camera-Ready Paper:</span>
            <span className="text-red-600 font-semibold">October 16, 2025</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Registration Deadline:</span>
            <span className="text-red-600 font-semibold">October 20, 2025</span>
          </div>
        </div>
      </div>
    );
  } 