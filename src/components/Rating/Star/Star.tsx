import clsx from "clsx";
import { StarProps, StarSize } from "../../../types";
import classes from "./Star.module.css";

const emptyStar = {
  svgProps: {
    viewBox: "0 0 243.317 243.317",
  },
  childProps: {
    d: `M242.949,93.714c-0.882-2.715-3.229-4.694-6.054-5.104l-74.98-10.9l-33.53-67.941c-1.264-2.56-3.871-4.181-6.725-4.181
  c-2.855,0-5.462,1.621-6.726,4.181L81.404,77.71L6.422,88.61C3.596,89.021,1.249,91,0.367,93.714
  c-0.882,2.715-0.147,5.695,1.898,7.688l54.257,52.886L43.715,228.96c-0.482,2.814,0.674,5.658,2.983,7.335
  c2.309,1.678,5.371,1.9,7.898,0.571l67.064-35.254l67.063,35.254c1.097,0.577,2.296,0.861,3.489,0.861c0.007,0,0.014,0,0.021,0
  c0,0,0,0,0.001,0c4.142,0,7.5-3.358,7.5-7.5c0-0.629-0.078-1.30-0.223-1.824l-12.713-74.117l54.254-52.885
  C243.096,99.41,243.832,96.429,242.949,93.714z M173.504,146.299c-1.768,1.723-2.575,4.206-2.157,6.639l10.906,63.581
  l-57.102-30.018c-2.185-1.149-4.795-1.149-6.979,0l-57.103,30.018l10.906-63.581c0.418-2.433-0.389-4.915-2.157-6.639
  l-46.199-45.031l63.847-9.281c2.443-0.355,4.555-1.889,5.647-4.103l28.55-57.849l28.55,57.849c1.092,2.213,3.204,3.748,5.646,4.103
  l63.844,9.281L173.504,146.299z`,
  },
};

const activeStar = {
  svgProps: {
    viewBox: "0 0 53.867 53.867",
  },
  childProps: {
    points: `26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 
    10.288,52.549 13.467,34.013 0,20.887 18.611,18.182`,
    style: { fill: "#EFCE4A" },
  },
};

const Star = ({
  size = StarSize.medium,
  active,
  id,
  disabled = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: StarProps) => {
  return (
    <svg
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave(id)}
      onClick={() => onClick(id)}
      className={clsx(classes.Star, disabled && classes.Star__disabled)}
      width={size}
      height={size}
      {...(active ? activeStar.svgProps : emptyStar.svgProps)}>
      {active ? (
        <polygon {...activeStar.childProps} />
      ) : (
        <path {...emptyStar.childProps} />
      )}
    </svg>
  );
};

export default Star;
