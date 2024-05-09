/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import { motion } from "framer-motion";
import { deleteItem } from "../Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <Helmet title="Cart">
        <CommonSection title="Shoping Cart" />

        <section className="py-12">
          <div className="max-w-7xl mx-auto xl:px-0 px-4">
            <div>
              {cartItems.length === 0 ? (
                <h1 className="font-bold text-3xl">Your cart is empty</h1>
              ) : (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <Tr key={index} item={item} />
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            <div className="py-4 flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <h1 className="text-lg font-bold">Subtotal: </h1>
                <h1 className="text-lg font-semibold">${totalAmount}</h1>
              </div>
              <p className="text-lg font-medium">
                Taxes and shipping will calculate in checkout
              </p>
              <div className="flex items-center gap-4">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigate("/shop")}
                  className="bg-[var(--primary-color)]
                text-white border border-[var(--primary-color)] hover:bg-white hover:text-[var(--primary-color)] py-3 px-4 rounded-lg"
                >
                  Continue Shopping
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigate("/checkout")}
                  className="hover:bg-[var(--primary-color)]
                hover:text-white border border-[var(--primary-color)] bg-white text-[var(--primary-color)] py-3 px-4 rounded-lg"
                >
                  Checkout
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(deleteItem(item.id));
    toast.success("Item deleted from cart successfully");
  };
  return (
    <tr className="odd:bg-white  even:bg-gray-50 ">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        <div className="w-16">
          <img src={item.imgUrl} alt="Product Image" />
        </div>
      </th>
      <td className="px-6 py-4">{item.productName}</td>
      <td className="px-6 py-4">${item.price}</td>
      <td className="px-6 py-4">{item.quantity}</td>
      <td className="px-6 py-4">
        <motion.svg
          whileHover={{ scale: 1.2 }}
          onClick={deleteProduct}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
            clipRule="evenodd"
          />
        </motion.svg>
      </td>
    </tr>
  );
};

export default Cart;
