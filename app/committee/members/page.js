import { cards } from "@/utils/slideArray";


export default function TeamPage() {
  const roles = {
    "Chief Patron": [
      "Shri Suneel Galgotia"
    ],
    "Patrons": [
      "Dr. Dhruv Galgotia",
      "Ms. Aradhana Galgotia",
      "Prof. (Dr.) S.N.Singh",
      "Prof. (Dr.) K.M. Babu"
    ],
    "Conference General Chair": [
      "Prof. (Dr.) Avadhesh Kumar",
      "Prof. (Dr.) Yogesh S. Chauhan",
      "Prof. (Dr.) Akshay Rathore",
      "Prof. (Dr.) Ayman EL-Refaie"
    ],
    "Conference Chair": [
      "Prof. (Dr.) Aanjey M. Tripathi",
      "Prof. (Dr.) Kuldeep S. Kaswan"
    ],
    "Conference Organizing Chair": [
      "Prof. (Dr.) Harish Kumar GR",
      "Prof. (Dr.) Abdul Aleem",
      "Prof. (Dr.) Gaurav Agarwal",
      "Prof. Manish Kumar",
      "Prof. Arpesh Singh"
    ],
    "Conference Co-Organizing Chairs": [
      "Prof. (Dr.) Sunil Bharti"
    ],
    "Technical Program Committee Chairs": [
      "Prof. (Dr.) Vineeta Khemchandani",
      "Prof. (Dr.) Sudhir Kr. Singh",
      "Prof. (Dr.) Deepak Soni",
      "Prof. (Dr.) Sonia Setia"
    ],
    "Publication Chairs": [
      "Prof. (Dr.) Shrddha Sagar"
    ],
    "Publicity Chairs": [
      "Prof. (Dr.) Meenakshi Sharma",
      "Prof. (Dr.) Ravi Sharma"
    ],
    "Conference Secretaries": [
      "Prof. (Dr.) Manish Raj",
      "Prof. (Dr.) Ajeet Singh",
      "Prof. (Dr.) Saurabh Singh",
      "Prof. (Dr.) K. K. Agrawal",
      "Prof. (Dr.) Shachi Mall",
      "Prof. Arunendra Mani Tripathi"
    ],
    "Event Organising Chair": [
      "Prof. (Dr.) Pooja Singh",
      "Prof. Pragya Tewari"
    ],
    "Conference Technical Co-Chairs": [
      "Prof. (Dr.) Anupam Baliyan",
      "Prof. (Dr.) Trapti Shrivastava",
      "Prof. (Dr.) Shipra Shukla",
      "Prof. Jitendra"
    ],
    "Publication Co-Chairs": [
      "Prof. (Dr.) Shashi Bhusan",
      "Prof. (Dr.) Meenakshi Awasthi",
      "Prof. (Dr.) Vipin Rai"
    ],
    "International Advisory Chairs": [
      "Prof. (Dr.) Akshay Rathore",
      "Prof. (Dr.) Sanjeev K. Singh",
      "Prof. (Dr.) Jagjit Singh Dhatterwal"
    ],
    "National Advisory Chair": [
      "Prof. (Dr.) Geeta Sikka",
      "Prof. (Dr.) Abhishek Appaji",
      "Prof. (Dr.) Harivardhagini Subhadra"
    ],
    "Sponsorship & Industry Chairs": [
      "Prof. (Dr.) Avneesh Kumar"
    ],
    "Finance Chairs": [
      "Prof. (Dr.) Ashok K. Yadav"
    ],
    "Transport Chairs": [
      "Prof. (Dr.) Ganesh Kumar",
      "Prof. (Dr.) Dinesh Kumar"
    ],
    "Website & Graphics Chairs": [
      "Mr. Pankaj Lamba",
      "Mr. Gaurang Pant"
    ],
    "Media Chairs": [
      "Prof. (Dr.) Neha Jindal"
    ],
    "Hospitality Chairs": [
      "Prof. (Dr.) Shankar Kumar"
    ]
  };


  return (
    <div className=" min-h-screen py-10 px-4">
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
                      <img
                        src='/reshot-icon-user-ZXFJAEQURK.svg'
                        alt={name}
                        className="w-32 h-32 p-5 mx-auto rounded-full border-4 border-black shadow-md invert"
                      />
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
