import Star from "./Star";
import classes from "./Rating.module.css";
import { useState } from "react";
import { RatingProps } from "../../types";

const Rating = ({ initialRating }: RatingProps) => {
  const [hover, setHover] = useState(false);
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(initialRating);

  const onClick = (id: number) => {
    const itemIndex = rating.findIndex((itemArg) => itemArg.id === id);
    const isActive = rating[itemIndex]["active"];
    const isClicked = rating[itemIndex]["clicked"];

    if (isActive && id === 5) {
      return setRating((prev) =>
        prev.map((ratingItem) => ({ ...ratingItem, active: false }))
      );
    }

    if (isActive && id !== 1) {
      if (isClicked) {
        return setRating((prev) =>
          prev.map((ratingItem) => ({
            ...ratingItem,
            active: false,
            clicked: false,
          }))
        );
      }

      return setRating((prev) => [
        ...prev.slice(0, itemIndex + 1).map((ratingItem) => ({
          ...ratingItem,
          active: true,
          clicked: id === ratingItem.id,
        })),
        ...prev.slice(itemIndex + 1).map((ratingItem) => ({
          ...ratingItem,
          active: false,
          clicked: id === ratingItem.id,
        })),
      ]);
    }

    setRating((prev) => [
      ...prev.slice(0, itemIndex + 1).map((ratingItem) => ({
        ...ratingItem,
        active: true,
        clicked: id === ratingItem.id,
      })),
      ...prev.slice(itemIndex + 1),
    ]);
  };

  const onMouseEnter = (id: number) => {
    setHover(true);

    const hoveredItemIndex = rating.findIndex((itemArg) => itemArg.id === id);
    const isActive = rating[hoveredItemIndex]["active"];
    const isClicked = rating[hoveredItemIndex]["clicked"];
    const lastActiveItemIndex =
      rating.filter((itemArg) => itemArg.active).length - 1;
    console.log({ lastActiveItemIndex, hoveredItemIndex });

    if (lastActiveItemIndex === hoveredItemIndex) {
      return setHoverRating(rating);
    }

    if (hoveredItemIndex > lastActiveItemIndex) {
      return setHoverRating(() => [
        ...rating.slice(0, hoveredItemIndex + 1).map((ratingItem) => ({
          ...ratingItem,
          active: true,
          clicked: id === ratingItem.id,
        })),
        ...rating.slice(hoveredItemIndex + 1),
      ]);
    }

    if (hoveredItemIndex < lastActiveItemIndex) {
      return setHoverRating(() => [
        ...rating.slice(0, hoveredItemIndex + 1).map((ratingItem) => ({
          ...ratingItem,
          active: true,
          clicked: id === ratingItem.id,
        })),
        ...rating.slice(hoveredItemIndex + 1).map((ratingItem) => ({
          ...ratingItem,
          active: false,
          clicked: id === ratingItem.id,
        })),
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
