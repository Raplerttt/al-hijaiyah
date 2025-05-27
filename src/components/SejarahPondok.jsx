import React from 'react';

const SejarahPondok = () => {
  return (
    <div className="px-6 py-12 flex flex-col items-center">
      <h2 className="font-display text-4xl font-extrabold tracking-tight text-green-900 mb-8 md:text-5xl">
        Sejarah Pondok
      </h2>
      <div
        className="max-w-4xl bg-green-800 bg-opacity-90 rounded-2xl p-10 shadow-xl text-white text-lg leading-relaxed"
        style={{ boxShadow: '0 10px 25px rgba(20, 60, 20, 0.3)' }}
      >
        <p className="mb-6">
          Pondok Pesantren ini didirikan pada tahun 1990 oleh <span className="font-semibold">KH. Ahmad Syafii</span>, seorang ulama kharismatik yang memiliki visi besar dalam pengembangan pendidikan Islam di pedesaan. Bermula dari sebuah langgar kecil yang digunakan untuk mengaji anak-anak sekitar, pesantren ini perlahan berkembang menjadi lembaga pendidikan Islam formal dan informal yang dikenal hingga ke luar daerah.
        </p>
        <p className="mb-6">
          Dalam perjalanannya, pondok ini telah melahirkan ribuan santri yang tersebar di berbagai penjuru nusantara, membawa nilai-nilai keislaman, kemandirian, dan semangat dakwah. Dengan dukungan masyarakat dan para alumni, berbagai fasilitas pendidikan terus dikembangkan, mulai dari madrasah, asrama santri, hingga pusat pelatihan keterampilan.
        </p>
        <p>
          Kini, Pondok Pesantren tidak hanya menjadi pusat keilmuan agama, tetapi juga pusat pemberdayaan umat yang aktif dalam kegiatan sosial, ekonomi, dan dakwah digital. Semangat awal pendirian pondok, yakni mencetak generasi yang berakhlak mulia dan bermanfaat bagi masyarakat, terus dijaga dan dikembangkan oleh para penerusnya.
        </p>
      </div>
    </div>
  );
};

export default SejarahPondok;
