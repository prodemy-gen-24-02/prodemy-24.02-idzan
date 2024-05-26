import Layout from "../Layout/Layout";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import { DataCategory } from "../data/dataCategory";
import { DataProduct } from "../data/dataProduct";

function Home() {
  return (
    <Layout>
      <Hero />
      <CategorySection categories={DataCategory} />
      <FeaturedProducts products={DataProduct} />
    </Layout>
  );
}

export default Home;
