import LowerHeaderOlx from "@/pages/icons/LowerHeaderOlx";
import Motor from "@/pages/icons/Motors";
import Property from "@/pages/icons/Property";
import UpperHeaderOlx from "@/pages/icons/UpperHeaderOlx";
import FirstSearch from "@/pages/miniComponents/FirstSearch";
import SecondSearch from "@/pages/miniComponents/SecondSearch";
import Image from "next/image";

const MyHeader = () => {
  return (
    <>
      <div className=" bg-headerBg">
        <div className="flex items-center max-w-89% mx-auto pt-3">
          <UpperHeaderOlx />

          <Motor />

          <Property />
        </div>
        <div className="py-5 flex items-center max-w-89% mx-auto">
          <div className="mr-5">
            <LowerHeaderOlx />
          </div>
          <div className="flex">
            <div >
              <FirstSearch />
            </div>

            <div>
              <SecondSearch />
            </div>
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
                  <b>SELL</b>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyHeader;
