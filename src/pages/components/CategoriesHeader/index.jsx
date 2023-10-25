import Image from "next/image";
import Link from "next/link";

const CategoriesHeader = () => {
  return (
    <>
      <div className="flex items-center shadow p-3 text-sm">
        <div className="flex items-center w-87% mx-auto pt-3">
          {/* <div className="flex items-center mr-6 font-semibold"> */}
            <div className="mr-2">
              <Link href={"#"}>All Categories</Link>
            </div>
            <div>
              <div>
                <Image
                  alt="iconArrowDown"
                  src={"/iconArrowDown.svg"}
                  width={"20"}
                  height={"20"}
                />
              </div>
            </div>
          </div>
          <div className="mr-6">
            <Link href={"#"}>Mobile Phones</Link>
          </div>
          <div className="mr-6">
            <Link href={"#"}>Cars</Link>
          </div>
          <div className="mr-6">
            <Link href={"#"}>Motorcycles</Link>
          </div>
          <div className="mr-6">
            <Link href={"#"}>Houses</Link>
          </div>
          <div className="mr-6">
            <Link href={"#"}>TV-Video-Audio</Link>
          </div>
          <div className="mr-6">
            <Link href={"#"}>Tablets</Link>
          </div>
          <div className="mr-6">
            <Link href={"#"}>Land & Plots</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesHeader;
