import Search from "@/pages/icons/Search";

const SecondSearch = () => {
  const handleInputChange = () => {

  }
  return (
    <>
      <div className="flex items-center h-full w-95%">
        {/* <div className="border-t-2 border-b-2 border-l-2 border-dark rounded-l p-2.5 pr-4 bg-white focus-within:border-input"> */}
        <div className="focus-within:border-input bg-white border-dark rounded-l border-t-2 border-b-2 border-l-2 h-full w-full">
          <div aria-label="Search input " className="flex items-center w-full h-full">
              <div className="h-full w-full flex">
                <input
                  type="search"
                  spellheck="false"
                  autoComplete="free-text-search"
                  placeholder="Find Cars, Mobile Phones and more..."
                  className="ml-3 w-full h-full focus:outline-none flex-1"
                  onChange={handleInputChange}
                />
              </div>
            </div>
        </div>
        <div className="display: flex justify-center w-12 h-47px bg-dark rounded-r">
          <button className="fill-white">
            <Search length={"25"} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SecondSearch;
