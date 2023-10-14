import LowerHeaderOlx from "@/pages/icons/LowerHeaderOlx";
import Search from "@/pages/icons/Search";
import FirstSearch from "@/pages/miniComponents/FirstSearch";
import SecondSearch from "@/pages/miniComponents/SecondSearch";
import Image from "next/image";
const LowerHeader = () => {
  return (
    <>
      <div className="py-5 flex items-center">
        <div className="mr-5">
          <LowerHeaderOlx />
        </div>
        <div className=" ml-5  mr-6 ">
          <FirstSearch />
        </div>

        <div className=" ml-6 mr-6  ">
          <SecondSearch />
        </div>

        <div className="mr-10">
          <button className="border-b-4 border-dark">
            <span className="font-bold text-dark">Login</span>
          </button>
        </div>

        <div>
          <button className="relative">
            <Image
              src={"/iconSellCompactBorder.svg"}
              width={"90"}
              height={"90"}
            />
            <div className="absolute bottom-2 left-4 flex items-center ">
              <Image
                src={"/iconPlusSell.svg"}
                width={"15"}
                height={"15"}
                className="mr-1 font-weight: 600"
              />
              <span>
                <b>SELL</b>{" "}
              </span>
            </div>
          </button>
        </div>

        <div>
          <div>
            {/* <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 1024 1024"
              >
              <path d="M448 725.33c-152.92 0-277.33-124.41-277.33-277.33S295.08 170.67 448 170.67 725.33 295.08 725.33 448 600.92 725.33 448 725.33zm436.44 98.78v.02L732.52 672.19c48.77-61.78 78.15-139.54 78.15-224.19 0-199.98-162.7-362.67-362.67-362.67S85.33 248.03 85.33 448c0 199.98 162.69 362.67 362.67 362.67 84.63 0 162.41-29.38 224.17-78.15l206.14 206.15h60.36v-60.33l-54.23-54.23z"></path>
              </svg>
            </div> */}
            {/* <input
              spellcheck="false"
              className="border border-gre-600"
              autocomplete="location-search"
              value="Pakistan"
              placeholder="Search city, area or locality"
            /> */}
            {/* <div>
            <img
            src="/assets/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg"
            alt="Dropdown trigger"
            class="_0089035e"
            />
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LowerHeader;
