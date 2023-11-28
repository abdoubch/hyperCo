import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import {
  PageAcceuil,
  PageBlog,
  PageBoutique,
  PageCcd,
  PageContact,
} from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
        <div>Hi</div></>}/>
        <Route
          path="/*"
          element={
            <>
              <NavBar />
              <Routes>
                <Route path="/home" element={<PageAcceuil />} />
                <Route path="/boutique" element={<PageBoutique />} />
                <Route path="/blog" element={<PageBlog />} />
                <Route path="/contact" element={<PageContact />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
