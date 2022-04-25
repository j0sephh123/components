export type Rating = {
  id: number;
  active: boolean;
  clicked: boolean;
};

export type RatingProps = {
  initialRating: Rating[];
};

export type StarProps = {
  size?: StarSize;
  active: boolean;
  id: number;
  disabled?: boolean;
  onClick: (id: number) => void;
  onMouseEnter: (id: number) => void;
  onMouseLeave: (id: number) => void;
};

export enum StarSize {
  small = "18px",
  medium = "24px",
  large = "30px",
}
