import React, { useState } from 'react';

const FormPendaftaran = () => {
  const [formData, setFormData] = useState({
    // Data Diri Siswa
    namaLengkap: '',
    nisn: '',
    tempatLahir: '',
    tanggalLahir: '',
    alamat: '',

    // Data Orang Tua
    namaAyah: '',
    namaIbu: '',
    pekerjaanAyah: '',
    pekerjaanIbu: '',
    noTeleponOrtu: '',

    // Data Pendidikan Sebelumnya
    asalSekolah: '',
    alamatSekolah: '',
    nilaiUN: '',

    // Dokumen
    fileKartuKeluarga: null,
    fileIjazah: null,
    filePasFoto: null,
  });

  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data dikirim:', formData);
    alert('Formulir berhasil dikirim!');
  };

  const isEmpty = (field) => !formData[field] && touched[field];

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-8 border border-green-300">
      <h1 className="text-3xl font-bold text-center text-green-700">Formulir Pendaftaran Siswa Baru</h1>

      {/* Data Diri Siswa */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-green-600">1. Data Diri Siswa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input type="text" name="namaLengkap" placeholder="Nama Lengkap" value={formData.namaLengkap} onChange={handleChange} onBlur={handleBlur} className="input-green" required />
            {isEmpty("namaLengkap") && <p className="text-red-500 text-sm">Nama Lengkap wajib diisi.</p>}
          </div>
          <div>
            <input type="text" name="nisn" placeholder="NISN" value={formData.nisn} onChange={handleChange} onBlur={handleBlur} className="input-green" required />
            {isEmpty("nisn") && <p className="text-red-500 text-sm">NISN wajib diisi.</p>}
          </div>
          <input type="text" name="tempatLahir" placeholder="Tempat Lahir" value={formData.tempatLahir} onChange={handleChange} className="input-green" />
          <input type="date" name="tanggalLahir" value={formData.tanggalLahir} onChange={handleChange} className="input-green" />
          <textarea name="alamat" placeholder="Alamat Lengkap" value={formData.alamat} onChange={handleChange} className="input-green md:col-span-2" />
        </div>
      </section>

      {/* Data Orang Tua */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-green-600">2. Data Orang Tua</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="namaAyah" placeholder="Nama Ayah" value={formData.namaAyah} onChange={handleChange} className="input-green" />
          <input type="text" name="namaIbu" placeholder="Nama Ibu" value={formData.namaIbu} onChange={handleChange} className="input-green" />
          <input type="text" name="pekerjaanAyah" placeholder="Pekerjaan Ayah" value={formData.pekerjaanAyah} onChange={handleChange} className="input-green" />
          <input type="text" name="pekerjaanIbu" placeholder="Pekerjaan Ibu" value={formData.pekerjaanIbu} onChange={handleChange} className="input-green" />
          <input type="text" name="noTeleponOrtu" placeholder="No. Telepon Orang Tua" value={formData.noTeleponOrtu} onChange={handleChange} className="input-green" />
        </div>
      </section>

      {/* Data Pendidikan Sebelumnya */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-green-600">3. Data Pendidikan Sebelumnya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="asalSekolah" placeholder="Asal Sekolah" value={formData.asalSekolah} onChange={handleChange} className="input-green" />
          <input type="text" name="alamatSekolah" placeholder="Alamat Sekolah" value={formData.alamatSekolah} onChange={handleChange} className="input-green" />
          <input type="number" step="0.01" name="nilaiUN" placeholder="Nilai UN (jika ada)" value={formData.nilaiUN} onChange={handleChange} className="input-green" />
        </div>
      </section>

      {/* Dokumen Persyaratan */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-green-600">4. Dokumen Persyaratan</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-green-700">Upload Kartu Keluarga</label>
            <input type="file" name="fileKartuKeluarga" onChange={handleChange} className="file-input" required />
          </div>
          <div>
            <label className="block mb-1 font-medium text-green-700">Upload Ijazah</label>
            <input type="file" name="fileIjazah" onChange={handleChange} className="file-input" required />
          </div>
          <div>
            <label className="block mb-1 font-medium text-green-700">Upload Pas Foto</label>
            <input type="file" name="filePasFoto" onChange={handleChange} className="file-input" required />
          </div>
        </div>
      </section>

      <div className="text-center">
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
          Kirim Pendaftaran
        </button>
      </div>
    </form>
  );
};

export default FormPendaftaran;
