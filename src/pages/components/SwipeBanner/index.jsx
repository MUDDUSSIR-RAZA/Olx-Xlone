import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function SwipeBanner() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 1 ? 2 : 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden">
        <div
          style={{
            display: "flex",
            width: "196vw",
            overflow: "hidden",
            margin: "2vw 8vw",
          }}
        >
          <div
            style={{
              width: "100%",
              transform: `translateX(-${(currentSlide - 1) * 100}%)`,
              transition: "transform .1s ease-in-out",
              display: "flex",
            }}
          >
            <div className="rounded-lg">
              <Link
                href="https://onelink.to/6p6zqr"
                title="Sell it, Search it, Buy it"
                rel="noopener noreferrer"
                target="_blank"
              />
              <div>
                {/* <Image
                  src={"/swipeBanner.webp"}
                  width={"1280"}
                  height={"180"}
                /> */}
                <img src={"/swipeBanner.webp"} style={{ width: "1280px" ,height :"180px" , borderRadius:"11px" }} />
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              transform: `translateX(-${(currentSlide - 1) * 100}%)`,
              transition: "transform .1s ease-in-out",
              display: "flex",
            }}
          >
            <div>
              <Link
                href="https://onelink.to/6p6zqr"
                title="Sell it, Search it, Buy it"
                rel="noopener noreferrer"
                target="_blank"
              />
              <div>
                <img src={"/swipeBanner.webp"} style={{ width: "1280px" ,height :"180px",  borderRadius:"11px" }} />
                {/* <Image
                  src={"/swipeBanner.webp"}
                  width={"1280"}
                  height={"100"}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SwipeBanner;
