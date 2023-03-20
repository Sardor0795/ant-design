import styled from "styled-components";
import NotFoundImg from "../../assets/img/404_page.jpg";

export const NotFoundPage = styled.div`
  /* background-color: #202020; */
  /* height: calc(100vh - 67px); */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

export const NotFoundPageImg = styled.div`
  width: 800px;
  height: 460px;
  background-image: url("${NotFoundImg}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
