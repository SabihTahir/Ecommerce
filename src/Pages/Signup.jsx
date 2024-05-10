import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import { motion } from "framer-motion";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { storage, db } from "../firebase.config";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (file) {
        const storageRef = ref(
          storage,
          `images/${Date.now()}_${userName}_${file.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          null,
          (error) => {
            toast.error(error.message);
            setLoading(false);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then(async (downloadURL) => {
                await updateProfile(user, {
                  displayName: userName,
                  photoURL: downloadURL,
                });
                await setDoc(doc(db, "users", user.uid), {
                  uid: user.uid,
                  displayName: userName,
                  email,
                  photoURL: downloadURL,
                });
                setLoading(false);
                toast.success("Account created successfully");
                navigate("/login");
                setUserName("");
                setEmail("");
                setPassword("");
                setFile(null);
              })
              .catch((error) => {
                toast.error(error.message);
                setLoading(false);
              });
          }
        );
      } else {
        await updateProfile(user, {
          displayName: userName,
        });
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          displayName: userName,
          email,
        });
        setLoading(false);
        toast.success("Account created successfully");
        navigate("/login");
        setUserName("");
        setEmail("");
        setPassword("");
        setFile(null);
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section className="py-12">
        <div className="max-w-7xl mx-auto xl:px-0 px-4">
          <div className="flex items-center justify-center h-full">
            {loading ? (
              <div>
                <h1 className="text-3xl font-semibold">Loading...</h1>
              </div>
            ) : (
              <div className="bg-[var(--primary-color)] text-white p-6 rounded-lg w-1/3">
                <form
                  onSubmit={handleSignup}
                  className="flex flex-col gap-8 w-full"
                >
                  <div className="text-center">
                    <h1 className="text-2xl font-semibold">Sign Up</h1>
                  </div>
                  {/* Inputs */}
                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="border border-[var(--primary-color)] rounded-lg p-2 w-full text-[var(--primary-color)]"
                      placeholder="User Name"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border border-[var(--primary-color)] rounded-lg p-2 w-full text-[var(--primary-color)]"
                      placeholder="Enter your email"
                    />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border border-[var(--primary-color)] rounded-lg p-2 w-full text-[var(--primary-color)]"
                      placeholder="Enter your Password"
                    />
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      className="text-white"
                    />
                  </div>
                  <div className="">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      type="submit"
                      className="bg-white text-[var(--primary-color)] px-4 py-2 rounded-lg w-full text-xl font-medium"
                    >
                      Sign Up
                    </motion.button>
                  </div>
                  <div className="flex items-center justify-between ">
                    <p>Already Have an account?</p>
                    <Link to="/login">Login</Link>
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

export default Signup;
