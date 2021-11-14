import FatText from 'src/components/FatText';
import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const HeaderColumn = styled.div``;

export const UsernameRow = styled.div`
  display: flex;
  align-items: center;
`;

export const Username = styled.span`
  font-size: 26px;
  display: block;
`;

export const Counts = styled.ul`
  display: flex;
  margin: 15px 0px;
`;

export const Count = styled.li`
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FullName = styled(FatText)`
  font-size: 16px;
`;

export const Bio = styled.p`
  margin: 10px 0px;
`;

export const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;
