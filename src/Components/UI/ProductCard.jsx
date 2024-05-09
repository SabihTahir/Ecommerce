/* eslint-disable react/prop-types */
// import productImage from "../../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const ProductCard = ({item}) => {
    const navigate = useNavigate();
  return (
    <>
      <div className="">
        <motion.img whileHover={{scale: 0.9}} src={item.imgUrl}alt="Chair" className="img-fluid" />
        <h1
        onClick={() => navigate(`/shop/${item.id}`)} 
        className="text-lg font-semibold mt-2 hover:text-blue-800 cursor-pointer">{item.productName}</h1>
        <p className="text-sm">{item.category}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="font-semibold">{item.price}</p>
          <motion.svg
            whileTap={{ scale: 1.2 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 outline-none cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
              clipRule="evenodd"
            />
          </motion.svg>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
