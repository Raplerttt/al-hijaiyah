import React, { useRef } from 'react';

const Persyaratan = () => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'prev' 
        ? -carouselRef.current.offsetWidth 
        : carouselRef.current.offsetWidth;
      
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Carousel */}
        <div className="relative">
          <div className="carousel flex overflow-x-hidden rounded-lg shadow-lg" ref={carouselRef}>
            <div className="carousel-item flex-shrink-0 w-full">
              <img 
                src="src/assets/kegiatan.jpg" 
                alt="Carousel Image 1"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="carousel-item flex-shrink-0 w-full">
              <img 
                src="src/assets/kegiatan2.jpg" 
                alt="Carousel Image 2"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="carousel-item flex-shrink-0 w-full">
              <img 
                src="https://source.unsplash.com/random/800x600?3" 
                alt="Carousel Image 3"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Carousel controls */}
          <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-4">
            <button
              onClick={() => scrollCarousel('prev')}
              className="carousel-control-prev bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center justify-end pr-4">
            <button
              onClick={() => scrollCarousel('next')}
              className="carousel-control-next bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column - Text Box */}
        <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Persyaratan Pendaftaran</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Fotokopi akte kelahiran</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Fotokopi kartu keluarga</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Pas foto 3x4 (3 lembar)</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Fotokopi rapor terakhir</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Surat keterangan sehat</span>
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors self-start">
            Download Formulir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Persyaratan;