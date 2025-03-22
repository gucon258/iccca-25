import React from 'react'

const Page = () => {
  return (
    <div className="p-4">
      <div className="max-w-[90%] mx-auto p-6 text-center">
        <h3 className="text-red-600 text-xl md:text-2xl font-semibold">Conference Guidelines</h3>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">Author's Guidelines</h1>
        <hr className="w-48 md:w-64 border-t-2 border-red-600 mx-auto my-2" />
        <p className="text-gray-700 mt-4 text-lg md:text-xl">
          Authors are invited to submit original, high-quality, and previously unpublished research articles. Submissions must not be under review by any other publication or conference. All manuscripts should be submitted electronically via Microsoft CMT in strict adherence to the IEEE standard two-column conference template, which can be accessed through the provided link. Each manuscript is limited to a maximum of six (6) pages, including figures, tables, and references. Additional pages may be accommodated with a nominal fee.
        </p>
      </div>

      <div className="max-w-[90%] mx-auto my-6 flex flex-col md:flex-row gap-6">
        {/* Paper Formatting Guidelines */}
        <div className="bg-gradient-to-b from-[#FF3A3A] to-[#FE7448] text-white p-6 md:p-10 flex-1 rounded-lg">
          <h2 className="text-2xl md:text-4xl font-bold flex items-center">
            ● Paper Formatting Guidelines
            <span className="ml-auto cursor-pointer hover:scale-105">⬇</span>
          </h2>
          <ul className="list-decimal pl-6 text-lg font-semibold md:text-2xl mt-5 space-y-2">
            <li>Paper Size: US Letter (8.5" × 11").</li>
            <li>Paper Length: Maximum of 6 pages, including figures, tables, and references. Two additional pages are permitted with a charge of ₹1000 per page (Indian authors) or $50 per page (International authors).</li>
            <li>Formatting: Double-column layout, single-spaced, using 10pt Times New Roman font.</li>
            <li>Margins: Top: 1" (25 mm) on the title page; 0.75" (19 mm) elsewhere. Left, Right, and Bottom margins: 0.75" (19 mm).</li>
            <li>File Format: PDF, with a maximum size of 5MB. All fonts must be embedded.</li>
            <li>No page numbering should be included in the manuscript.</li>
            <li>Use the IEEE MS Word template provided via the link above for proper formatting.</li>
          </ul>
        </div>

        {/* General Instructions */}
        <div className="bg-gray-100 p-6 md:p-10 rounded-lg flex-1">
          <h2 className="text-2xl md:text-4xl font-bold text-red-600 flex items-center">
            ● General Instructions
          </h2>
          <ul className="list-decimal pl-6 text-lg md:text-xl mt-5 text-gray-700 space-y-2">
            <li>Papers violating formatting guidelines may be rejected.</li>
            <li>Submissions must be original, unpublished work not under review elsewhere.</li>
            <li>Simultaneous submissions to other conferences or journals are prohibited.</li>
            <li>All manuscripts must be written in English and prepared as a PDF document.</li>
            <li>Papers should strictly adhere to the IEEE two-column format with 10pt font size.</li>
            <li>The page limit is six (6) pages. An additional two pages are allowed with extra charges as specified.</li>
            <li>All figures, tables, and references must fit within the page limit.</li>
            <li>Papers will be reviewed based on originality, significance, technical quality, and clarity.</li>
            <li>The decision to accept or reject a paper rests with the Technical Program Committee.</li>
            <li>Accepted papers must address reviewers' comments and meet final submission requirements.</li>
            <li>The Conference Chair reserves the right to exclude papers not presented or meeting guidelines from the proceedings.</li>
            <li>All submissions should be made via Microsoft CMT.</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto my-10 flex flex-col md:flex-row items-center drop-shadow-xl bg-gray-200 p-6 md:p-4 rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <img
            src="/logos/iccsai_logo.png"
            alt="ICCSAI Logo"
            className="size-20 md:size-28 rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div className="ml-4 flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            IEEE E-Copyright Process Document
          </h2>
          <p className="text-lg md:text-2xl text-red-600">
            Final Submission with IEEE Xplore®-Compatible PDFs
          </p>
        </div>

        {/* Download Button */}
        <button className="bg-[#FF3A3A] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-lg md:text-2xl font-semibold flex items-center hover:bg-red-600 mt-4 md:mt-0">
          <span className="mr-2">⬇</span> Download Here
        </button>
      </div>

      <div className="max-w-[90%] mx-auto bg-gradient-to-t from-[#FF3A3A] to-[#FE7448] my-6 p-4 md:p-10 text-white shadow-md rounded-lg">
        <ul className="list-disc pl-6 space-y-2 text-lg md:text-2xl">
          <li>Papers of acceptable quality presented at the conference will be submitted to IEEE Xplore for potential inclusion.</li>
          <li>Accepted papers must be presented by at least one author. Authors must complete paid registration to upload the final IEEE-compliant version of their paper.</li>
          <li>Failure to register or present the paper will result in removal from the conference program and proceedings.</li>
          <li>No refunds will be provided for cancellations, but substitutions are allowed before the event.</li>
        </ul>
      </div>
    </div>
  )
}

export default Page;
