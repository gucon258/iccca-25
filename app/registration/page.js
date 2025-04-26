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
              <th className="p-3 border" colSpan="2">Early Bird Rates (Upto MAY 20, 2025)</th>
              <th className="p-3 border" colSpan="2">Standard Rates (After MAY 20, 2025)</th>
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
              <td className="p-3 border">INR 11,800</td>
              <td className="p-3 border">INR 14,160</td>
              <td className="p-3 border">INR 14,160</td>
              <td className="p-3 border">INR 16,520</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Indian Student Attendee (Non-Author)</td>
              <td className="p-3 border">INR 5,900</td>
              <td className="p-3 border">INR 7,080</td>
              <td className="p-3 border">INR 7,080</td>
              <td className="p-3 border">INR 8,260</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Indian Professional Attendee (Non-Author)</td>
              <td className="p-3 border">INR 8,260</td>
              <td className="p-3 border">INR 9,440</td>
              <td className="p-3 border">INR 9,440</td>
              <td className="p-3 border">INR 10,620</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Tutorial only (Indian Student)</td>
              <td className="p-3 border">INR 600</td>
              <td className="p-3 border">INR 850</td>
              <td className="p-3 border">INR 850</td>
              <td className="p-3 border">INR 1,200</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Foreign Author (Academia/Industry)</td>
              <td className="p-3 border">$415</td>
              <td className="p-3 border">$475</td>
              <td className="p-3 border">$475</td>
              <td className="p-3 border">$535</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Foreign Student Attendee (Non-Author)</td>
              <td className="p-3 border">$235</td>
              <td className="p-3 border">$265</td>
              <td className="p-3 border">$265</td>
              <td className="p-3 border">$295</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Foreign Author Attendee (Non-Author)</td>
              <td className="p-3 border">$295</td>
              <td className="p-3 border">$355</td>
              <td className="p-3 border">$355</td>
              <td className="p-3 border">$415</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Tutorial only (Foreign Student)</td>
              <td className="p-3 border">$30</td>
              <td className="p-3 border">$45</td>
              <td className="p-3 border">$45</td>
              <td className="p-3 border">$60</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Additional Page Charges (Foreign)</td>
              <td className="p-3 border" colSpan="2">$25 per page</td>
              <td className="p-3 border" colSpan="2">$25 per page</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Additional Page Charges (Indian)</td>
              <td className="p-3 border" colSpan="2">INR 1,000 per page</td>
              <td className="p-3 border" colSpan="2">INR 1,000 per page</td>
            </tr>
          </tbody>
        </table>
        <p className="text-red-600 text-sm p-3 text-center">
          * All rates are inclusive of GST 18%
        </p>
      </div>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg mt-6 p-6 text-gray-700">
        <h2 className="text-lg font-semibold text-orange-600 mb-4">Account Details</h2>
        <p><span className="font-bold">Name of Account:</span> GU Conferences</p>
        <p><span className="font-bold">Account Number:</span> 6717000100025845</p>
        <p><span className="font-bold">IFSC Code:</span> PUNB0671700</p>
        <p><span className="font-bold">Bank Name:</span> Punjab National Bank, Noida</p>
        <p><span className="font-bold">SWIFT Code:</span> PUNBINBBMSN</p>
      </div>
    </div>
  );
}

export default page;
