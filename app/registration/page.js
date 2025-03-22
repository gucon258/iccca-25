import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">Registrations</h1>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full border border-orange-400">
          <thead>
            <tr className="bg-orange-600 text-white">
              <th className="p-3 border">Registration Type</th>
              <th className="p-3 border">Country of Registration</th>
              <th className="p-3 border">IEEE Member</th>
              <th className="p-3 border">Non-IEEE Member</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="bg-orange-100">
              <td className="p-3 border" rowSpan="2">Regular Author</td>
              <td className="p-3 border">Indian</td>
              <td className="p-3 border">7,000 INR</td>
              <td className="p-3 border">9,000 INR</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Foreigner</td>
              <td className="p-3 border">350 USD</td>
              <td className="p-3 border">400 USD</td>
            </tr>
            <tr className="bg-orange-200">
              <td className="p-3 border" rowSpan="2">Student Author</td>
              <td className="p-3 border">Indian</td>
              <td className="p-3 border">5,000 INR</td>
              <td className="p-3 border">6,000 INR</td>
            </tr>
            <tr className="bg-orange-200">
              <td className="p-3 border">Foreigner</td>
              <td className="p-3 border">200 USD</td>
              <td className="p-3 border">300 USD</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border" rowSpan="2">Industry</td>
              <td className="p-3 border">Indian</td>
              <td className="p-3 border">7,000 INR</td>
              <td className="p-3 border">9,000 INR</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="p-3 border">Foreigner</td>
              <td className="p-3 border">350 USD</td>
              <td className="p-3 border">400 USD</td>
            </tr>
            <tr className="bg-orange-200">
              <td className="p-3 border" rowSpan="2">Attendee</td>
              <td className="p-3 border">Indian</td>
              <td className="p-3 border">3,000 INR</td>
              <td className="p-3 border">3,500 INR</td>
            </tr>
            <tr className="bg-orange-200">
              <td className="p-3 border">Foreigner</td>
              <td className="p-3 border">50 USD</td>
              <td className="p-3 border">100 USD</td>
            </tr>
          </tbody>
        </table>
        <p className="text-red-600 text-sm p-3 text-center">
          * Extra page charge of ₹1000/- INR per page for Indian authors and $50 per page for international authors will be chargeable during the registration process.
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
      <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCSAI2025" target="_blank">
      <button className="bg-gradient-to-r from-[#f86683] via-[#A73E9C] to-[#56adff] 
          hover:bg-gradient-to-bl text-white font-semibold text-lg rounded-xl px-4 py-2 transition duration-100 my-6">
          Submit your paper
        </button>
        </a>
    </div>
  )
}

export default page
