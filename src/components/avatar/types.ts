export enum SIZE {
  SMALL = 'sm',
  MIDDLE = 'md',
  LARGE = 'lg',
}

export interface Props {
  size: SIZE;
  url: string;
  className?: string;
}
