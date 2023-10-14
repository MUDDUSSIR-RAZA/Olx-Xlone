import Search from "@/pages/icons/Search";

const SecondSearch = () => {
  return (
    <>
      <div className="mr-6 border-2 border-dark rounded p-2.5 pr-4 bg-white focus-within:border-input">
        <div aria-label="Search input " className="flex items-center">
          <div>
            <div>
              <input
                // type="search"
                spellcheck="false"
                autocomplete="free-text-search"
                value=""
                placeholder="Find Cars, Mobile Phones and more..."
                className="pr-100  focus:outline-none"
              />
            </div>
          </div>
          <button>
            <Search length={"25"} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SecondSearch;
