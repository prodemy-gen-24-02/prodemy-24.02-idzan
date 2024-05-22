import "./App.css";
import CategorySection from "./components/CategorySection";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { DataCategory } from "./data/dataCategory";
import { DataProduct } from "./data/dataProduct";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CategorySection categories={DataCategory} />
      <FeaturedProducts products={DataProduct} />
      <Footer />
    </>
  );
}

export default App;
