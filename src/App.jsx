import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BeakerIcon } from "@heroicons/react/24/solid";
import {NavBar} from './components';
function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      {/* <Routes>
        <Route/>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App
