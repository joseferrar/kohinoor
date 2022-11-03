import { useRef, useState } from "react";
import { SliderData } from "../../data/SliderData";

const SlideCarousel = () => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <>
      <div className="button-contianer">
        <i
          className="fas fa-chevron-left"
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 200, -10);
          }}
          style={{
            color: "#fff",
            fontSize: 20,
            marginTop: 40,
            backgroundColor: "#0061e0",
            borderRadius: 15,
            width: 30,
            height: 30,
            paddingTop: 5,
            marginLeft: -45,
            textAlign: "center"
          }}
        ></i>

        {arrowDisable && (
          <i
            className="fas fa-chevron-right"
            onClick={() => {
              handleHorizantalScroll(elementRef.current, 25, 100, 10);
            }}
            style={{
              color: "#fff",
              fontSize: 20,
              marginTop: 40,
              backgroundColor: "#0061e0",
              borderRadius: 15,
              width: 30,
              height: 30,
              paddingTop: 5,
              textAlign: "center"
            }}
          ></i>
        )}
      </div>
      <div className="img-container" ref={elementRef}>
        {SliderData.map((placement, i) => (
          <img
            key={i}
            src={placement.img}
            alt="Air Conditioner"
            className="carousel-img"
          />
        ))}
      </div>
    </>
  );
};
export default SlideCarousel;
