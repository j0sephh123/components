import Star from "./Star";
import classes from "./Rating.module.css";
import { useState } from "react";

const initialRating = [
  { id: 1, active: true, clicked: false },
  { id: 2, active: true, clicked: false },
  { id: 3, active: true, clicked: false },
  { id: 4, active: true, clicked: false },
  { id: 5, active: true, clicked: false },
];

const Rating = () => {
  const [rating, setRating] = useState(initialRating);

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

  return (
    <>
      <div className={classes.Rating}>
        {rating.map(({ id, active }) => {
          return <Star onClick={onClick} active={active} id={id} key={id} />;
        })}
      </div>
      <pre>{JSON.stringify(rating, null, 2)}</pre>
    </>
  );
};

export default Rating;
