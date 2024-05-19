import bannerImg from "/images/home/banner.png";
import foodOne from "/images/home/b-food1.png";
const Banner = () => {
  return (
    <div>
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] top-100%">
        <div className="flex flex-col items-center justify-center gap-8 py-24 md:flex-row">
          {/* left side content start */}
          <div className="px-4 md:w-1/2 space-y-7">
            <h1 className="text-4xl font-bold leading-snug md:text-5xl md:leading-snug">
              Dive into Delights Of Delectable{" "}
              <span className="text-green">Food</span>
            </h1>
            <p className="text-xl text-[#4A4A4A] ">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>

            <button className="px-8 font-semibold text-white rounded-full btn bg-green">
              Order Now
            </button>
          </div>
          {/* left side content end  */}
          {/* right side content start  */}
          <div className="md:w-1/2">
            <img src={bannerImg} alt="" />
            <div className="flex flex-col items-center justify-around gap-4 md:flex-row -mt-14">
              <div className="flex items-center w-64 gap-3 px-3 py-2 bg-white shadow-md rounded-2xl">
                <div>
                  <img src={foodOne} alt="" className="rounded-2xl" />
                </div>
                <div>
                  <h5>Spicy noodles</h5>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-yellow-500 mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-yellow-500 mask mask-star-2"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-yellow-500 mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-yellow-500 mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-yellow-500 mask mask-star-2"
                    />
                  </div>
                  <p className="text-red">$18.00</p>
                </div>
              </div>
              <div className="hidden w-64 gap-3 px-3 py-2 bg-white shadow-md sm: it:ems-center sm md:flex rounded-2xl sm:flex">
                <div>
                  <img src={foodOne} alt="" className="rounded-2xl" />
                </div>
                <div>
                  <h5>Spicy noodles</h5>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-yellow-500 mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-yellow-500 mask mask-star-2"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-yellow-500 mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-yellow-500 mask mask-star-2"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="bg-yellow-500 mask mask-star-2"
                    />
                  </div>
                  <p className="text-red">$18.00</p>
                </div>
              </div>
            </div>
          </div>
          {/* right side content end  */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
