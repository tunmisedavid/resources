import { Route, Routes } from "react-router-dom"
import { Dashboard, Resources, Toolkit } from "../pages"
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/toolkit" element={<Toolkit />} />
      </Routes>
    </div>
  );
}

export default Allroutes
