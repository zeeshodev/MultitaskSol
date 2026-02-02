import React from 'react'
import Hero from '../components/Hero'
import ServicesCards from '../components/ServicesCards'
import Achievements from '../components/Achievements'
import Partners from '../components/Partners'
import WhyChoose from '../components/WhyChoose'
import ReadyToServe from '../components/ReadyToServe'
import ClientReviews from '../components/ClientReviews'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <main className="min-h-screen">

      <Hero />
      <ServicesCards />
      <Achievements />
      <Partners />
      <WhyChoose />
      <ReadyToServe />
      <ClientReviews />
      <CTA />

    </main>
  )
}

export default Home