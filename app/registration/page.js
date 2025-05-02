import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">Registration Rates</h1>
      
      {/* Added overflow container for table responsiveness */}
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border border-orange-400">
            <thead>
              <tr className="bg-orange-600 text-white">
                <th className="p-3 border" rowSpan="2">Category</th>
                <th className="p-3 border" colSpan="2">Early Bird Rates (Upto October 15, 2025)</th>
                <th className="p-3 border" colSpan="2">Standard Rates (After October 15, 2025)</th>
              </tr>
              <tr className="bg-orange-600 text-white">
                <th className="p-3 border">IEEE Member</th>
                <th className="p-3 border">Non-IEEE Member</th>
                <th className="p-3 border">IEEE Member</th>
                <th className="p-3 border">Non-IEEE Member</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="bg-orange-100">
                <td className="p-3 border">Indian Author (Academia/Industry)</td>
                <td className="p-3 border">₹9500</td>
                <td className="p-3 border">₹10620</td>
                <td className="p-3 border">₹10620</td>
                <td className="p-3 border">₹11800</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="p-3 border">Indian Student Author</td>
                <td className="p-3 border">₹7080</td>
                <td className="p-3 border">₹8260</td>
                <td className="p-3 border">₹8260</td>
                <td className="p-3 border">₹8850</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="p-3 border">Indian Student Attendee (Non-Author)</td>
                <td className="p-3 border">₹3540</td>
                <td className="p-3 border">₹4130</td>
                <td className="p-3 border">₹4130</td>
                <td className="p-3 border">₹4720</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="p-3 border">Indian Professional Attendee (Non-Author)</td>
                <td className="p-3 border">₹5900</td>
                <td className="p-3 border">₹6490</td>
                <td className="p-3 border">₹6490</td>
                <td className="p-3 border">₹6490</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="p-3 border">Tutorial only (Indian Student)</td>
                <td className="p-3 border">₹500</td>
                <td className="p-3 border">₹750</td>
                <td className="p-3 border">₹750</td>
                <td className="p-3 border">₹1000</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="p-3 border">Foreign Author (Academia/Industry)</td>
                <td className="p-3 border">$350</td>
                <td className="p-3 border">$400</td>
                <td className="p-3 border">$400</td>
                <td className="p-3 border">$450</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="p-3 border">Foreign Student Attendee (Non-Author)</td>
                <td className="p-3 border">$100</td>
                <td className="p-3 border">$150</td>
                <td className="p-3 border">$150</td>
                <td className="p-3 border">$200</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="p-3 border">Foreign Professional Attendee (Additional Page)</td>
                <td className="p-3 border">$15/Page</td>
                <td className="p-3 border">$15/Page</td>
                <td className="p-3 border">$15/Page</td>
                <td className="p-3 border">$15/Page</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="p-3 border">Indian Professional Author/Attendee (Additional Page)</td>
                <td className="p-3 border">₹1000/Page</td>
                <td className="p-3 border">₹1000/Page</td>
                <td className="p-3 border">₹1000/Page</td>
                <td className="p-3 border">₹1000/Page</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="p-3 border">Foreign Author Attendee (Non-Author)</td>
                <td className="p-3 border">$150</td>
                <td className="p-3 border">$200</td>
                <td className="p-3 border">$200</td>
                <td className="p-3 border">$250</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="p-3 border">Tutorial only (Foreign Student)</td>
                <td className="p-3 border">$15</td>
                <td className="p-3 border">$30</td>
                <td className="p-3 border">$30</td>
                <td className="p-3 border">$50</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-3">
          <p className="text-red-600 text-sm text-center mb-2">
            * All rates are inclusive of GST 18%
          </p>
          <p className="text-blue-600 font-medium text-center">
            One full author registration can register up to 2 pages
          </p>
          <p className="text-red-600 text-sm text-center mt-2">
            * Extra page charge of ₹ 1000/- INR per page Indian author and $ 15 per page International author will be chargeable to the author's during registration process.
          </p>
        </div>
      </div>

      {/* Account details section with responsive adjustments */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg mt-6 overflow-hidden">
        <h2 className="text-lg font-semibold text-orange-600 p-4 bg-orange-50">Account Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="p-3 font-bold border-r">Name of Account</td>
                <td className="p-3">GU Conferences</td>
              </tr>
              <tr className="border-b bg-orange-50">
                <td className="p-3 font-bold border-r">Account Number</td>
                <td className="p-3">6717000100025845</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-bold border-r">IFSC Code</td>
                <td className="p-3">PUNB0671700</td>
              </tr>
              <tr className="border-b bg-orange-50">
                <td className="p-3 font-bold border-r">Bank Name</td>
                <td className="p-3">Punjab National Bank, Noida</td>
              </tr>
              <tr>
                <td className="p-3 font-bold border-r">SWIFT Code</td>
                <td className="p-3">PUNBINBBMSN</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Added scroll indicator for mobile users */}
      <div className="md:hidden w-full max-w-6xl mt-4 text-center text-gray-500 text-sm flex items-center justify-center">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <span>Swipe horizontally to view full table</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </div>
    </div>
  );
}

export default page;