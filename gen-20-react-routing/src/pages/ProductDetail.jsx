import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";

import ProductSection from "../components/ProductSection";
import ProdukSerupa from "../components/ProdukSerupa";
import { DataProduct } from "../data/dataProduct";

function ProductDetail() {
  const { id } = useParams();
  const product = DataProduct.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return (
      <Layout>
        <div className="pt-20  p-6  items-center text-center">
          <h2 className="text-2xl font-bold mb-4 text-center font-roboto">
            Produk Tidak Ditemukan
          </h2>

          <dotlottie-player
            src="https://lottie.host/c71118ee-d86e-4d9f-8bf4-80830a6a5ca9/DHxUGxa19V.json"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px", margin: "0 auto" }}
            loop
            autoplay
          ></dotlottie-player>

          <p className="text-gray-700 mt-4">
            Maaf, produk yang Anda cari tidak ditemukan. Silakan cek kembali
            atau lihat produk lainnya yang mungkin menarik bagi Anda.
          </p>
        </div>
      </Layout>
    );
  }

  const relatedProducts = DataProduct.filter(
    (prod) => prod.category === product.category && prod.id !== product.id
  );

  return (
    <Layout>
      <ProductSection product={product} />
      {relatedProducts.length > 0 ? (
        <ProdukSerupa produk={relatedProducts} />
      ) : (
        <div className="my-8 mx-auto max-w-6xl p-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-center font-roboto">
            Produk Serupa Tidak Tersedia
          </h2>
          <p className="text-gray-700">
            Maaf, tidak ada produk serupa yang tersedia saat ini. Silakan cek
            kembali kapan-kapan atau lihat produk lainnya yang mungkin menarik
            bagi Anda.
          </p>
        </div>
      )}
    </Layout>
  );
}

export default ProductDetail;
