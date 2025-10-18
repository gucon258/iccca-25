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
                <td className="p-3 border">Foreign Student Author</td>
                <td className="p-3 border">$150</td>
                <td className="p-3 border">$200</td>
                <td className="p-3 border">$200</td>
                <td className="p-3 border">$250</td>
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
                <td className="p-3 border">Foreign Professional Attendee (Non-Author)</td>
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
            An author may register for a maximum of two papers, with the registration fee paid separately for each paper.
          </p>
          <p className="text-red-600 text-sm text-center mt-2">
            * Extra page charge of ₹ 1000/- INR per page Indian author and $ 15 per page International author will be chargeable to the author's during registration process.
          </p>
        </div>
      </div>

      {/* Registration Closed Notice */}
      <div className="w-full max-w-md mt-8 flex flex-col items-center">
        <div className="bg-red-100 border-2 border-red-500 rounded-lg p-6 w-full text-center">
          <svg className="w-12 h-12 mx-auto mb-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
          <h2 className="text-2xl font-bold text-red-700 mb-2">Registrations are Closed</h2>
          <p className="text-red-600">The registration period has ended. Thank you for your interest.</p>
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