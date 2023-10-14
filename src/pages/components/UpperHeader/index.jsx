import Property from "@/pages/icons/Property";
import UpperHeaderOlx from "@/pages/icons/UpperHeaderOlx";
import Motor from "@/pages/icons/Motors";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function UpperHeader() {
  return (
    <>
      <div className="flex items-center mt-3 h-19">
        
        <UpperHeaderOlx/>

        <Motor />

        <Property />
      </div>
    </>
  );
}
