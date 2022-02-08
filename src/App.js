import Astronaut from "./routes/Astronaut";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NewAstronaut from "./routes/NewAstronaut";
import About from "./routes/About";

function App() {
  return (
    <Layout>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/astronaut/:id" exact element={<Astronaut />} />
          <Route exact path="/new-astronaut" element={<NewAstronaut />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
