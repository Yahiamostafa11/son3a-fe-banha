import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Categories from '../components/Categories'
import FAQ from '../components/FAQ'
import Locations from '../components/Locations'

function Home() {

  useEffect(() => {
    if (window.location.hash === '#locations-section') {
      setTimeout(() => {
        const element = document.getElementById('locations-section')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Categories />
      <FAQ />
      <Locations />
    </div>
  )
}

export default Home