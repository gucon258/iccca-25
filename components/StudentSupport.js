import React from 'react';

const StudentSupport = () => {
  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-md max-w-[90%] mx-auto my-10 bg-gradient-to-r from-[#024CAD] to-[#0CC1E0] text-white">
      <h2 className="text-2xl font-bold mb-4">Student Support</h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <span className="text-yellow-400 mr-2">✓</span>
          <p>More than 25% fee relaxation in registration fee for IEEE Student/Graduate Student members</p>
        </div>
        <div className="flex items-start">
          <span className="text-yellow-400 mr-2">✓</span>
          <p>Some travel assistance will be tried to arrange for IEEE Student/Graduate Student members from registration fee/External funding/Organizational funding</p>
        </div>
      </div>
    </div>
  );
};

export default StudentSupport; 