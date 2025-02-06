import { Outlet } from 'react-router-dom'
// import './App.css'
// a component to wrap the whole app
// it has a header and a footer, and a main section
//with 120px gap between them
//the main section is where the router outlet is
//the header and footer are fixed
import Header from './components/frames/header/Header'
import Footer from './components/frames/footer/Footer'
import './App.css'
import './variables.css'
function App() {

  return (
    <div className="appWrapper ">
      {/*<div className="appWrapper dark-theme"></div>*/}
      <Header  isLogged={false} role='employer'></Header>
     <Outlet></Outlet>
      <Footer></Footer>
    </div>


  )
}

export default App
