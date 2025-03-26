"use client"
import React, { useState } from "react";

const attractions = [
  {
    name: "India Gate",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "India Gate is one of the most iconic landmarks of Delhi, standing tall as a war memorial dedicated to the brave soldiers of the Indian Army who lost their lives in World War I. Designed by Sir Edwin Lutyens, this grand structure was built in 1931 and has since become a symbol of national pride. The 42-meter-high arch is reminiscent of the Arc de Triomphe in Paris and is engraved with the names of thousands of Indian and British soldiers who perished in the war. The monument is surrounded by lush green lawns, making it a popular spot for both tourists and locals. The eternal flame, known as the Amar Jawan Jyoti, burns at the base of the arch to honor the fallen soldiers. The sight of India Gate illuminated at night is truly mesmerizing, drawing visitors from across the country. Whether you visit during the bustling evening hours or in the quiet morning, India Gate remains a timeless tribute to the courage and sacrifice of the Indian armed forces.",
    mapUrl: "https://www.google.com/maps/place/India+Gate"},
    {
      name: "Qutub Minar",
      image: "https://images.unsplash.com/photo-1632426237957-5ea14aae7100?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Qutub Minar is a stunning example of Indo-Islamic architecture and one of Delhi’s most visited tourist attractions. Standing at 73 meters, it is the tallest brick minaret in the world and was built in 1193 by Qutb-ud-din Aibak. The minaret is made of red sandstone and marble, adorned with intricate carvings and inscriptions from the Quran. The surrounding Qutub Complex features several historical structures, including the Iron Pillar, which is famous for its rust-resistant properties, and the Alai Darwaza, a magnificent gateway built by Alauddin Khilji. The Qutub Minar itself is composed of five distinct stories, each marked by a projecting balcony. The first three stories are made of red sandstone, while the fourth and fifth stories are constructed using marble and sandstone. The tower is slightly tilted, but it has withstood centuries of natural calamities and invasions. A visit to Qutub Minar is a journey through time, offering insights into Delhi’s rich history and architectural grandeur.",
      mapUrl: "https://www.google.com/maps/place/Qutub+Minar"
    },
    {
      name: "Red Fort",
      image: "https://images.unsplash.com/photo-1705861144413-f02e38354648?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "The Red Fort, or Lal Qila, is one of the most significant historical structures in India. Built by Mughal Emperor Shah Jahan in 1648, this massive fort served as the main residence of the Mughal emperors for nearly 200 years. It is constructed primarily of red sandstone, giving it its distinct and majestic appearance. The fort is a UNESCO World Heritage Site and is home to several important buildings, including the Diwan-i-Aam (Hall of Public Audience), Diwan-i-Khas (Hall of Private Audience), Rang Mahal (Palace of Colors), and the Moti Masjid (Pearl Mosque). The fort is also the site where the Indian Prime Minister hoists the national flag every year on Independence Day. Walking through its grand gateways, such as the Lahori Gate and Delhi Gate, one can sense the grandeur of the Mughal era. The sound and light show held in the evenings narrates the fascinating history of the fort, making it a must-visit attraction for history lovers.",
      mapUrl: "https://www.google.com/maps/place/Red+Fort"
    },
    {
      name: "Lotus Temple",
      image: "https://images.unsplash.com/photo-1688257609244-3f2a893f19d6?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "The Lotus Temple, a Baháʼí House of Worship, is one of Delhi’s most remarkable architectural wonders. Completed in 1986, this temple is renowned for its stunning lotus-shaped structure, made up of 27 free-standing white marble petals. The temple is open to people of all religions, offering a space for meditation and spiritual reflection. Unlike traditional religious buildings, the Lotus Temple has no idols, altars, or clergy, emphasizing the Baháʼí principles of unity and equality. Visitors are welcomed into the temple’s serene atmosphere, where they can sit in silent contemplation. The lush green gardens surrounding the temple further enhance the peaceful ambiance, making it a favorite retreat for those seeking tranquility amidst the city’s chaos.",
      mapUrl: "https://www.google.com/maps/place/Lotus+Temple"
    },
    {
      name: "Humayun’s Tomb",
      image: "https://images.unsplash.com/photo-1646938691456-a03d01a8276a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Humayun’s Tomb, a UNESCO World Heritage Site, is one of the most magnificent examples of Mughal architecture in India. Built in the 16th century by Empress Bega Begum in memory of her husband, Emperor Humayun, the tomb’s grand design later inspired the construction of the Taj Mahal. The mausoleum is set amidst a Persian-style Charbagh garden, with symmetrical pathways and flowing water channels that create a picturesque setting. The structure itself is made of red sandstone, with intricate white marble detailing that enhances its beauty. Inside, the central chamber houses the emperor’s tomb, along with several other Mughal family members. The complex also includes smaller tombs, mosques, and pavilions, making it a historically and architecturally significant site. A visit to Humayun’s Tomb is like stepping into a chapter of India’s rich history, offering a glimpse into the grandeur of the Mughal dynasty.",
      mapUrl: "https://www.google.com/maps/place/Humayun's+Tomb"
    },
    {
      name: "Taj Mahal",  
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
      description: "The Taj Mahal, a UNESCO World Heritage Site and one of the New Seven Wonders of the World, is the epitome of Mughal architecture and a symbol of eternal love. Built in the 17th century by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this ivory-white marble mausoleum stands majestically on the banks of the Yamuna River in Agra. The Taj Mahal’s symmetrical design, intricate inlay work of semi-precious stones, and towering minarets create a breathtaking sight, especially at sunrise or sunset. The main tomb is surrounded by lush Charbagh gardens, reflecting pools, and a grand gateway, enhancing its ethereal beauty. Inside, the cenotaphs of Shah Jahan and Mumtaz Mahal lie beneath the central dome, adorned with exquisite calligraphy and floral motifs. A masterpiece of craftsmanship and devotion, the Taj Mahal remains India’s most iconic monument, drawing millions of visitors who marvel at its timeless elegance and poignant history.",
      mapUrl: "https://www.google.com/maps/place/Taj+Mahal"
  },
  // ... (other attractions with their respective mapUrls)
];

