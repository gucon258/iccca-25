import React from 'react';
import { FaDownload } from 'react-icons/fa';

const BrochureSection = () => {
  const brochureUrl = '/brochure.pdf';

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold text-gray-800">Conference Brochure</h2>
              <p className="text-gray-600">Download our brochure for conference details</p>
            </div>
            <a
              href={brochureUrl}
              download="ICCCA-2025-Brochure.pdf"
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <FaDownload className="mr-2" />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;
