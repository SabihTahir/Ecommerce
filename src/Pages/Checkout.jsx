import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <Helmet title="Checkout">
        <CommonSection title="Checkout" />
        <section className="py-12 max-w-7xl mx-auto xl:px-0 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
            {/* Billing Information */}
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold">Billing Information</h1>
              <form action="" className="flex flex-col gap-2">
                <input
                  type="text"
                  className="border border-[var(--primary-color)] rounded-lg p-2"
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  className="border border-[var(--primary-color)] rounded-lg p-2"
                  placeholder="Enter you email"
                />
                <input
                  type="text"
                  className="border border-[var(--primary-color)] rounded-lg p-2"
                  placeholder="Phone number"
                />
                <input
                  type="text"
                  className="border border-[var(--primary-color)] rounded-lg p-2"
                  placeholder="Street address"
                />
                <input
                  type="text"
                  className="border border-[var(--primary-color)] rounded-lg p-2"
                  placeholder="City"
                />
                <input
                  type="text"
                  className="border border-[var(--primary-color)] rounded-lg p-2"
                  placeholder="Postal code"
                />
                <input
                  type="text"
                  className="border border-[var(--primary-color)] rounded-lg p-2"
                  placeholder="Country"
                />
              </form>
            </div>
            {/* Order Summary */}
            <div
              className="flex flex-col gap-4 bg-[var(--primary-color)]
            text-white p-6 rounded-lg"
            >
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-medium">Total Qty:</h1>
                <span className="text-xl font-medium">{totalQty} items</span>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-medium">Subtotal:</h1>
                <span className="text-xl font-medium">${totalAmount}</span>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-medium">Shipping:</h1>
                <span className="text-xl font-medium">0</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b">
                <h1 className="text-xl font-medium">Free Shipping</h1>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-medium">Total Cost:</h1>
                <span className="text-2xl font-medium">${totalAmount}</span>
              </div>

              <div className="">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="px-4 py-3 rounded-lg bg-white text-[var(--primary-color)] w-full"
                >
                  Place an order
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
};

export default Checkout;
