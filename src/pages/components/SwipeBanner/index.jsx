import { useState, useEffect } from "react";

function SwipeBanner() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 1 ? 2 : 1));
    }, 3000); // Change the interval time (in milliseconds) as per your preference

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            width: "196vw",
            overflow: "hidden",
            margin:"1vw 5vw",
          }}
        >
          <div
            style={{
              width: "100%",
              transform: `translateX(-${(currentSlide - 1) * 100}%)`,
              transition: "transform .5s ease-in-out",
              display: "flex",
            }}
          >
            <div>
              <a
                href="https://onelink.to/6p6zqr"
                title="Sell it, Search it, Buy it"
                rel="noopener noreferrer"
                target="_blank"
              />
              <div>
                <img src={"/swipeBanner.webp"} style={{ width: "90%" }} />
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              transform: `translateX(-${(currentSlide - 1) * 100}%)`,
              transition: "transform .5s ease-in-out",
              display: "flex",
            }}
          >
            <div>
              <a
                href="https://onelink.to/6p6zqr"
                title="Sell it, Search it, Buy it"
                rel="noopener noreferrer"
                target="_blank"
              />
              <div>
                <img src={"/swipeBanner.webp"} style={{ width: "90%"  }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SwipeBanner;
