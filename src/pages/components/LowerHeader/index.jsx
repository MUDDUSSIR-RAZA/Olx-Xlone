const LowerHeader = () => {
  return (
    <>
      <div className="border border-indigo-600 py-5">
        <svg
          height="20"
          viewBox="0 0 36.289 20.768"
          alt="Logo"
          class="b28a1eb6"
          className="h-9 "
        >
          <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path>
        </svg>
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
          <input
            spellcheck="false"
            className="border border-grey-600"
            autocomplete="location-search"
            // value="Pakistan"
            // placeholder="Search city, area or locality"
          />
          {/* <div>
            <img
              src="/assets/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg"
              alt="Dropdown trigger"
              class="_0089035e"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default LowerHeader;
