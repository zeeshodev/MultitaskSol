import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesCards from '../components/ServicesCards'
import Achievements from '../components/Achievements'
import Partners from '../components/Partners'
import WhyChoose from '../components/WhyChoose'
import ReadyToServe from '../components/ReadyToServe'
import ClientReviews from '../components/ClientReviews'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesCards />
      <Achievements />
      <Partners />
      <WhyChoose />
      <ReadyToServe />
      <ClientReviews />
      <CTA />
      <Footer />
    </main>
  )
}

export default Home