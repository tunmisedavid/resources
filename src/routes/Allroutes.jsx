import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard, Resources, Toolkit } from "../pages"
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to='/landing' replace/>}  />
        <Route path="/landing" element={<Resources />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/toolkit" element={<Toolkit />} />
      </Routes>
    </div>
  );
}

export default Allroutes
