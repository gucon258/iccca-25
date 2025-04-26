"use client"
import React, { useState } from "react";

// Example attractions data - replace with your actual data
const attractions = [
  {
    name: "Red Fort",
    description: "A historic fort in Delhi that served as the main residence of the Mughal emperors.",
    image: "https://images.unsplash.com/photo-1705861144413-f02e38354648?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapUrl: "https://goo.gl/maps/Red+Fort"
  },
  {
    name: "Qutub Minar",
    description: "A 73-meter tall minaret which is a UNESCO World Heritage Site in Delhi.",
    image: "https://images.unsplash.com/photo-1632426237957-5ea14aae7100?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapUrl: "https://goo.gl/maps/Qutub+Minar"
  },
  {
    name: "India Gate",
    description: "A 73-meter tall minaret which is a UNESCO World Heritage Site in Delhi.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    mapUrl: "https://goo.gl/maps/India+Gate"
  },{
    name: "Rishikesh",
    description: "A spiritual city known as the 'Yoga Capital of the World', located in the foothills of the Himalayas along the Ganges River.",
    image: "/places/rishi.jpg",
    mapUrl: "https://goo.gl/maps/Rishikesh"
  },
  {
    name: "Haridwar",
    description: "One of the seven holiest places in Hinduism, famous for the Ganga Aarti at Har Ki Pauri ghat where devotees float diyas on the Ganges.",
    image: "/places/haridwar.jpg",
    mapUrl: "https://goo.gl/maps/Haridwar"
  },
  {
    name: "Taj Mahal",
    description: "An iconic ivory-white marble mausoleum in Agra, built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    mapUrl: "https://goo.gl/maps/TajMahal"
  }
];

const TouristAttractions = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (mapUrl) => {
    window.open(mapUrl, '_blank');
  };

  return (
    <div className="min-h-screen text-gray-900">
      <div className="w-full md:max-w-[90%] mx-auto bg-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-center text-red-700">Tourist Attractions</h1>
        <p className="text-lg text-gray-600 text-center mt-4">
          Discover the rich heritage and modern marvels of NCR through these must-visit tourist attractions.
        </p>
      </div>

      <div className="w-full md:max-w-[90%] mx-auto mt-10 bg-gray-50 p-2 md:p-8 rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {attractions.map((place, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div 
                className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}
                />
                
                {place.mapUrl && (
                  <div className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    <iframe
                      title={`${place.name} Location`}
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(place.name)}&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-grow mt-4">
                <h3 className="text-xl font-semibold text-red-600">{place.name}</h3>
                <p className="text-gray-700 mt-2 text-justify flex-grow">{place.description}</p>
                
                <div className="mt-4 flex justify-center">
                  <button 
                    onClick={() => handleClick(place.mapUrl)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full"
                  >
                    View Location
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TouristAttractions;