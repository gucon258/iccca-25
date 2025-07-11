export default function PublicationOpportunity() {
  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-md max-w-[90%] mx-auto my-10">
      <h2 className="text-red-600 text-xl font-bold border-b-2 border-gray-300 pb-2 mb-4">
        PUBLICATION OPPORTUNITY
      </h2>
      <p className="text-gray-700 mb-4">
        All accepted and presented papers will be published as e-proceedings. Papers meeting <strong>IEEE Xplore's</strong> scope and quality standards will be considered for possible inclusion in the <strong>IEEE Xplore Digital Library</strong>, which is indexed in SCOPUS, Google Scholar, and other major databases.
      </p>
      <p className="text-gray-700 mb-4">
        Selected high-quality papers will also be considered for publication in:
      </p>
      <ul className="text-gray-700 mb-4 ml-4">
        <li>• IEEE Transactions on Industry Applications</li>
        <li>• IEEE Industry Applications Magazine</li>
      </ul>
      <div className="flex items-center gap-4">
        <img
          src="/Sponser Logos/ieeeXplore.png"
          alt="IEEE Xplore Logo"
          className="h-12"
        />
        <img
          src="/Sponser Logos/ieeeTransactions.jpg"
          alt="IEEE Transactions Logo"
          className="h-16"
        />
      </div>
    </div>
  );
};
  