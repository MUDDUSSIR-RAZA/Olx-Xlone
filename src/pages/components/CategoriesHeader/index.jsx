import Image from "next/image";
import Link from "next/link";

const CategoriesHeader = () => {
  return (
    <>
      <div>
        <div className="flex items-center items-center">
          <div className="mr-2">
            <Link href={"#"}>
              All Categories
            </Link>
          </div>
          <div>
            <div>
              <Image src={"/iconArrowDown.svg"} width={"20"} height={"20"} />
            </div>
          </div>
        </div>
        <div>
          <Link href={"#"}></Link>
        </div>
        <div>
          <Link href={"#"}></Link>
        </div>
        <div>
          <Link href={"#"}></Link>
        </div>
        <div>
          <Link href={"#"}></Link>
        </div>
        <div>
          <Link href={"#"}></Link>
        </div>
        <div>
          <Link href={"#"}></Link>
        </div>
        <div>
          <Link href={"#"}></Link>
        </div>
      </div>
    </>
  );
};

export default CategoriesHeader;
