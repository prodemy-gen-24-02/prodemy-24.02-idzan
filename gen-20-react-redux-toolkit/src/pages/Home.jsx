import axios from "axios";
import Layout from "../Layout/Layout";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import useSWR from "swr";
import { RingLoader } from "react-spinners";

function Home() {
  const getProduct = (url) => axios.get(url).then((response) => response.data);
  const getCategory = (url) => axios.get(url).then((response) => response.data);

  const { data: dataProduct, error: errorProduct } = useSWR(
    "http://localhost:3000/products",
    getProduct
  );
  const { data: dataCategory, error: errorCategory } = useSWR(
    "http://localhost:3000/categories",
    getCategory
  );

  if (errorProduct || errorCategory) {
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

  if (!dataProduct || !dataCategory) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <RingLoader></RingLoader>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Hero />
      <CategorySection categories={dataCategory} />
      <FeaturedProducts products={dataProduct} />
    </Layout>
  );
}

export default Home;
