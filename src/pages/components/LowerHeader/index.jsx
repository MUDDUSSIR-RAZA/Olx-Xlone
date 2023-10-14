import LowerHeaderOlx from "@/pages/icons/LowerHeaderOlx";
import Search from "@/pages/icons/Search";
import FirstSearch from "@/pages/miniComponents/FirstSearch";
import SecondSearch from "@/pages/miniComponents/SecondSearch";
import Image from "next/image";
const LowerHeader = () => {
  return (
    <>
      <div className="py-5 flex items-center pl-24 bg-headerBg">
        <div className="mr-5">
          <LowerHeaderOlx />
        </div>
        <div className=" ml-4  mr-5 ">
          <FirstSearch />
        </div>

        <div className="mr-8">
          <SecondSearch />
        </div>

        <div className="mr-10">
          <button className="border-b-2 border-dark">
            <span className="font-bold text-dark">Login</span>
          </button>
        </div>

        <div>
          <button className="relative">
            <Image
              alt="iconSellCompactBorder"
              src={"/iconSellCompactBorder.svg"}
              width={"90"}
              height={"90"}
            />
            <div className="absolute bottom-2 left-4 flex items-center ">
              <Image
                alt="iconPlusSell"
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
      </div>
    </>
  );
};

export default LowerHeader;
