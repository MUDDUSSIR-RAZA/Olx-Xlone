import Image from "next/image";

const BottomImage = () => {
  return (
    <>
      <div className="w-full bg-bottomImage">
        <div className="w-4/5 mx-auto flex">
          <div>
            <Image
              alt={"olxMobileApp"}
              src={`/olxMobileApp.webp`}
              width={"440"}
              height={"200"}
            />
          </div>

          <div className="w-96 mx-auto my-auto">
            <div className="text-dark text-3xl font-extrabold">
              TRY THE OLX APP
            </div>
            <br />
            <div className="text-1xl">
              Buy, sell and find just about anything using the app on your
              mobile.
            </div>
          </div>

          <div className="my-auto mx-5">
            <div className="border h-40"></div>
          </div>

          <div className="my-auto mx-auto">
            {/* <div>
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
            <br /> */}

            <div className="font-semibold text-1xl mb-3">
              GET YOUR APP TODAY
            </div>

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
export default BottomImage;
