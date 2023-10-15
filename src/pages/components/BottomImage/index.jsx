import Image from "next/image";

const BottomImage = () => {
  return (
    <>
      <div className="h-4/6 w-full bg-bottomImage">
        <div className="w-4/5 mx-auto my-9 flex">
          <div>
            <Image
              alt={"olxMobileApp"}
              src={`/olxMobileApp.webp`}
              width={"440"}
              height={"200"}
            />
          </div>

          <div className="w-96 mx-5">
            <div className="text-dark text-3xl font-black" >TRY THE OLX APP</div>
            <br />
            <div className="text-2xl">
              Buy, sell and find just about anything using the app on your
              mobile.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BottomImage;
