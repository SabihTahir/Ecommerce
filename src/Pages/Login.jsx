/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import { motion } from "framer-motion";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        setLoading(false);
        toast.success("Login Successful");
        navigate("/checkout");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section className="py-12">
        <div className="max-w-7xl mx-auto xl:px-0 px-4">
          <div className="flex items-center justify-center h-full">
            {loading ? (
              <div>
                <h1 className="font-bold text-3xl">Loading .....</h1>
              </div>
            ) : (
              <div className="bg-[var(--primary-color)] text-white p-6 rounded-lg w-1/3">
                <form
                  onSubmit={handleLogin}
                  className="flex flex-col gap-8 w-full"
                >
                  <div className="text-center">
                    <h1 className="text-2xl font-semibold">Login</h1>
                  </div>
                  {/* Inputs */}
                  <div className="flex flex-col gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border border-[var(--primary-color)] rounded-lg p-2 w-full text-[var(--primary-color)]"
                      placeholder="Enter you email"
                    />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border border-[var(--primary-color)] rounded-lg p-2 w-full text-[var(--primary-color)]"
                      placeholder="Enter you Password"
                    />
                  </div>
                  <div className="">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      type="submit"
                      className="bg-white text-[var(--primary-color)] px-4 py-2 rounded-lg w-full text-xl font-medium"
                    >
                      Login
                    </motion.button>
                  </div>
                  <div className="flex items-center justify-between ">
                    <p>Don't have an account?</p>
                    <Link to="/signup">Sign Up</Link>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Login;
