const BORDER_RADIUS = '4px';
const BOX_BORDER = '1px solid #e6e6e6';

export const theme = {
  colors: {
    bg: '#FAFAFA',
    black: '#262626',
    blue: '#3897f0',
    darkGray: '#999',
    darkBlue: '#003569',
    lightGray: '#c7c7c7',
    red: '#ED4956',
  },
  maxWidth: '935px',
  boxBorder: '1px solid #dbdbdb',

  borderRadius: '4px',
  whiteBox: `border-radius: ${BORDER_RADIUS};
    border: ${BOX_BORDER};
    background-color: white;`,
} as const;
