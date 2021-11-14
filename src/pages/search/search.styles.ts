import styled from 'styled-components';

export const Section = styled.div`
  margin-bottom: 50px;
  display: grid;
  grid-gap: 25px;
`;

export const Wrapper = styled.div`
  text-align: center;
`;

export const PostSection = styled(Section)`
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;
