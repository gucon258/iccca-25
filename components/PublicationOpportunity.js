export default function PublicationOpportunity() {
    return (
      <div className="p-6 border border-gray-300 rounded-lg shadow-md max-w-[90%] mx-auto my-10">
        <h2 className="text-red-600 text-xl font-bold border-b-2 border-gray-300 pb-2 mb-4">
          PUBLICATION OPPORTUNITY
        </h2>
        <p className="text-gray-700 mb-4">
          Accepted papers, meeting <strong>IEEE Xplore's</strong> scope and quality standards, will be submitted for
          inclusion in <strong>IEEE Xplore</strong>, ensuring global visibility and recognition for the authors.
        </p>
        <p className="text-gray-700 mb-4">
          All the accepted and presented papers will be published in the form of e-proceedings and will be submitted to IEEE Xplore Digital Library (indexed in SCOPUS, Google Scholar and other major indexing).
        </p>
        <p className="text-gray-700 mb-4">
          All presented papers will be considered for further review and publication in IEEE Transactions on Industry Applications and IEEE Industry Applications Magazine.
        </p>
        <div className="flex items-center">
          <img
            src="/Sponser Logos/ieeeXplore.png"
            alt="IEEE Xplore Logo"
            className="h-12"
          />
        </div>
      </div>
    );
  }
  