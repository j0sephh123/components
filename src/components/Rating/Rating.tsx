import classes from "./Rating.module.css";
import { useState } from "react";
import { RatingProps, RatingType } from "../../types";
import Star from "./Star/Star";
import {
  countActiveItems,
  findItemIndex,
  mouseEnterSlice,
  resetActive,
  resetClickedAndActive,
  sliceItems,
} from "./utils";

const Rating = ({ initialRating, type }: RatingProps) => {
  const [hover, setHover] = useState(false);
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(initialRating);

  const onClick = (id: number) => {
    const itemIndex = rating.findIndex((item) => findItemIndex(item, id));
    const isActive = rating[itemIndex]["active"];
    const isClicked = rating[itemIndex]["clicked"];

    if (isActive && id === 5) {
      return setRating((prev) => prev.map(resetActive));
    }

    if (isActive && id !== 1) {
      if (isClicked) {
        return setRating((prev) => prev.map(resetClickedAndActive));
      }

      return setRating((prev) => sliceItems(prev, itemIndex, id));
    }

    setRating((prev) => sliceItems(prev, itemIndex, id));
  };

  const onMouseEnter = (id: number) => {
    setHover(true);

    const hoveredItemIndex = rating.findIndex((item) =>
      findItemIndex(item, id)
    );
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
      <div className={classes.Rating}>
        {ratingCollection.map((ratingItem) => {
          return (
            <Star
              disabled={type === RatingType.disabled}
              readOnly={type === RatingType.readOnly}
              key={ratingItem.id}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={onClick}
              {...ratingItem}
            />
          );
        })}
      </div>
    </>
  );
};

export default Rating;
