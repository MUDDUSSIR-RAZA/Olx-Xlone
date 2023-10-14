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
            spellcheck="false"
            className="pr-5  focus:outline-none"
            autocomplete="location-search"
            placeholder="Search city, area or locality"
            value="Pakistan"
          ></input>

          <div>
            <Image src={"/iconArrowDown.svg"} width={"15"} height={"15"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default FirstSearch;
