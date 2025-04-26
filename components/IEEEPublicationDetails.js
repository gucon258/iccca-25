export default function IEEEPublicationDetails() {
    return (
      <div className="p-6 border border-gray-300 rounded-lg shadow-md max-w-[90%] mx-auto my-10 bg-gray-50">
        <h2 className="text-red-600 text-xl font-bold border-b-2 border-gray-300 pb-2 mb-4">
          IEEE PUBLICATION DETAILS
        </h2>
        <p className="text-gray-700 mb-4">
          All the accepted and presented papers will be published in the form of e-proceedings and will be submitted to IEEE Xplore Digital Library (indexed in SCOPUS, Google Scholar and other major indexing).
        </p>
        <p className="text-gray-700 mb-4">
          All presented papers will be considered for further review and publication in IEEE Transactions on Industry Applications and IEEE Industry Applications Magazine.
        </p>
        <div className="flex items-center gap-4">
          <img
            src="/Sponser Logos/ieeeXplore.png"
            alt="IEEE Xplore Logo"
            className="h-12"
          />
          {/* <img
            src="/Sponser Logos/ieeeTransactions.png"
            alt="IEEE Transactions Logo"
            className="h-12"
          /> */}
        </div>
      </div>
    );
  } 