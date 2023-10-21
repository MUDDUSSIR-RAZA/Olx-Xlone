import { Inter } from "next/font/google";
import SwipeBanner from "./components/SwipeBanner";
import AllCategories from "./components/AllCategories";
import BottomImage from "./components/BottomImage";
import FullFooter from "./combinedComponents/FullFooter";
import MainFront from "./components/MainFront";
import MyHeader from "./combinedComponents/MyHeader";
import CategoriesHeader from "./components/CategoriesHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <div>
          <MyHeader />
        </div>
        <div className="mt-32">
          <CategoriesHeader />
          <SwipeBanner />
          <AllCategories />
          <MainFront />
          <BottomImage />
          <FullFooter />
        </div>
      </div>
    </>
  );
}
