import { useRef, useState } from "react";

const Photos = [
  "beach",
  "space",
  "office",
  "house",
  "shops",
  "hat",
  "park",
  "food",
  "club",
  "dance",
  "sun",
  "stars",
  "friends",
  "bank",
  "laptop",
  "book",
  "table",
  "mountain",
  "school",
  "watch",
  "bag",
  "family",
  "shops",
  "forrest",
  "city",
  "bus",
  "clock",
  "train",
  "bottle",
];
const SlideCarousel = () => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const unsplashed = "https://source.unsplash.com/200x200/";

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
      <div class="button-contianer">
        <button
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, -10);
          }}
          disabled={arrowDisable}
        >
          Left
        </button>
        <button
          disabled={!arrowDisable}
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, 10);
          }}
        >
          Right
        </button>
      </div>
      <div class="img-container" ref={elementRef}>
        {Photos.map((placement, i) => (
          <img
            src="https://d330d33p6rktbx.cloudfront.net/filters:format(webp)/fit-in/120x120/images/air-conditioner_mtKMV9K.png"
            alt="Air Conditioner"
          />
        ))}
      </div>
    </>
  );
};
export default SlideCarousel;
