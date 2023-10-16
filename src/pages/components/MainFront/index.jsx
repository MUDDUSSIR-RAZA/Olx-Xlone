import Image from "next/image";
import Link from "next/link";

const MainFront = () => {
  const list = {
    category: "Mobiles",
    items: [
      {
        category: "Tablets",
        adDetail: {
          Title: "sdvfdsfdsf",
          Description: "ahsjkhdsafdshfs",
          Brand: "dsfdsf",
          Condition: "sdfsfd",
        },
        price: "dfdsf",
        image: "",
        location: "",
        userDetail: {
          userName: "asfdfds",
          number: "dsfdsf",
        },
      },
    ],
  };
  return (
    <>
      <div className="w-full">
        <div className="w-87% h-96 mx-auto my-auto ">
          <div className="flex justify-between ">
            <div className="text-2xl font-semibold">Mobile Phones</div>
            <div className="text-lightBlue">
              <Link href={"/"}>View more</Link>
            </div>
          </div>

          <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
            <div className="border-b h-2/3">
              <Image src={"/olxMobileApp.webp"} width={"288"} height={"100"} className="w-full h-full rounded-md " />
            </div>

            <div className=" w-full h-3/4 flex items-center">
              <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                <div className="w-full h-2/4 flex flex-col justify-between">
                  <div className="font-semibold text-dark text-sm tracking-wide">RS 18,000</div>
                  <div className="text-lg text-dark">Oppo a5s 3/32</div>
                </div>
                <div className="w-full h-2/4  flex flex-col justify-end text-text text-sm">
                  <div>Others, Faisalabad</div>
                  <div>1 day ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainFront;
