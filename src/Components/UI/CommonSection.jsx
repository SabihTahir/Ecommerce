/* eslint-disable react/prop-types */
import CommonImg from "../../assets/images/common-section-bg.jpg";

const CommonSection = ({ title }) => {
  return (
    <>
      <section>
        <div className="relative w-full md:h-56 h-36 bg-[#0a1d37]">
          <img src={CommonImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 w-full h-full">
            <div className="text-white flex items-center justify-center h-full">
              <h2 className="text-4xl font-bold mb-5">{title}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonSection;
