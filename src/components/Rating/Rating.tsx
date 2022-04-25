import classes from "./Rating.module.css";
import { useState } from "react";
import { RatingProps } from "../../types";
import Star from "./Star/Star";
import {
  findItemIndex,
  resetActive,
  resetClickedAndActive,
  setClickedItems,
} from "./utils";

const Rating = ({ initialRating }: RatingProps) => {
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

      return setRating((prev) => [
        ...prev
          .slice(0, itemIndex + 1)
          .map((item) => setClickedItems(item, id, true)),
        ...prev
          .slice(itemIndex + 1)
          .map((item) => setClickedItems(item, id, false)),
      ]);
    }

    setRating((prev) => [
      ...prev
        .slice(0, itemIndex + 1)
        .map((item) => setClickedItems(item, id, true)),
      ...prev
        .slice(itemIndex + 1)
        .map((item) => setClickedItems(item, id, false)),
    ]);
  };

  const onMouseEnter = (id: number) => {
    setHover(true);

    const hoveredItemIndex = rating.findIndex((item) =>
      findItemIndex(item, id)
    );
    const lastActiveItemIndex =
      rating.filter((itemArg) => itemArg.active).length - 1;

    if (lastActiveItemIndex === hoveredItemIndex) {
      return setHoverRating(rating);
    }

    if (hoveredItemIndex > lastActiveItemIndex) {
      return setHoverRating(() => [
        ...rating
          .slice(0, hoveredItemIndex + 1)
          .map((item) => setClickedItems(item, id, true)),
        ...rating.slice(hoveredItemIndex + 1),
      ]);
    }

    if (hoveredItemIndex < lastActiveItemIndex) {
      return setHoverRating(() => [
        ...rating
          .slice(0, hoveredItemIndex + 1)
          .map((item) => setClickedItems(item, id, true)),
        ...rating
          .slice(hoveredItemIndex + 1)
          .map((item) => setClickedItems(item, id, false)),
      ]);
    }
  };
  const onMouseLeave = (id: number) => {
    setHover(false);
  };

  const ratingMap = hover ? hoverRating : rating;

  return (
    <>
      <div className={classes.Rating}>
        {ratingMap.map(({ id, active }) => {
          return (
            <Star
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={onClick}
              active={active}
              id={id}
              key={id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Rating;
