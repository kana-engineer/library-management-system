import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Books from "./pages/Books.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Authors from "./pages/Authors.jsx";
import Borrowed from "./pages/Borrowed.jsx";
import Users from "./pages/Users.jsx";
import AddBooks from "./pages/AddBooks.jsx";
import MainSection from "./components/MainSection.jsx";

function App() {

  return (
      <>
        <BrowserRouter>
            <Navbar/>
            <div className="grid grid-cols-[400px_2fr]">
                <div className="border-r-1">
                    <MainSection/>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/books" element={<Books/>}/>
                        <Route path="/authors" element={<Authors/>}/>
                        <Route path="/borrowed" element={<Borrowed/>}/>
                        <Route path="/users" element={<Users/>}/>
                        <Route path="/add-books" element={<AddBooks/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
      </>
  )
}

export default App
