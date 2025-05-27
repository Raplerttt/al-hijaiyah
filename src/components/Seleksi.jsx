import React from 'react';

const Seleksi = () => {
  // Dummy data - will be replaced with backend data
  const seleksiData = {
    waktuPendaftaran: {
      buka: '1 Januari 2024',
      tutup: '31 Maret 2024',
      pengumuman: '15 April 2024'
    },
    lokasiSeleksi: {
      alamat: 'Jl. Raya Sajir-Daroyon Km. 04 Kp. Cilatak Ds. MargamulyaKec. Cileles Lebak-Banten',
      kota: 'Lebak',
      mapsLink: 'https://maps.google.com'
    },
    materiUjian: [
      {
        id: 1,
        nama: 'Tes Tulis',
        deskripsi: 'Materi mencakup Matematika, Bahasa Indonesia, dan IPA'
      },
      {
        id: 2,
        nama: 'Tes Lisan',
        deskripsi: 'Mengukur potensi dan minat peserta didik'
      },
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Proses Seleksi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Waktu Pendaftaran */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Waktu Pendaftaran</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Pendaftaran Dibuka:</p>
              <p className="font-medium">{seleksiData.waktuPendaftaran.buka}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Pendaftaran Ditutup:</p>
              <p className="font-medium">{seleksiData.waktuPendaftaran.tutup}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Pengumuman Hasil:</p>
              <p className="font-medium">{seleksiData.waktuPendaftaran.pengumuman}</p>
            </div>
          </div>
        </div>

        {/* Lokasi Seleksi */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Lokasi Pelaksanaan Seleksi</h2>
          <div className="space-y-3">
            <p className="font-medium">{seleksiData.lokasiSeleksi.alamat}</p>
            <p className="text-gray-600">{seleksiData.lokasiSeleksi.kota}</p>
            <a 
              href={seleksiData.lokasiSeleksi.mapsLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition"
            >
              Lihat di Peta
            </a>
          </div>
        </div>

        {/* Materi Ujian */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Materi Ujian</h2>
          <div className="space-y-4">
            {seleksiData.materiUjian.map((materi) => (
              <div key={materi.id} className="border-b pb-3 last:border-0">
                <h3 className="font-medium text-gray-800">{materi.nama}</h3>
                <p className="text-sm text-gray-600">{materi.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Catatan */}
      <div className="mt-10 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h3 className="font-semibold text-yellow-800 mb-2">Catatan Penting:</h3>
        <p className="text-yellow-700">
          Semua calon siswa diwajibkan hadir 30 menit sebelum jadwal seleksi dimulai. 
          Harap membawa perlengkapan ujian dan dokumen yang diperlukan.
        </p>
      </div>
    </div>
  );
};

export default Seleksi;