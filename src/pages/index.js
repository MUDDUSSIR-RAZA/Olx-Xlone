import { Inter } from "next/font/google";
import SwipeBanner from "./components/SwipeBanner";
import AllCategories from "./components/AllCategories";
import BottomImage from "./components/BottomImage";
import UpperFooter from "./components/UpperFooter";
import LowerFooter from "./components/LowerFooter";
import FullHeader from "./combinedComponents/FullHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <div>
          <FullHeader />
        </div>
        <div className="mt-52">
          <SwipeBanner />
          <AllCategories />
          <BottomImage />
          <UpperFooter />
          <LowerFooter />
        </div>
      </div>
    </>
  );
}
