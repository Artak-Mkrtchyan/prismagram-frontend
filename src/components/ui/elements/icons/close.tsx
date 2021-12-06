import styled from 'styled-components';

export const CloseCircleIcon = styled.span`
  position: absolute;
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  right: 5px;
  display: inline-block;
  vertical-align: baseline;
  background-size: 440px 411px;
  background-position: -380px -96px;
  background-image: url(./bcd90c1d4868.png);
`;

export const CloseIcon = () => (
  <svg
    aria-label="Закрыть"
    color="#8e8e8e"
    fill="#8e8e8e"
    height="16"
    role="img"
    viewBox="0 0 48 48"
    width="16"
  >
    <path
      clip-rule="evenodd"
      d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
      fill-rule="evenodd"
    ></path>
  </svg>
);
