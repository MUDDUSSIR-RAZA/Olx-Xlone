import { Inter } from "next/font/google";
import SwipeBanner from "./components/SwipeBanner";
import AllCategories from "./components/AllCategories";
import BottomImage from "./components/BottomImage";
import FullHeader from "./combinedComponents/FullHeader";
import FullFooter from "./combinedComponents/FullFooter";
import MainFront from "./components/MainFront";
import MyHeader from "./combinedComponents/MyHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <div>
          <MyHeader />
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
