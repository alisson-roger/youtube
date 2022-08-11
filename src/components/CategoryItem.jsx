import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 0.25rem;
  height: 4.5rem;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 25rem;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 1.2rem;
`;

const Button = styled.button`
  border: 1px solid black;
  padding: 0.5rem;
  background-color: transparent;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
