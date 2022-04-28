import Header from "./components/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            caseSensitive
            element={
              <>
                <Header /> <Hero />
              </>
            }
          />
          <Route path="/channels" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
