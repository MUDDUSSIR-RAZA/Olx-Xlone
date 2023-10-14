import Search from "@/pages/icons/Search";
import Image from "next/image";

const FirstSearch = () => {
  return (
    <>
      <div className="border-2 border-dark rounded p-2.5 pr-4 bg-white focus-within:border-input">
        <div className="flex items-center">
          <div className="mr-3">
            <Search length={"16"} />
          </div>

          <input
            spellCheck="false"
            className="pr-5  focus:outline-none"
            autoomplete="location-search"
            placeholder="Search city, area or locality"
            value="Pakistan"
          ></input>

          <div>
            <Image
              alt="iconArrowDown"
              src={"/iconArrowDown.svg"}
              width={"15"}
              height={"15"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default FirstSearch;
