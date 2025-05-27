import React from 'react'
import HeroSection from '../components/HeroSection'
import ContactUs from '../components/ContactUs'
import ProfilPondok from '../components/ProfilPondok'
import SejarahPondok from '../components/SejarahPondok'
import JadwalKegiatan from '../components/JadwalKegiatan'

const DashboardPages = () => {
  return (
    <>
    <HeroSection />
    <ProfilPondok />
    <SejarahPondok />
    <JadwalKegiatan />
    <ContactUs />
    </>
  )
}

export default DashboardPages
