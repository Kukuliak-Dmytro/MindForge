import { Outlet } from 'react-router-dom'
// import './App.css'
// a component to wrap the whole app
// it has a header and a footer, and a main section
//with 120px gap between them
//the main section is where the router outlet is
//the header and footer are fixed
import Header from './components/frames/header/Header'
import './App.scss'
function App() {

  return (
    <div className="appWrapper">
      <Header role='employer'></Header>
     <Outlet></Outlet>
  
    </div>


  )
}

export default App
