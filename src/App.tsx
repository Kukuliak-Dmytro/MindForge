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
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './state/store'
import { setTheme } from './state/settingsSlice'

function App() {
  const theme = useSelector((state:RootState) => state.settingsStore.currentTheme)
  const user= useSelector((state:RootState) => state.userStore)
  const dispatch = useDispatch()
  // useEffect(() => {
  //     const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //       if (prefersDarkScheme){
  //         dispatch(setTheme('dark'))

  //       }
  //       else{
  //         dispatch(setTheme('light'))
         
  //       }

  // },[])
  return (
    <div className={`appWrapper ${theme}`} >
      {/*<div className="appWrapper dark-theme"></div>*/}
      <Header  isLogged={user.isLogged} role={`${user.role}`}></Header>
          <Outlet></Outlet>
      <Footer></Footer>
    </div>


  )
}

export default App
