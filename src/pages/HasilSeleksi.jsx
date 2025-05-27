import React, { useState } from 'react';

const dataPeserta = [
  { id: 1, nama: 'Ahmad Fauzi', nisn: '1234567890', asalSekolah: 'SMP Negeri 1', jurusan: 'IPA', status: 'Lulus' },
  { id: 2, nama: 'Siti Aminah', nisn: '0987654321', asalSekolah: 'SMP Negeri 2', jurusan: 'IPS', status: 'Tidak Lulus' },
  { id: 3, nama: 'Budi Santoso', nisn: '1122334455', asalSekolah: 'SMP Negeri 3', jurusan: 'IPA', status: 'Lulus' },
  { id: 4, nama: 'Dewi Lestari', nisn: '6677889900', asalSekolah: 'SMP Negeri 4', jurusan: 'IPS', status: 'Tidak Lulus' },
  // ... data lain
];

const HasilSeleksi = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter data berdasarkan nama atau nisn
  const filteredData = dataPeserta.filter((peserta) =>
    peserta.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    peserta.nisn.includes(searchTerm)
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Hasil Seleksi Peserta</h1>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari berdasarkan nama atau NISN..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tabel Hasil Seleksi */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Nama</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">NISN</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Asal Sekolah</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Jurusan</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((peserta) => (
                <tr key={peserta.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b border-gray-200">{peserta.nama}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{peserta.nisn}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{peserta.asalSekolah}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{peserta.jurusan}</td>
                  <td className={`py-2 px-4 border-b border-gray-200 font-semibold
                    ${peserta.status === 'Lulus' ? 'text-green-600' : 'text-red-600'}`}>
                    {peserta.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  Data tidak ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HasilSeleksi;
