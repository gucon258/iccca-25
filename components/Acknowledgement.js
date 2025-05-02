export default function AcknowledgementComponent() {
    return (
      <div className="p-6 border border-gray-300 rounded-lg shadow-md max-w-[90%] mx-auto my-10">
        <h2 className="text-blue-600 text-xl font-bold border-b-2 border-gray-300 pb-2 mb-4">
          ACKNOWLEDGEMENT
        </h2>
        <p className="text-gray-700 mb-4">
          The <a href="https://cmt3.research.microsoft.com/" className="text-blue-500 hover:text-blue-700 underline">Microsoft CMT service</a> was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
        </p>
      </div>
    );
  }