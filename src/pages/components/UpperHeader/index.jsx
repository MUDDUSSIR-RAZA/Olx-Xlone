import Property from "@/pages/icons/Property";
import UpperHeaderOlx from "@/pages/icons/UpperHeaderOlx";
import Motor from "@/pages/icons/Motors";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function UpperHeader() {
  return (
    <>
      <div className="flex items-center pl-24 pt-3 bg-headerBg">
        <UpperHeaderOlx />

        <Motor />

        <Property />
      </div>
    </>
  );
}
