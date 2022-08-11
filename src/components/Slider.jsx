import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { sliderItems } from '../data';

const Container = styled.div`
  width: 99vw;
  height: 100vh;
  display: flex;
  background-color: #f0855e;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '.8rem'};
  right: ${(props) => props.direction === 'right' && '.8rem'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 130%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 4rem;
`;

const Title = styled.h1`
  font-size: 7rem;
`;
const Description = styled.h1`
  margin: 4rem 0rem;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Button = styled.button`
  padding: 0.7rem;
  font-size: 1.2rem;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('left')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
