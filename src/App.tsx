import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel='noopener' >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel='noopener' >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <nav>
        <Link to='/mind-forge/' >Home</Link>
        {" | "}
        <Link to='/mind-forge/contact' >Contact</Link>

      </nav>
     <Outlet></Outlet>
        Click on the Vite and React logos to learn more
    
    </>
  )
}

export default App
