import React, { useState, useEffect } from 'react';

const JadwalKegiatan = () => {
  const [schedule, setSchedule] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('src/data/schedule.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch schedule data');
        }
        return response.json();
      })
      .then((data) => setSchedule(data))
      .catch((error) => console.error('Error fetching schedule:', error));
  }, []);

  const displayedSchedule = showAll ? schedule : schedule.slice(0, 4);

  return (
    <div className="relative py-16 bg-green-50">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-30"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-green-600 to-green-400"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-green-300 to-lime-200"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 md:text-5xl">
            Jadwal Kegiatan
          </h1>
          <p className="mt-4 text-xl text-green-700">
            Lihat kegiatan terbaru dan ikuti aktivitas pesantren!
          </p>
        </div>

        {/* Daftar kegiatan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedSchedule.length > 0 ? (
            displayedSchedule.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h2 className="text-lg font-bold text-green-800 mb-2">
                  {event.title}
                </h2>
                <p className="text-sm text-green-700 mb-1">
                  <span className="font-medium">Tanggal:</span> {event.date}
                </p>
                <p className="text-sm text-green-700 mb-1">
                  <span className="font-medium">Waktu:</span> {event.time}
                </p>
                <p className="text-sm text-green-700 mb-4">
                  <span className="font-medium">Lokasi:</span> {event.location}
                </p>
                <a
                  href={event.link}
                  className="inline-block text-sm px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-full font-semibold transition transform hover:scale-105"
                >
                  Detail Kegiatan
                </a>
              </div>
            ))
          ) : (
            <p className="text-center text-green-700 col-span-full">
              Tidak ada kegiatan yang tersedia saat ini.
            </p>
          )}
        </div>

        {/* Tombol Lihat Semua */}
        {schedule.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition"
            >
              {showAll ? 'Lihat Lebih Sedikit' : 'Lihat Semua Kegiatan'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JadwalKegiatan;
