import Image from "next/image";
import Link from "next/link";

const UpperFooter = () => {
  return (
    <>
      <div className="w-full h-auto bg-grey">
        <hr className="text-dark" />
        <div className="w-11/12 h-4/5 mx-auto flex bg-grey">
          <div className="mx-8 mt-6 mb-14 w-96">
            <div className="text-dark font-black text-sm">
              POPULAR CATEGORIES
            </div>
            <br />
            <div>
              <div className="text-xs mb-1">
                <Link href={"/"}>Cars</Link>
              </div>
              <div className="text-xs mb-1">
                <Link href={"/"}>Flats for rent</Link>
              </div>
              <div className="text-xs mb-1">
                <Link href={"/"}>Flats for rent</Link>
              </div>
              <div className="text-xs mb-1">
                <Link href={"/"}>Jobs</Link>
              </div>
            </div>
          </div>

          <div className="mx-8 mt-6 mb-12 w-96">
            <div className="text-dark font-semibold text-sm">
              TRENDING SEARCHES
            </div>
            <br />
            <div>
              <div className="text-xs mb-1">
                <Link href={"/"}>Bikes</Link>
              </div>
              <div className="text-xs mb-1">
                <Link href={"/"}>Watches</Link>
              </div>
              <div className="text-xs mb-1">
                <Link href={"/"}>Books</Link>
              </div>
              <div className="text-xs mb-1">
                <Link href={"/"}>Dogs</Link>
              </div>
            </div>
          </div>

          <div className="mx-8 mt-6 mb-12 w-96">
            <div className="text-dark font-semibold text-sm">ABOUT US</div>
            <br />
            <div>
              <div className="text-xs mb-1">
                <Link href={"/"}>About Dubizzle Group</Link>
              </div>
              <div className="text-xs mb-1">
                <Link href={"/"}>OLX Blog</Link>
              </div>
              <div className="text-xs mb-1">
                <Link href={"/"}>Contact Us</Link>
              </div>
              <div className="text-xs mb-1">
                <Link href={"/"}>OLX for Businesses</Link>
              </div>
            </div>
          </div>

          <div className="mx-8 mt-6 mb-12 w-96">
            <div className="text-dark font-semibold text-sm">OLX</div>
            <br />
            <div>
              <div className="text-xs mb-1">
                <Link href={"/"}>Help</Link>
              </div>
              <div className="text-xs mb-1">
                <Link href={"/"}>Sitemap</Link>
              </div>
              <div className="text-xs mb-1">
                <Link href={"/"}>Terms of use</Link>
              </div>
              <div className="text-xs mb-1">
                <Link href={"/"}>Privacy policy</Link>
              </div>
            </div>
          </div>

          <div className="mx-8 mt-6 mb-12 w-400px">
            <div>
              <div className="font-extrabold text-sm">FOLLOW US</div>
              <div className="flex">
                <div className="w-8 h-8 flex justify-start items-center ">
                  <Image
                    alt={"iconTwitter"}
                    src={`/iconTwitter.svg`}
                    width={"24"}
                    height={"24"}
                    className="min-w-24px flex justify-center items-center "
                  />
                </div>
                <div className="w-8 h-8 flex justify-start items-center ">
                  <Image
                    alt={"iconFacebook"}
                    src={`/iconFacebook.svg`}
                    width={"24"}
                    height={"24"}
                    className="min-w-24px flex justify-center items-center "
                  />
                </div>
                <div className="w-8 h-8 flex justify-start items-center ">
                  <Image
                    alt={"iconYoutube"}
                    src={`/iconYoutube.svg`}
                    width={"24"}
                    height={"24"}
                    className="min-w-24px flex justify-center items-center "
                  />
                </div>
                <div className="w-8 h-8 flex justify-start items-center ">
                  <Image
                    alt={"iconInstagram"}
                    src={`/iconInstagram.svg`}
                    width={"24"}
                    height={"24"}
                    className="min-w-24px flex justify-center items-center "
                  />
                </div>
              </div>
            </div>

            <br />

            <div className="flex">
              <div className="w-24 h-12 flex justify-start items-center ">
                <Image
                  alt={"iconAppStore"}
                  src={`/iconAppStore.svg`}
                  width={"84"}
                  height={"28"}
                  className="min-w-24px flex justify-center items-center "
                />
              </div>
              <div className="w-24 h-12 flex justify-start items-center ">
                <Image
                  alt={"iconAppStore"}
                  src={`/iconGooglePlay.svg`}
                  width={"84"}
                  height={"28"}
                  // className="min-w-90px min-h-90px"
                />
              </div>
              <div className="w-24 h-12 flex justify-start items-center ">
                <Image
                  alt={"iconAppGallery"}
                  src={`/iconAppGallery.svg`}
                  width={"84"}
                  height={"28"}
                  // className="min-w-90px min-h-90px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UpperFooter;
