import { Inter } from "next/font/google";
import SwipeBanner from "./components/SwipeBanner";
import AllCategories from "./components/AllCategories";
import BottomImage from "./components/BottomImage";
import FullHeader from "./combinedComponents/FullHeader";
import FullFooter from "./combinedComponents/FullFooter";
import MainFront from "./components/MainFront";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <div>
          <FullHeader />
        </div>
        <div>
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
