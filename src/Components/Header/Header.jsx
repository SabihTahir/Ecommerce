/* eslint-disable react/no-unknown-property */
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import profilePic from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userAuth from "../../Custom-hooks/UserAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [profileMenu, setProfileMenu] = useState(true);
  const [changeIcon, setChangeIcon] = useState(false);

  const { currentUser } = userAuth();
  const handleMobileMenu = () => {
    setOpen(!open);
    setChangeIcon(!changeIcon);
  };

  const handleProfileMenu = () => {
    setProfileMenu(!profileMenu);
    console.log(profileMenu);
  };

  const navigate = useNavigate();

  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky");
        headerRef.current.classList.add("bg-[#fdefe6]");
        headerRef.current.classList.remove("bg-white");
      } else {
        headerRef.current.classList.remove("sticky");
        headerRef.current.classList.add("bg-white");
        headerRef.current.classList.remove("bg-[#fdefe6]");
      }
    });
  };

  const handleLogout = () => {
    try {
      signOut(auth);
      toast.success("Logout Successful");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  return (
    <>
      <nav ref={headerRef} className="bg-white shadow-sm py-3 top-0 z-50">
        <div className="max-w-7xl mx-auto xl:px-0 px-3">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            className="flex items-center justify-between"
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-12">
                <img src={logo} alt="Logo" className="img-fluid" />
              </div>
              <div className="">
                <h1 className="font-bold">Ecommerce</h1>
              </div>
            </div>
            {/* Navigation */}
            <div className="md:flex hidden">
              <ul className="flex items-center gap-4">
                <li>
                  <NavLink to="home" className="text-lg">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="shop" className="text-lg">
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink to="cart" className="text-lg">
                    Cart
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* icons */}
            <div className="flex items-center gap-6">
              <div className="relative">
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 rounded-full bg-red-500 text-white text-xs w-3 h-3 flex items-center justify-center">
                  1
                </span>
              </div>
              <motion.div
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate("/cart")}
                className="relative cursor-pointer"
              >
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
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 rounded-full bg-red-500 text-white text-xs w-3 h-3 flex items-center justify-center">
                  {totalQuantity}
                </span>
              </motion.div>
              {/* Profile */}
              <div
                onClick={handleProfileMenu}
                className="rounded-full w-8 h-8 relative"
              >
                <div className="flex items-center gap-2">
                  <motion.img
                    whileTap={{ scale: 1.2 }}
                    src={
                      currentUser
                        ? currentUser.photoURL
                          ? currentUser.photoURL
                          : profilePic
                        : profilePic
                    }
                    alt=""
                    className="img-fluid cursor-pointer"
                  />
                  {currentUser ? (
                    <span className="font-medium capitalize">
                      {currentUser.displayName}
                    </span>
                  ) : null}
                </div>
                <motion.div
                  animate={{ x: profileMenu ? [0, 100] : [100, 0] }}
                  className={`${
                    profileMenu ? "hidden" : "block"
                  } absolute top-14 right-1 border border-[var(--primary-color)] py-2 px-8 rounded-lg shadow-sm bg-white z-50`}
                >
                  {currentUser ? (
                    <span
                      onClick={handleLogout}
                      className="text-lg cursor-pointer"
                    >
                      Logout
                    </span>
                  ) : (
                    <ul className="flex flex-col gap-3 text-lg">
                      <li>
                        <Link to="/login" className="cursor-pointer">
                          LogIn
                        </Link>
                      </li>
                      <li>
                        <Link to="/signup" className="cursor-pointer">
                          SignUp
                        </Link>
                      </li>
                    </ul>
                  )}
                </motion.div>
              </div>
              {/* Icon for Mobile menu */}
              <motion.div
                whileTap={{ scale: 0.75 }}
                onClick={handleMobileMenu}
                className="md:hidden flex"
              >
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
                    d={`${
                      changeIcon
                        ? "M6 18 18 6M6 6l12 12"
                        : "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    }`}
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
          {/* Mobile Menu */}
          <motion.div
            animate={{ x: open ? 0 : 300 }}
            className={`${open ? "block" : "hidden"} h-screen py-10`}
          >
            <ul className="flex flex-col items-center gap-4">
              <li>
                <NavLink to="home" className="text-2xl">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="shop" className="text-2xl">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="cart" className="text-2xl">
                  Cart
                </NavLink>
              </li>
            </ul>
          </motion.div>
        </div>
      </nav>
    </>
  );
};

export default Header;
