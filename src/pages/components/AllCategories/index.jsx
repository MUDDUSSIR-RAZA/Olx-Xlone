import Image from "next/image";

const AllCategories = () => {
  const Categories = [
    "Mobiles",
    "Vehicles",
    "Property For Sale",
    "Electronics & Home Appliances",
    "Bikes",
    "Business, Industrial & Agriculture",
    "Services",
    "Jobs",
    "Animals",
    "Furniture & Home Decor",
    "Fashion & Beauty",
    "Books, Sports & Hobbies",
    "Kids",
    "Property For Rent",
  ];
  return (
    <>
      <div className="pl-24 pt-3">
        <div className=" font-bold text-dark text-2xl">
          <h1>All Categories</h1>
        </div>

        <div className="flex flex-wrap">
          {Categories.map((m) => (
            <div className="mb-6 my-5 mr-20 flex flex-col items-center">
              <div>
                <Image src={`/${m}.png`} width={"90"} height={"90"} />
              </div>
              <div className="w-7px text-center">
                <b>{m}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllCategories;
