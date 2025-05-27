import React from 'react';

const ProfilPondok = () => {
  return (
    <div className="bg-green-50 px-6 py-16">
      <div id="features" className="mx-auto max-w-7xl">
        <h2 className="text-center font-display text-4xl font-extrabold tracking-tight text-green-900 md:text-5xl">
          Profil Pondok
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-8 text-center text-green-900 md:grid-cols-4">
          <li className="rounded-2xl bg-white px-8 py-10 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
              alt="Pengasuh Pondok"
              className="mx-auto h-12 w-12 mb-4"
              style={{ filter: 'invert(31%) sepia(69%) saturate(272%) hue-rotate(87deg) brightness(92%) contrast(86%)' }}
            />
            <h3 className="mb-3 font-display text-xl font-semibold">
              Pengasuh Pondok
            </h3>
            <p className="text-sm leading-6 text-green-700">
              Program pendidikan yang mengajarkan nilai-nilai agama dan akhlak mulia.
            </p>
          </li>
          <li className="rounded-2xl bg-white px-8 py-10 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
              alt="Program Pembinaan"
              className="mx-auto h-12 w-12 mb-4"
              style={{ filter: 'invert(31%) sepia(69%) saturate(272%) hue-rotate(87deg) brightness(92%) contrast(86%)' }}
            />
            <h3 className="mb-3 font-display text-xl font-semibold">
              Program Pembinaan
            </h3>
            <p className="text-sm leading-6 text-green-700">
              Pembinaan karakter dan spiritual untuk membentuk kepribadian santri.
            </p>
          </li>
          <li className="rounded-2xl bg-white px-8 py-10 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/530442/port-detection.svg"
              alt="Pendidikan Formal"
              className="mx-auto h-12 w-12 mb-4"
              style={{ filter: 'invert(31%) sepia(69%) saturate(272%) hue-rotate(87deg) brightness(92%) contrast(86%)' }}
            />
            <h3 className="mb-3 font-display text-xl font-semibold">
              Pendidikan Formal
            </h3>
            <p className="text-sm leading-6 text-green-700">
              Menyediakan pendidikan formal dari SD, SMP, hingga SMA.
            </p>
          </li>
          <li className="rounded-2xl bg-white px-8 py-10 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/530444/availability.svg"
              alt="Keterampilan dan Ekstrakurikuler"
              className="mx-auto h-12 w-12 mb-4"
              style={{ filter: 'invert(31%) sepia(69%) saturate(272%) hue-rotate(87deg) brightness(92%) contrast(86%)' }}
            />
            <h3 className="mb-3 font-display text-xl font-semibold">
              Keterampilan dan Ekstrakurikuler
            </h3>
            <p className="text-sm leading-6 text-green-700">
              Program keterampilan dan kegiatan ekstrakurikuler untuk pengembangan diri.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilPondok;
