import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//components
import {Header,Footer} from "./components"
//pages
import {Home,Contact,Login,Register,Reset} from "./pages/index"
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
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