const ForAuthors = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (mapUrl) => {
    window.open(mapUrl, '_blank');
  };

  return (
    <div className="min-h-screen p-6 text-gray-900">
      <div className="w-full md:max-w-[90%] mx-auto bg-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-center text-red-700">For Authors</h1>
        <p className="text-lg text-gray-600 text-center mt-4">
          Welcome to our guide for authors! Whether you are a writer, blogger, or researcher, exploring the cultural and historical richness of NCR can provide invaluable inspiration.
        </p>
      </div>
      
      <div className="w-full md:max-w-[90%] mx-auto mt-10 bg-gray-50 p-2 md:p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-700">Tourist Attractions</h2>
        <p className="text-lg text-gray-600 text-center mt-4">
          Discover the rich heritage and modern marvels of NCR through these must-visit tourist attractions.
        </p>
        <div className="space-y-12 mt-6">
          {attractions.map((place, index) => (
            <div key={index} className="bg-white p-2 md:p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start gap-6">
              <div 
                className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden cursor-pointer "
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className={`absolute inset-0 w-full h-full  object-cover transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}
                />
                
                {place.mapUrl && (
                  <div className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    <iframe
                      title={`${place.name} Location`}
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(place.name)}&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                )}
              </div>

              <div className="md:w-2/3 flex flex-col">
                <h3 className="text-2xl font-semibold text-red-600">{place.name}</h3>
                <p className="text-lg text-gray-700 mt-4 text-justify">{place.description}</p>
                
                {/* View Location Button */}
                <div className="mt-10 flex justify-center">
                  <button 
                    onClick={() => handleClick(place.mapUrl)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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

export default ForAuthors;