import { CloseIcon, User } from 'src/components/ui/elements/icons';
import { List } from 'src/components/ui/elements/list/index';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 8px 0;
`;

export const CircleWrapper = styled.div`
  border: 2px solid red;
  border-radius: 50%;
  padding: 3px;
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: antiquewhite;
  border-radius: 50%;
  width: 44px;
  height: 44px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0px 10px;
`;

export const Div = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  justify-content: space-between;

  &:hover {
    background-color: #fafafa;
  }
`;

export const ListItem: React.FC = () => (
  <Div>
    <CircleWrapper>
      <Circle>
        <User />
      </Circle>
    </CircleWrapper>
    <Text>
      <div>Name</div>
      <div>Description</div>
    </Text>
    <div>
      <CloseIcon />
    </div>
  </Div>
);

export interface Props {}

export const SearchList = (props: Props) => {
  const mockData = Array.from(Array(10).keys());
  return (
    <Container>
      <List data={mockData} renderItem={(item) => <ListItem />} />
    </Container>
  );
};
