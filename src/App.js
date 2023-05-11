import { Footer } from "antd/es/layout/layout";
import Banner from "./components/Landing/Banner";
import Clients from "./components/Landing/Clients";
import Features from "./components/Landing/Features";
import { Illuminating } from "./components/Landing/Illuminating";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Banner />
      <Illuminating />
      <Features />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
