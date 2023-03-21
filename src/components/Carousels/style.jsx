const { default: styled } = require("styled-components");

export const CarouselPageWrapper = styled.div``;

export const CarouselImgsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 35px;
`;

export const CarouselImg = styled.img`
  max-width: 400px;
  border-radius: 4px;
`;

export const CarouselTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;
