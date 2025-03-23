import { cards } from "@/utils/slideArray";


export default function TeamPage() {
    const roles = {
      "Chief Patron": ["Shri Suneel Galgotia"],
      "Patrons": [
        "Dr Dhruv Galgotia",
        "Prof.(Dr.) S.N. Singh",
        "Prof.(Dr.) M.K. Babu Kayala",
        "Ms. Aradhana Galgotia",
      ],
    };
  
  
    return (
      <div className="bg-gray-100 min-h-screen py-10 px-4">
        <h1 className="text-center text-gray-900 text-4xl font-bold mb-8">Our Team</h1>
        {Object.entries(roles).map(([role, names]) => (
          <div key={role} className="mb-8">
            <h2 className="text-2xl text-gray-800 font-bold text-center mb-4">{role}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {names.map((name) => {
                const chair = cards.find((chair) => chair.name === name);
                return (
                  chair && (
                    <div
                      key={name}
                      className="bg-gradient-to-b from-red-600 to-orange-500 text-white shadow-lg rounded-xl p-4 w-72 text-center transform transition duration-300 hover:scale-105"
                    >
                      {chair.imgSrc ? (
                        <img
                          src={chair.imgSrc}
                          alt={name}
                          className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-md"
                        />
                      ) : (
                        <div className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-md bg-gray-300 flex items-center justify-center text-2xl font-bold">
                          {name.charAt(0)}
                        </div>
                      )}
                      <h2 className="text-xl font-bold mt-4">{name}</h2>
                      <p className="font-medium">{chair.position}</p>
                      <p className="text-sm">{chair.organization}</p>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }
  