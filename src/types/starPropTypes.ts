export interface StarRatingPropTypes {
  maxRating: number;
  color: string;
  size: number;
  messages: string[];
  defaultRating?: number;
}

export interface StarPropTypes {
  full: boolean;
  color: string;
  size: number;
  onRate: () => void;
  onHoverIn: () => void;
  onHoverOut: () => void;
}
