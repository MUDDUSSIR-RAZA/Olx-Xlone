import Image from "next/image";
import Link from "next/link";

const UpperFooter = () => {
  return (
    <>
      <div className="w-full h-auto bg-grey">
        <div className="w-4/5 h-4/5 my-auto mx-auto flex">
          <div className="my-6 mx-8 w-96">
            <div className="text-dark font-semibold text-sm">
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

          <div  className="my-6 mx-8 w-96">
            <div className="text-dark font-semibold text-sm">TRENDING SEARCHES</div>
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

          <div  className="my-6 mx-8 w-96">
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

          <div  className="my-6 mx-8 w-96">
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

          <div  className="my-6 mx-8 w-96">
            <div>
              <div>FOLLOW US</div>
              <div className="flex">
                <div className=" mr-3">
                  <Image
                    alt={"iconTwitter"}
                    src={`/iconTwitter.svg`}
                    width={"84"}
                    height={"28"}
                  />
                </div>
                <div className=" mr-3">
                  <Image
                    alt={"iconFacebook"}
                    src={`/iconFacebook.svg`} 
                    width={"84"}
                    height={"28"}
                  />
                </div>
                <div className=" mr-3">
                  <Image
                    alt={"iconYoutube"}
                    src={`/iconYoutube.svg`} 
                    width={"84"}
                    height={"28"}
                  />
                </div>
                <div className=" mr-3">
                  <Image
                    alt={"iconInstagram"}
                    src={`/iconInstagram.svg`} 
                    width={"84"}
                    height={"28"}
                  />
                </div>
              </div>
            </div>

            <br />
            <br />

            <div className="flex">
              <div className=" mr-3">
                <Image
                  alt={"iconAppStore"}
                  src={`/iconAppStore.svg`}
                  width={"128"}
                  height={"40"}
                />
              </div>
              <div className=" mr-3">
                <Image
                  alt={"iconAppStore"}
                  src={`/iconGooglePlay.svg`}
                  width={"128"}
                  height={"40"}
                />
              </div>
              <div className=" mr-3">
                <Image
                  alt={"iconAppGallery"}
                  src={`/iconAppGallery.svg`}
                  width={"128"}
                  height={"40"}
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
