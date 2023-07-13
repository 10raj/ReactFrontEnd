import React , { useEffect }from 'react'
import './App.css';
import {NavigationBar} from './pages/NavBar';
import BookPage from './pages/BookPage';
import { ToastContainer } from 'react-toastify';
import SearchBar from './componant/SearchBar';
import {RazorpayButton} from './componant/RazorpayButton'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return ( 
    <>
    <dir >
    <ToastContainer/>
      <NavigationBar  />
      {/* <div >
      <BookPage/>
      </div> */}
      <div>
        <RazorpayButton/>
      </div>

    </dir>
    </> 
  );
}

export default App;
