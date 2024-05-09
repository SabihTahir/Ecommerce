/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

const ProductsList = ({ data }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data?.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ProductsList;
