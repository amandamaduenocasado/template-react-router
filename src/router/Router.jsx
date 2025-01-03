import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/home/Home";

const Router = () => {
    return <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
    </Routes>
};

export default Router; 



