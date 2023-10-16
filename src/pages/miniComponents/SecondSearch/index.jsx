import Search from "@/pages/icons/Search";

const SecondSearch = () => {
  const handleInputChange = () => {

  }
  return (
    <>
      <div className="flex items-center">
        <div className="border-t-2 border-b-2 border-l-2 border-dark rounded-l p-2.5 pr-4 bg-white focus-within:border-input">
          <div aria-label="Search input " className="flex items-center">
            <div>
              <div>
                <input
                  // type="search"
                  spellheck="false"
                  autoComplete="free-text-search"
                  value=""
                  placeholder="Find Cars, Mobile Phones and more..."
                  className="pr-100  focus:outline-none"
                  onChange={handleInputChange}
                />
              </div>
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
