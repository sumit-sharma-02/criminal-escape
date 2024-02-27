import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import City from "./pages/City";
import Vehicle from "./pages/Vehicle";
import Result from "./pages/Result";

const App = () => {
  return (
    <div className="flex w-full h-full flex-col">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/city" element={<City />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/result" element={<Result />} />
        </Routes>
    </div>
  )
}

export default App