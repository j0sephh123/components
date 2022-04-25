import clsx from "clsx";
import classes from "./Rating.module.css";
import { useState, useMemo, useEffect } from "react";
import { Rating, RatingProps } from "../../types";
import Star from "./Star/Star";
import {
  countActiveItems,
  mouseEnterSlice,
  resetActive,
  resetClickedAndActive,
  sliceItems,
} from "./utils";

const RatingFC = ({
  onChange,
  stars = 5,
  className,
  starProps,
}: RatingProps) => {
  const initialRating: Rating[] = useMemo(() => {
    if (typeof stars === "number") {
      return Array.from(Array(stars).keys()).map((i) => ({
        id: i,
        active: false,
        clicked: false,
      }));
    }

    return stars.map((label, i) => ({
      id: i,
      active: false,
      clicked: false,
      label,
    }));
  }, [stars]);

  const [hover, setHover] = useState(false);
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(initialRating);

  const ratingValue = countActiveItems(rating) + 1;

  useEffect(() => {
    if (ratingValue === 0) {
      return;
    }

    onChange(ratingValue);
  }, [ratingValue]);

  const onClick = (index: number) => {
    const { id, active: isActive, clicked: isClicked } = rating[index];

    if (isActive && index === rating.length - 1) {
      return setRating((prev) => prev.map(resetActive));
    }

    if (isActive && index !== 0) {
      if (isClicked) {
        return setRating((prev) => prev.map(resetClickedAndActive));
      }

      return setRating((prev) => sliceItems(prev, index, id));
    }

    setRating((prev) => sliceItems(prev, index, id));
  };

  const onMouseEnter = (hoveredItemIndex: number) => {
    setHover(true);

    const { id } = rating[hoveredItemIndex];

    const lastActiveItemIndex = countActiveItems(rating);

    if (lastActiveItemIndex === hoveredItemIndex) {
      return setHoverRating(rating);
    }

    if (hoveredItemIndex > lastActiveItemIndex) {
      return setHoverRating(mouseEnterSlice(rating, hoveredItemIndex, id));
    }

    if (hoveredItemIndex < lastActiveItemIndex) {
      return setHoverRating(sliceItems(rating, hoveredItemIndex, id));
    }
  };

  const onMouseLeave = () => setHover(false);

  const ratingCollection = hover ? hoverRating : rating;

  return (
    <>
      <div className={clsx(classes.Rating, className)}>
        {ratingCollection.map(({ id, active }, index) => {
          return (
            <Star
              index={index}
              key={id}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={onClick}
              active={active}
              starProps={starProps}
            />
          );
        })}
        {typeof stars === "object" && (
          <div className={classes.label}>
            {rating[ratingValue - 1] && rating[ratingValue - 1]["label"]}
          </div>
        )}
      </div>
    </>
  );
};

export default RatingFC;
