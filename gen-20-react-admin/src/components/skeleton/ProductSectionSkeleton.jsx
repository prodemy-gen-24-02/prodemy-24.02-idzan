import { useEffect } from "react";

const ProductSectionSkeleton = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="my-8 mx-auto w-3/4 p-6 md:shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Untuk mobile */}
        <div className="md:hidden">
          <div className="animate-pulse">
            <h2 className="h-6 w-1/3 bg-gray-300 rounded-md mb-4 mb"></h2>
            <h3 className="h-8 w-1/2 bg-gray-300 rounded-md mb-4"></h3>
            <div className="flex space-x-2">
              <h3 className="h-8 w-20 bg-gray-300 rounded-md mb-4"></h3>
              <h3 className="h-8 w-1/3 bg-gray-300 rounded-md mb-4"></h3>
            </div>
            <div className="flex space-x-4">
              <div className="h-5 bg-gray-300 rounded-md"></div>
              <span className="h-5 bg-gray-300 rounded-md"></span>
            </div>
          </div>
        </div>
        <div>
          <div className="animate-pulse">
            <div className="w-full mb-4 aspect-square bg-gray-300 rounded-md"></div>
            <div className="grid grid-cols-4 gap-4 mt-8">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-300 rounded-md"
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col justify-between">
          <div className="hidden md:block">
            <div className="animate-pulse">
              <h2 className="text-xl w-1/3 font-bold mb-16 font-roboto h-8 bg-gray-300 rounded-md"></h2>
              <div>
                <h3 className="text-xl w-1/2 md:text-2xl font-bold mb-4 font-roboto h-10 bg-gray-300 rounded-md"></h3>
                <h4 className="text-base w-1/4 md:text-lg font-bold mb-4 font-roboto h-6 bg-gray-300 rounded-md"></h4>
                <p className="text-gray-700 text-sm md:text-base mb-4 font-nunito h-16 bg-gray-300 rounded-md"></p>
              </div>
            </div>
          </div>
          <div className="space-x-4  md:my-2 hidden md:flex">
            <div className="h-5 w-20 bg-gray-300 rounded-md"></div>
            <div className="h-5 w-20 bg-gray-300 rounded-md"></div>
            <span className="h-5 bg-gray-300 rounded-md"></span>
          </div>
          <div className="hidden space-x-2  items-center mb-4 md:flex">
            <div className="h-8 w-24 bg-gray-300 rounded-md"></div>
            <div className="h-8 w-24 bg-gray-300 rounded-md"></div>
          </div>
          <div className="hidden items-center mb-4 md:flex">
            <div className="h-8 w-1/3 bg-gray-300 rounded-md"></div>
          </div>
          <div className="animate-pulse md:hidden">
            <h2 className="h-6 w-1/3 bg-gray-300 rounded-md mb-4 mb"></h2>
            <h3 className="h-12 w-full bg-gray-300 rounded-md mb-4"></h3>
            <h2 className="h-6 w-1/3 bg-gray-300 rounded-md mb-4 mb"></h2>
          </div>
          <div className="flex justify-center items-center mt-4 mb-8 md:hidden">
            <div className="flex items-center border border-gray-300 rounded-md w-28 text-center">
              <div className="h-7 w-7 bg-gray-300 rounded-md"></div>
              <div className="h-7 w-14 mx-1 bg-gray-300 rounded-md"></div>
              <div className="h-7 w-7 bg-gray-300 rounded-md"></div>
            </div>
          </div>
          <h2 className="h-6 w-1/2 md:hidden bg-gray-300 rounded-md mb-4 mb"></h2>
          <div className="flex flex-wrap justify-center ">
            <div className="flex-1 h-10 min-w-48  mt-2 mr-4  bg-gray-300 rounded-md"></div>
            <div className="flex-1 h-10 min-w-48 mt-2 mr-4  bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSectionSkeleton;
