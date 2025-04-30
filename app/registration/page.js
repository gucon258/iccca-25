import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">Registration Rates</h1>
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg overflow-hidden">
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
              <td className="p-3 border">INR 9,500</td>
              <td className="p-3 border">INR 11,800</td>
              <td className="p-3 border">INR 11,800</td>
              <td className="p-3 border">INR 12,980</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Indian Student Attendee (Non-Author)</td>
              <td className="p-3 border">INR 4,130</td>
              <td className="p-3 border">INR 5,310</td>
              <td className="p-3 border">INR 5,310</td>
              <td className="p-3 border">INR 6,490</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Indian Professional Attendee (Non-Author)</td>
              <td className="p-3 border">INR 6,490</td>
              <td className="p-3 border">INR 7,670</td>
              <td className="p-3 border">INR 7,670</td>
              <td className="p-3 border">INR 8,260</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Tutorial only (Indian Student)</td>
              <td className="p-3 border">INR 500</td>
              <td className="p-3 border">INR 750</td>
              <td className="p-3 border">INR 750</td>
              <td className="p-3 border">INR 1,000</td>
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
              <td className="p-3 border">$150</td>
              <td className="p-3 border">$200</td>
              <td className="p-3 border">$200</td>
              <td className="p-3 border">$225</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Foreign Professional Attendee (Additional Page)</td>
              <td className="p-3 border">$15 per page</td>
              <td className="p-3 border">$15 per page</td>
              <td className="p-3 border">$15 per page</td>
              <td className="p-3 border">$15 per page</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Indian Professional Author/Attendee</td>
              <td className="p-3 border">INR 1,000 per page</td>
              <td className="p-3 border">INR 1,000 per page</td>
              <td className="p-3 border">INR 1,000 per page</td>
              <td className="p-3 border">INR 1,000 per page</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Foreign Author Attendee (Non-Author)</td>
              <td className="p-3 border">$200</td>
              <td className="p-3 border">$250</td>
              <td className="p-3 border">$250</td>
              <td className="p-3 border">$300</td>
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
        <div className="p-3">
          <p className="text-red-600 text-sm text-center mb-2">
            * All rates are inclusive of GST 18%
          </p>
          <p className="text-blue-600 font-medium text-center">
            One full author registration can register up to 2 pages
          </p>
        </div>
      </div>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg mt-6 overflow-hidden">
        <h2 className="text-lg font-semibold text-orange-600 p-4 bg-orange-50">Account Details</h2>
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
  );
}

export default page;
