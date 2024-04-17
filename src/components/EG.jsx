import "./EG.css";

const PriceCards = ({ data }) => {
  return (
    <div>
      <div className="custom-slider flex justify-center items-center gap-10 max-lg:flex-wrap">
        {data?.map((sl, index) => (
          <div
            className="text-center border-2 border-blue hover:bg-navyblue rounded-3xl overflow-hidden px-16 py-6 hover:text-white transition-all"
            key={index}
          >
            <h4 className="group-hover:text-white text-2xl font-bold mb-3 ">
              {sl.heading}
            </h4>
            <h2 className="text-5xl sm:text-65xl font-extrabold mb-3 group-hover:text-white">
              ${sl.price}
            </h2>
            <p className="text-sm font-medium text-darkgrey mb-6">{sl.user}</p>
            <a
              target="_blank"
              href={sl?.link}
              className="text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6"
            >
              Tanlov sizdan
            </a>
            <div className="overflow-scroll">
              {sl?.features?.map((feature, index) => (
                <h3
                  key={index}
                  className="text-sm font-medium text-darkgrey mb-3 mt-6"
                >
                  {feature}
                </h3>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCards;
