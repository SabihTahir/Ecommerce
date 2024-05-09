/* eslint-disable react/jsx-key */
import { useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import products from "../assets/data/products";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import { motion } from "framer-motion";
import ProductsList from "../Components/UI/ProductsList";
import { useDispatch } from "react-redux";
import { addItem } from "../Slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);

  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    category,
    shortDesc,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewuserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewuserMsg,
      rating,
    };

    console.log(reviewObj);
    toast.success("Review submitted");
  };
  const addToCart = () => {
    dispatch(
      addItem({
        id,
        imgUrl,
        productName,
        price,
      })
    );
    toast.success("Item added to cart successfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <>
      <Helmet title={productName}>
        <CommonSection title={productName} />

        <section className="max-w-7xl mx-auto xl:px-0 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div className="w-96 h-96">
              <img src={imgUrl} alt="" className="w-full h-full img-fluid" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-semibold">{productName}</h1>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1 text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  (<span className="text-yellow-500">{avgRating}</span> rating)
                </p>
              </div>
              <p className="font-semibold">
                Category : <span className="font-medium">{category}</span>
              </p>
              <p>${price}</p>
              <p>{shortDesc}</p>
              <div>
                <motion.button
                  onClick={addToCart}
                  whileTap={{ scale: 1.2 }}
                  className="bg-[var(--primary-color)] text-white border-[var(--primary-color)] border px-4 py-2 rounded-md hover:bg-transparent hover:text-[var(--primary-color)]"
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto xl:px-0 px-4 py-8">
          <div className="flex items-center gap-4">
            <h1
              className={`${
                tab === "desc" ? "text-[var(--primary-color)]" : "text-gray-500"
              } font-medium cursor-pointer`}
              onClick={() => setTab("desc")}
            >
              Description
            </h1>
            <span> : </span>
            <h1
              className={`${
                tab === "rev" ? "text-[var(--primary-color)]" : "text-gray-500"
              } font-medium cursor-pointer`}
              onClick={() => setTab("rev")}
            >
              Reviews ({reviews.length})
            </h1>
          </div>

          {tab === "desc" ? (
            <div className="pt-4">
              <p>{description}</p>
            </div>
          ) : (
            <div className="">
              <div className="pt-4">
                <ul className="flex flex-col gap-4">
                  {reviews.map((item, index) => (
                    <li key={index}>
                      <h1 className="font-medium">Name</h1>
                      <span>
                        (
                        <span className="text-yellow-500 mb-2">
                          {item.rating}
                        </span>{" "}
                        rating)
                      </span>
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
                <div className="py-6">
                  <h1 className="text-xl font-semibold mb-4">
                    Leave your experience
                  </h1>
                  <form
                    action=""
                    onSubmit={submitHandler}
                    className="flex flex-col gap-4"
                  >
                    <div className="">
                      <input
                        type="text"
                        className="border p-2 rounded-md md:w-1/3 w-full"
                        placeholder="Enter Name"
                        ref={reviewUser}
                        required
                      />
                    </div>
                    <div className="flex items-center gap-6 text-yellow-500 text-sm">
                      <motion.div
                        whileTap={{ scale: 1.2 }}
                        onClick={() => setRating(1)}
                        className="flex items-center gap-1 text-yellow-500 tex-sm"
                      >
                        <span>1</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                      <motion.div
                        whileTap={{ scale: 1.2 }}
                        onClick={() => setRating(2)}
                        className="flex items-center gap-1"
                      >
                        <span>2</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                      <motion.div
                        whileTap={{ scale: 1.2 }}
                        onClick={() => setRating(3)}
                        className="flex items-center gap-1"
                      >
                        <span>3</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                      <motion.div
                        whileTap={{ scale: 1.2 }}
                        onClick={() => setRating(4)}
                        className="flex items-center gap-1"
                      >
                        <span>4</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                      <motion.div
                        whileTap={{ scale: 1.2 }}
                        onClick={() => setRating(5)}
                        className="flex items-center gap-1"
                      >
                        <span>5</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="">
                      <textarea
                        rows={5}
                        name=""
                        id=""
                        ref={reviewMsg}
                        required
                        placeholder="Write a review"
                        className="border p-2 rounded-md md:w-1/3 w-full"
                      ></textarea>
                    </div>
                    <div className="w-1/3">
                      <motion.button
                        whileTap={{ scale: 1.2 }}
                        type="submit"
                        className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-md w-full"
                      >
                        Submit
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="max-w-7xl mx-auto xl:px-0 px-4 py-8">
          <h1 className="text-2xl font-bold">You might also like</h1>
          <div className="mt-4">
            <ProductsList data={relatedProducts} />
          </div>
        </section>
      </Helmet>
    </>
  );
};

export default ProductDetails;
