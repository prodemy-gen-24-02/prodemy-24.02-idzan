import "./App.css";
import { ProdukData } from "./data";
import FeaturedProducts from "./components/FeaturedProducts";

const App = () => {
  return (
    <>
      <FeaturedProducts products={ProdukData} />
    </>
  );
};

export default App;
