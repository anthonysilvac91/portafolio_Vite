import './App.css'
import Hero from './components/Navbar/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <div className='container'>
        <Hero/>
      </div>

    </>
  )
}

export default App
