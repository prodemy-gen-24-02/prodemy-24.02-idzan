function CategorySection({ categories }) {
  return (
    <section id="category-section" className="py-8 w-3/4 mx-auto mb-8">
      {/* bagian kategori header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
          Browse by Category
        </h2>
        <div className="space-x-2">
          <button className="p-2 text-sm  rounded-lg border-solid border-2 border-sky-500 hover:bg-sky-500 hover:text-white  ">
            <i className="fa-solid fa-arrow-left "></i>
          </button>
          <button className="p-2 text-sm rounded-lg border-solid border-2 border-sky-500 hover:bg-sky-500 hover:text-white ">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      {/* bagian body kategori */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
        {categories.map(({ id, imgSrc, namaKategori }) => (
          <div
            key={id}
            className="flex flex-col items-center  border p-8 rounded-lg hover:scale-105 hover:drop-shadow-md hover:bg-slate-100 transition ease-in-out delay-100"
          >
            <img src={imgSrc} alt={namaKategori} className="mb-2 size-20" />
            <p>{namaKategori}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
