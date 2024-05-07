import { Route, Routes } from "react-router-dom";


import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Trending from "./pages/Trending";
import Populer from "./pages/Populer";
import NowPlaying from "./pages/NowPlaying";
import UpComing from "./pages/UpComing";
import Details from "./pages/Details";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/populer" element={<Populer/>}/>
        <Route path="/nowplaying" element={<NowPlaying/>}/>
        <Route path="/upcoming" element={<UpComing/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
