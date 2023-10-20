import Search from "@/pages/icons/Search";
import Image from "next/image";

const FirstSearch = () => {
  const handleInputChange = () => {};
  return (
    <>
      <div className="h-full w-full">
        <div className="border-2 border-dark rounded flex items-center  bg-white focus-within:border-input h-full">
          <div className="ml-3">
            <Search length={"16"} />
          </div>

          <input
            spellCheck="false"
            className="ml-3 w-full h-full focus:outline-none flex-1"
            autoomplete="location-search"
            placeholder="Search city, area or locality"
            value="Pakistan"
            onChange={handleInputChange}
          />

          <div className="mr-3">
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
