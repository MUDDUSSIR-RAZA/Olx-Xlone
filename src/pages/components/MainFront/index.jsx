import Image from "next/image";
import Link from "next/link";

const MainFront = () => {
  const allPosts = [
    {
      category: "Mobile Phones",
      posts: [
        {
          id: "0689f53a-f384-444a-a01a-8770ed180385",
          category: "Tablets",
          adTitle: "ipad",
          adDescription: "kch nahi",
          adBrand: "apple",
          adCondition: "good",
          price: "Rs 100,000",
          image: "/olxMobileApp.webp",
          location: "Majeed SRE Karachi",
        },
        {
          id: "0689f53a-f384-444a-a01a-8770ed180385",
          category: "Tablets",
          adTitle: "ipad",
          adDescription: "kch nahi",
          adBrand: "apple",
          adCondition: "good",
          price: "Rs 100,000",
          image: "/olxMobileApp.webp",
          location: "Majeed SRE Karachi",
        },
        {
          id: "0689f53a-f384-444a-a01a-8770ed180385",
          category: "Tablets",
          adTitle: "ipad",
          adDescription: "kch nahi",
          adBrand: "apple",
          adCondition: "good",
          price: "Rs 100,000",
          image: "/olxMobileApp.webp",
          location: "Majeed SRE Karachi",
        },
        {
          id: "0689f53a-f384-444a-a01a-8770ed180385",
          category: "Tablets",
          adTitle: "ipad",
          adDescription: "kch nahi",
          adBrand: "apple",
          adCondition: "good",
          price: "Rs 100,000",
          image: "/olxMobileApp.webp",
          location: "Majeed SRE Karachi",
        },
        {
          id: "0689f53a-f384-444a-a01a-8770ed180385",
          category: "Tablets",
          adTitle: "ipad",
          adDescription: "kch nahi",
          adBrand: "apple",
          adCondition: "good",
          price: "Rs 100,000",
          image: "/olxMobileApp.webp",
          location: "Majeed SRE Karachi",
        },
      ],
    }, 
  ];

  const posts = [
    {
      id: "0689f53a-f384-444a-a01a-8770ed180385",
      category: "Tablets",
      adTitle: "ipad",
      adDescription: "kch nahi",
      adBrand: "apple",
      adCondition: "good",
      price: "Rs 100,000",
      image: "/olxMobileApp.webp",
      location: "Majeed SRE Karachi",
    },
  ];

  const user = [
    {
      id: "0689f53a-f384-444a-a01a-8770ed180385",
      firstName: "MUHAMMAD MUDDUSSIR",
      lastName: "RAZA",
      email: "muddussir@gmail.com",
      password: "$2a$12$.4mQ1GoWJCGyL1YfKRgw/ucF.Ne2Ugjx41VfJxmE5Ja96w/P/X8Vm",
      number: "03222665645",
      picture:
        "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg",
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="w-87% h-96 mx-auto my-auto mb-5">
          <div className="flex justify-between mb-4">
            <div className="text-2xl font-semibold">Mobile Phones</div>
            <Link
              href={"/"}
              className="text-lightBlue flex font-semibold items-center"
            >
              <div>View more</div>
              <div className="fill-lightBlue -rotate-90 ml-2">
                <Image
                  alt="iconArrowDown"
                  src={"/iconArrowDown.svg"}
                  width={"15"}
                  height={"15"}
                  className="text-lightBlue fill-lightBlue"
                />
              </div>
            </Link>
          </div>

          <div className="flex justify-between">
            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
                    <div className="text-lg text-dark">Oppo a5s 3/32</div>
                  </div>
                  <div className="w-full h-2/4  flex flex-col justify-end text-text text-sm">
                    <div>Others, Faisalabad</div>
                    <div>1 day ago</div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>

            <div className="h-full w-7"></div>

            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
                    <div className="text-lg text-dark">Oppo a5s 3/32</div>
                  </div>
                  <div className="w-full h-2/4  flex flex-col justify-end text-text text-sm">
                    <div>Others, Faisalabad</div>
                    <div>1 day ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-7"></div>

            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
                    <div className="text-lg text-dark">Oppo a5s 3/32</div>
                  </div>
                  <div className="w-full h-2/4  flex flex-col justify-end text-text text-sm">
                    <div>Others, Faisalabad</div>
                    <div>1 day ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-7"></div>

            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
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

        <div className="w-87% h-96 mx-auto my-auto mb-5">
          <div className="flex justify-between mb-4">
            <div className="text-2xl font-semibold">Mobile Phones</div>
            <Link
              href={"/"}
              className="text-lightBlue flex font-semibold items-center"
            >
              <div>View more</div>
              <div className="fill-lightBlue -rotate-90 ml-2">
                <Image
                  alt="iconArrowDown"
                  src={"/iconArrowDown.svg"}
                  width={"15"}
                  height={"15"}
                  className="text-lightBlue fill-lightBlue"
                />
              </div>
            </Link>
          </div>

          <div className="flex justify-between">
            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
                    <div className="text-lg text-dark">Oppo a5s 3/32</div>
                  </div>
                  <div className="w-full h-2/4  flex flex-col justify-end text-text text-sm">
                    <div>Others, Faisalabad</div>
                    <div>1 day ago</div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>

            <div className="h-full w-7"></div>

            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
                    <div className="text-lg text-dark">Oppo a5s 3/32</div>
                  </div>
                  <div className="w-full h-2/4  flex flex-col justify-end text-text text-sm">
                    <div>Others, Faisalabad</div>
                    <div>1 day ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-7"></div>

            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
                    <div className="text-lg text-dark">Oppo a5s 3/32</div>
                  </div>
                  <div className="w-full h-2/4  flex flex-col justify-end text-text text-sm">
                    <div>Others, Faisalabad</div>
                    <div>1 day ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-7"></div>

            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
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

        <div className="w-87% h-96 mx-auto my-auto mb-5">
          <div className="flex justify-between mb-4">
            <div className="text-2xl font-semibold">Mobile Phones</div>
            <Link
              href={"/"}
              className="text-lightBlue flex font-semibold items-center"
            >
              <div>View more</div>
              <div className="fill-lightBlue -rotate-90 ml-2">
                <Image
                  alt="iconArrowDown"
                  src={"/iconArrowDown.svg"}
                  width={"15"}
                  height={"15"}
                  className="text-lightBlue fill-lightBlue"
                />
              </div>
            </Link>
          </div>

          <div className="flex justify-between">
            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
                    <div className="text-lg text-dark">Oppo a5s 3/32</div>
                  </div>
                  <div className="w-full h-2/4  flex flex-col justify-end text-text text-sm">
                    <div>Others, Faisalabad</div>
                    <div>1 day ago</div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>

            <div className="h-full w-7"></div>

            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
                    <div className="text-lg text-dark">Oppo a5s 3/32</div>
                  </div>
                  <div className="w-full h-2/4  flex flex-col justify-end text-text text-sm">
                    <div>Others, Faisalabad</div>
                    <div>1 day ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-7"></div>

            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
                    <div className="text-lg text-dark">Oppo a5s 3/32</div>
                  </div>
                  <div className="w-full h-2/4  flex flex-col justify-end text-text text-sm">
                    <div>Others, Faisalabad</div>
                    <div>1 day ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-7"></div>

            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
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

        <div className="w-87% h-96 mx-auto my-auto mb-5">
          <div className="flex justify-between mb-4">
            <div className="text-2xl font-semibold">Mobile Phones</div>
            <Link
              href={"/"}
              className="text-lightBlue flex font-semibold items-center"
            >
              <div>View more</div>
              <div className="fill-lightBlue -rotate-90 ml-2">
                <Image
                  alt="iconArrowDown"
                  src={"/iconArrowDown.svg"}
                  width={"15"}
                  height={"15"}
                  className="text-lightBlue fill-lightBlue"
                />
              </div>
            </Link>
          </div>

          <div className="flex justify-between">
            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
                    <div className="text-lg text-dark">Oppo a5s 3/32</div>
                  </div>
                  <div className="w-full h-2/4  flex flex-col justify-end text-text text-sm">
                    <div>Others, Faisalabad</div>
                    <div>1 day ago</div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>

            <div className="h-full w-7"></div>

            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
                    <div className="text-lg text-dark">Oppo a5s 3/32</div>
                  </div>
                  <div className="w-full h-2/4  flex flex-col justify-end text-text text-sm">
                    <div>Others, Faisalabad</div>
                    <div>1 day ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-7"></div>

            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
                    <div className="text-lg text-dark">Oppo a5s 3/32</div>
                  </div>
                  <div className="w-full h-2/4  flex flex-col justify-end text-text text-sm">
                    <div>Others, Faisalabad</div>
                    <div>1 day ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-7"></div>

            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
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

        <div className="w-87% h-96 mx-auto my-auto mb-5">
          <div className="flex justify-between mb-4">
            <div className="text-2xl font-semibold">Mobile Phones</div>
            <Link
              href={"/"}
              className="text-lightBlue flex font-semibold items-center"
            >
              <div>View more</div>
              <div className="fill-lightBlue -rotate-90 ml-2">
                <Image
                  alt="iconArrowDown"
                  src={"/iconArrowDown.svg"}
                  width={"15"}
                  height={"15"}
                  className="text-lightBlue fill-lightBlue"
                />
              </div>
            </Link>
          </div>

          <div className="flex justify-between">
            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
                    <div className="text-lg text-dark">Oppo a5s 3/32</div>
                  </div>
                  <div className="w-full h-2/4  flex flex-col justify-end text-text text-sm">
                    <div>Others, Faisalabad</div>
                    <div>1 day ago</div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>

            <div className="h-full w-7"></div>

            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
                    <div className="text-lg text-dark">Oppo a5s 3/32</div>
                  </div>
                  <div className="w-full h-2/4  flex flex-col justify-end text-text text-sm">
                    <div>Others, Faisalabad</div>
                    <div>1 day ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-7"></div>

            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
                    <div className="text-lg text-dark">Oppo a5s 3/32</div>
                  </div>
                  <div className="w-full h-2/4  flex flex-col justify-end text-text text-sm">
                    <div>Others, Faisalabad</div>
                    <div>1 day ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-7"></div>

            <div className="w-80 h-80 flex flex-col justify-between border rounded-md">
              <div className="border-b h-2/3">
                <Image
                  src={"/olxMobileApp.webp"}
                  width={"288"}
                  height={"100"}
                  className="w-full h-full rounded-md "
                />
              </div>

              <div className=" w-full h-3/4 flex items-center">
                <div className=" w-11/12 h-5/6 my-auto mx-auto ">
                  <div className="w-full h-2/4 flex flex-col justify-between">
                    <div className="font-semibold text-dark text-sm tracking-wide">
                      RS 18,000
                    </div>
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
      </div>
    </>
  );
};
export default MainFront;
