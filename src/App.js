import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//components
import {Header,Footer} from "./components"
//pages
import {Home,Contact} from "./pages/index"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contacts' element={ <Contact />} />
          </Routes>
        <Footer />
      
      </BrowserRouter>
    </>
  );
}

export default App;
