import Link from "next/link";

const Hero = () => {
  return (
    <div
      className=" mt-32 lg:mt-20 flex-col overflow-hidden relative flex min-h-[678px] w-full items-stretch  max-md:max-w-full bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <div className="w-full min-h-[678px] bg-[#0000009e] flex justify-center items-center">
        <div className="relative flex w-[461px] max-w-full flex-col justify-center items-center">
          <div className="text-white text-5xl text-center font-extrabold leading-normal max-md:max-w-full max-md:text-4xl max-md:leading-tight">
          Dry Fruits Delights
          </div>
          <div className="text-white text-center text-lg font-normal  leading-7 mt-7 max-md:max-w-full">
            Discover pure goodness at Naturally Nutritious. Dive into a world of
            premium, handpicked dry fruits that redefine snacking. Elevate your
            taste, elevate your health. Welcome to the essence of wholesome
            indulgence
          </div>
          <Link href={"#products"}  className="text-white text-xl font-medium leading-normal bg-orange-700 justify-center mt-6 px-10 py-3 rounded-[10px] ">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
