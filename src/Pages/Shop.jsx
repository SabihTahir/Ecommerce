import{ useState, useEffect } from "react";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import productsData from "../assets/data/products";
import ProductsList from "../Components/UI/ProductsList";

const Shop = () => {
  const [originalProducts, setOriginalProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  
  useEffect(() => {
    setOriginalProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "all") {
      setFilteredProducts(originalProducts);
    } else {
      const filtered = originalProducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filtered);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchedProducts = filteredProducts.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(searchTerm === "" ? originalProducts : searchedProducts);
  };

  return (
    <>
      <Helmet title="Shop">
        <CommonSection title="Products" />

        <section className="max-w-7xl mx-auto py-8">
          <div className="flex md:flex-row flex-col items-center md:justify-between gap-6">
            <div className="flex items-center gap-6">
              <select
                onChange={handleFilter}
                className="p-2 rounded-lg border border-[var(--primary-color)]"
              >
                <option value="all">Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
              <select className="p-2 rounded-lg border border-[var(--primary-color)]">
                <option>Filter By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
            <div>
              <div className="flex items-center gap-2 border border-[var(--primary-color)] rounded-lg pr-4 w-full">
                <input
                  type="search"
                  onChange={handleSearch}
                  placeholder="Search...."
                  className="p-2 w-full rounded-lg outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto xl:px-0 px-4">
            {filteredProducts.length === 0 ? (
              <h1 className="text-center font-bold text-2xl">No Products Found</h1>
            ) : (
              <ProductsList data={filteredProducts} />
            )}
          </div>
        </section>
      </Helmet>
    </>
  );
};

export default Shop;
