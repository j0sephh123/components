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
  onChange: (val: number) => void;
  numberOfStars?: 5 | 10;
  className?: string;
  starProps: {
    type: RatingType;
    starClassName?: string;
    fill?: string;
  };
};

export type StarProps = {
  size?: StarSize;
  disabled?: boolean;
  readOnly?: boolean;
  onClick: (id: number) => void;
  onMouseEnter: (id: number) => void;
  onMouseLeave: (id: number) => void;
  index: number;

  starProps: {
    type: RatingType;
    starClassName?: string;
    fill?: string;
  };
} & Partial<Rating>;

export enum StarSize {
  small = "18px",
  medium = "24px",
  large = "30px",
}
