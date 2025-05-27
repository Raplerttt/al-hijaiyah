import React from 'react';

const InformasiPembayaranSPP = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Informasi Pembayaran SPP</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <p>
          Pembayaran SPP (Sumbangan Pembinaan Pendidikan) dilakukan setiap bulan dengan nominal sebesar:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700">
          <li>SPP Bulanan: <strong>Rp 150.000</strong></li>
          <li>Batas Pembayaran: <strong>Setiap tanggal 10</strong> setiap bulannya</li>
          <li>Denda keterlambatan: <strong>Rp 10.000</strong> per minggu keterlambatan</li>
        </ul>

        <div className="border-t pt-4">
          <p className="font-semibold">Metode Pembayaran:</p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Transfer Bank: BRI 1234-5678-9012 a.n. Sekolah Harapan Bangsa</li>
            <li>Datang langsung ke bagian Tata Usaha</li>
            <li>Via aplikasi pembayaran sekolah (jika tersedia)</li>
          </ul>
        </div>

        <div className="border-t pt-4">
          <p className="font-semibold">Kontak Bantuan:</p>
          <p>Jika ada kendala atau pertanyaan terkait pembayaran, hubungi:</p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>WA Admin: <strong>0812-3456-7890</strong></li>
            <li>Email: <strong>admin@sekolah.id</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InformasiPembayaranSPP;
