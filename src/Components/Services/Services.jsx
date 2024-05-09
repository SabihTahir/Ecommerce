/* eslint-disable react/no-unknown-property */
import {motion } from "framer-motion";
import serviceData from "../../assets/data/serviceData";
const Services = () => {
  

  return (
    <>
      <section className="max-w-7xl mx-auto py-12 xl:px-0 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6">
          {serviceData.map((item) => {
            return (
              <motion.div
              whileHover={{scale: 1.1}}
                className={`py-4 px-6 ${[item.bg]} rounded-lg`}
                key={item.id}
              >
                <div className="flex flex-col items-start gap-2">
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
                      d={item.d}
                    />
                  </svg>

                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <p className="text-sm">{item.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
