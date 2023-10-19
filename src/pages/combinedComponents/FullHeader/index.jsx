import CategoriesHeader from "@/pages/components/CategoriesHeader";
import LowerHeader from "@/pages/components/LowerHeader";
import UpperHeader from "@/pages/components/UpperHeader";

const FullHeader = () => {
  return (
    <>
      <div>
        <div className="fixed top-0 left-0 right-0 w-full z-50 bg-white">
          <UpperHeader />
          <LowerHeader />
        </div>
        <div className="mt-32">
          <CategoriesHeader />
        </div>
      </div>
    </>
  );
};
export default FullHeader;
