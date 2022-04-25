import clsx from "clsx";
import { StarProps, StarSize } from "../../types";
import classes from "./Star.module.css";
import { activeStar, emptyStar } from "./utils";

const Star = ({
  size = StarSize.medium,
  active,
  id,
  disabled = false,
  onClick,
}: StarProps) => {
  /**
   * on hover active - nothing
   * on hover inactive - becomes active
   * on hover disabled - nothing
   *
   */

  return (
    <svg
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
