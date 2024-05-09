import Helmet from "../Components/Helmet/Helmet";
import { motion } from "framer-motion";
import heroImage from "../assets/images/hero-img.png";
import { useNavigate } from "react-router-dom";
import Services from "../Components/Services/Services";
import ProductsList from "../Components/UI/ProductsList";
import { useState, useEffect } from "react";
import Products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../Components/UI/Clock";

const Home = () => {
  const [TrendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();
  const Navigate = useNavigate();

  useEffect(() => {
    const filteredTrendingProducts = Products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = Products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileProducts = Products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = Products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = Products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  const newArrivalProducts = [...mobileProducts, ...wirelessProducts];

  return (
    <>
      <Helmet title={"Home"}>
        {/* Hero Section */}
        <section className="bg-[var(--hero-bg)]">
          <div className="max-w-7xl mx-auto xl:px-0 px-4">
            <div className="flex md:flex-row flex-col items-center gap-4 md:py-12 py-6">
              <div className="flex items-start flex-col gap-4 w-full">
                <p className="text-sm text-gray-400">
                  Trending produc is {year}
                </p>
                <h2 className="text-5xl capitalize font-medium">
                  Make Your Interior more minimalistic & Modern
                </h2>
                <p className="text-md">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iusto odit culpa, exercitationem dolorem at quis repellat,
                  ipsam quasi esse, placeat fugiat sit magni! Fugiat, labore eum
                  eaque id iure voluptatum.
                </p>
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  onClick={() => Navigate("/shop")}
                  className="uppercase py-3 px-4 bg-blue-600 border border-blue-500 text-white rounded-lg hover:bg-white  hover:text-blue-500"
                >
                  shop now
                </motion.button>
              </div>
              <div className="w-full">
                <img src={heroImage} alt="Hero" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <Services />
        <section className="py-12 max-w-7xl mx-auto xl:px-0 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Trending Products</h1>
          </div>
          <ProductsList data={TrendingProducts} />
        </section>
        <section className="py-12 max-w-7xl mx-auto xl:px-0 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Best Sales</h1>
          </div>
          <ProductsList data={bestSalesProducts} />
        </section>
        <section className="py-12 bg-[#0a1d37]">
          <div className="max-w-7xl mx-auto xl:px-0 px-4">
            <div className="flex md:flex-row flex-col items-center md:justify-between justify-center gap-8">
              <div className="flex flex-col md:items-start items-center gap-6 md:text-start text-center">
                <div className="text-white">
                  <h1 className="capitalize text-lg">limited offers</h1>
                  <p className="capitalize text-lg">quality armchair</p>
                </div>
                <Clock />
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  onClick={() => Navigate("/shop")}
                  className="uppercase py-3 px-4 bg-blue-600 border border-blue-500 text-white rounded-lg hover:bg-white  hover:text-blue-500"
                >
                  Visit store
                </motion.button>
              </div>
              <div className="w-80">
                <img
                  src={counterImg}
                  alt="Counter Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 max-w-7xl mx-auto xl:px-0 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">New Arrivals</h1>
          </div>
          <ProductsList data={newArrivalProducts} />
        </section>
        <section className="py-12 max-w-7xl mx-auto xl:px-0 px-4">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-semibold">Popular in Categories</h1>
          </div>
          <ProductsList data={popularProducts} />
        </section>
      </Helmet>
    </>
  );
};

export default Home;
