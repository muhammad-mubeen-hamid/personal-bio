import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ThePitch from './components/ThePitch'
import TechSpecs from './components/TechSpecs'
import Features from './components/Features'
import DayInLife from './components/DayInLife'
import Interests from './components/Interests'
import Testimonials from './components/Testimonials'
import Connect from './components/Connect'
import IslamicDivider from './components/IslamicDivider'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <IslamicDivider variant="dark" />
        <ThePitch />
        <IslamicDivider variant="light" />
        <TechSpecs />
        <IslamicDivider variant="dark" />
        <Features />
        <IslamicDivider variant="light" />
        <DayInLife />
        <IslamicDivider variant="light" />
        <Interests />
        <IslamicDivider variant="dark" />
        <Testimonials />
        <IslamicDivider variant="light" />
        <Connect />
      </main>
    </>
  )
}

export default App
