export type Rating = {
  id: number;
  active: boolean;
  clicked: boolean;
};

export enum RatingType {
  controlled = "controlled",
  readOnly = "readOnly",
  disabled = "disabled",
}

export type RatingProps = {
  initialRating: Rating[];
  type: RatingType;
};

export type StarProps = {
  size?: StarSize;
  disabled?: boolean;
  readOnly?: boolean;
  onClick: (id: number) => void;
  onMouseEnter: (id: number) => void;
  onMouseLeave: (id: number) => void;
} & Rating;

export enum StarSize {
  small = "18px",
  medium = "24px",
  large = "30px",
}
