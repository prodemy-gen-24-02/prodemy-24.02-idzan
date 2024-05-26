import Layout from "../Layout/Layout";

import ProductSection from "../components/ProductSection";
import ProdukSerupa from "../components/ProdukSerupa";
import { DataSerupa } from "../data/dataProduct";

function ProductDetail() {
  return (
    <Layout>
      <ProductSection />
      <ProdukSerupa produk={DataSerupa} />
    </Layout>
  );
}

export default ProductDetail;
