import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//components
import {Header,Footer} from "./components"
//pages
import {Home,Contact,Login,Register,Reset} from "./pages/index"
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer position="bottom-right"/>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contacts' element={ <Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/reset' element={<Reset />} />
          </Routes>
        <Footer />
      
      </BrowserRouter>
    </>
  );
}

export default App;
