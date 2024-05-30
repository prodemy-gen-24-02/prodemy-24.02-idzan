import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../Layout/Layout";
import ProductSection from "../components/ProductSection";
import ProdukSerupa from "../components/ProdukSerupa";

import ProductSectionSkeleton from "../components/skeleton/ProductSectionSkeleton";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [productError, setProductError] = useState();
  const [relatedProductsError, setRelatedProductsError] = useState();

  useEffect(() => {
    // Fungsi untuk mendapatkan produk berdasarkan ID
    const getProductById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setProductError(new Error("Produk tidak ditemukan"));
        } else {
          setProductError(error);
          console.log(error);
        }
      }
    };
    // Fungsi untuk mendapatkan produk terkait berdasarkan kategori produk
    const getRelatedProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products?category=${product.category}`
        );
        // Filter produk agar tidak tampil produk yang sedang ditampilkan detailnya
        const filteredProducts = response.data.filter((prod) => prod.id !== id);
        setRelatedProducts(filteredProducts);
      } catch (error) {
        setRelatedProductsError(error);
      }
    };

    setTimeout(() => {
      getProductById();
    }, 1000);

    if (product) {
      getRelatedProducts();
    }
  }, [id, product]);

  if (productError && productError.message === "Produk tidak ditemukan") {
    return (
      <Layout>
        <div className="pt-20 my-8 mx-auto h-max p-6 items-center text-center flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-center font-roboto">
            Produk Tidak Ditemukan
          </h2>
          <div className="flex justify-center items-center h-fit w-fit max-h-xl max-w-xl">
            <dotlottie-player
              src="https://lottie.host/c71118ee-d86e-4d9f-8bf4-80830a6a5ca9/DHxUGxa19V.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <p className="text-gray-700 mt-4">
            Maaf, produk yang Anda cari tidak ditemukan. Silakan cek kembali
            atau lihat produk lainnya yang mungkin menarik bagi Anda.
          </p>
        </div>
      </Layout>
    );
  }

  if (productError || relatedProductsError) {
    return (
      <Layout>
        <div className="pt-20 my-8 mx-auto h-max p-6 items-center text-center flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-center font-roboto">
            Terjadi Kesalahan
          </h2>
          <div className="flex justify-center items-center h-fit w-fit max-h-xl max-w-xl">
            <dotlottie-player
              src="https://lottie.host/5fe8fee2-e2d1-4019-902a-90336c5b64d3/zyUvFpMFSe.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>

          <p className="text-gray-700">
            Maaf, terjadi kesalahan saat mengambil data. Silakan coba lagi
            nanti.
          </p>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <ProductSectionSkeleton></ProductSectionSkeleton>
      </Layout>
    );
  }

  return (
    <Layout>
      <ProductSection product={product} />
      {relatedProducts.length > 0 ? (
        <ProdukSerupa produk={relatedProducts} />
      ) : (
        <div className="my-8 mx-auto w-full p-6 text-center">
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
