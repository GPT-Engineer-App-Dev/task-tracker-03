import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DoApp from "./components/DoApp.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DoApp />} />
      </Routes>
    </Router>
  );
}

export default App;
