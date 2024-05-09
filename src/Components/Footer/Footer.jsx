import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="py-10 bg-[#0a1d37] text-white">
        <div className="max-w-7xl mx-auto xl:px-0 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <div className="">
                  <h1 className="font-bold text-3xl">Ecommerce</h1>
                </div>
              </div>
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
                consequuntur, earum, ea nulla eius suscipit magni quas fugit,
                delectus cupiditate non! Praesentium nulla officiis eligendi
                placeat, autem dignissimos enim quas?
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-xl font-semibold">Top Categories</h1>
              <ul className="flex flex-col items-start gap-2">
                <li>
                  <Link to="#">Mobile Phones</Link>
                </li>
                <li>
                  <Link to="#">Modern Sofa</Link>
                </li>
                <li>
                  <Link to="#">Arm Chair</Link>
                </li>
                <li>
                  <Link to="#">Smart Watches</Link>
                </li>
              </ul>
            </div>
            {/*  */}
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-xl font-semibold">Useful Links</h1>
              <ul className="flex flex-col items-start gap-2">
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            {/*  */}
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-xl font-semibold">Contact</h1>
              <ul className="flex flex-col items-start gap-6">
                <li className="flex items-center gap-2">
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
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <p>123 Street, New York, USA</p>
                </li>
                <li className="flex items-center gap-2">
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
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                  <p>+012 xxx xxxxxx</p>
                </li>
                <li className="flex items-center gap-2">
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <p>pYFkA@example.com</p>
                </li>
              </ul>
            </div>
          </div>
          {/* Copyright */}
          <p className="text-center text-sm mt-6">Copyright &copy; {year} . All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
