import styled from 'styled-components';

import { Props, SIZE } from './types';

const getSize = (size: SIZE) => {
  let number;
  if (size === SIZE.SMALL) {
    number = 30;
  } else if (size === SIZE.MIDDLE) {
    number = 50;
  } else if (size === SIZE.LARGE) {
    number = 150;
  }

  return `
    width: ${number}px;
    height: ${number}px;
  `;
};

const Container = styled.div`
  ${(props: { url: string; size: SIZE }) => getSize(props.size)};
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 50%;
`;

export const Avatar: React.FC<Props> = ({
  size = SIZE.SMALL,
  url,
  className = '',
}: Props) => <Container className={className} size={size} url={url} />;
